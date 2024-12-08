import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import { z } from "zod";
import Page from "~/component/page";
import {ActionFunctionArgs, json, redirect} from "@remix-run/node";
import {createFormAction} from "remix-forms";
import {applySchema} from "composable-functions";
import {getFromSession, setSession} from "~/data/auth.server";


export const loader = async ({request}: LoaderFunctionArgs) => {
  const txList = await getFromSession('txList', request);
  return txList;
}

export const saveLedgerSchema = z.object({
  txDate: z.coerce.date().default(new Date()),
  accountId: z.coerce.number(),
  description: z.string().min(3),
  amount: z.coerce.number().multipleOf(0.01).min(0.01),
  ledgerId: z.coerce.number().int(),
  debitCredit: z.enum(["Debit", "Credit"]),
  _action: z.string(),
});

const addPostMutation = applySchema(saveLedgerSchema)(async (values) => {
  console.log("postLedger action called");
  console.log(values);
  return {
    txDate: values.txDate,
    accountId: values.accountId,
    ledgerId: values.ledgerId,
    description: values.description,
    amount: values.amount,
    debitCredit: values.debitCredit
  };
});

const saveLedgerMutation = applySchema(saveLedgerSchema)(async (values) => {
  console.log("saveLedger action called");
  console.log(values);
  return {
    txDate: values.txDate,
    accountId: values.accountId,
    ledgerId: values.ledgerId,
    description: values.description,
    amount: values.amount,
    debitCredit: values.debitCredit
  };
});

const handleResponse = (accountId: number, request: Request) => (async (ledgerEntries: any, init: number | ResponseInit) => {
  if (!ledgerEntries.errors) {
    const txList = await getFromSession('txList', request) ?? [];
    console.log('handle response!');
    txList.push(ledgerEntries);
    return redirect(`/`, {
      status: 302,
      headers: await setSession('txList', txList, request),
    });
  }
  return {}

})

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.clone().formData();
  const action = formData.get("_action");
  console.log(action);
  const accountId =  parseInt(formData.get('accountId') as string) ?? 0;
  if (action === "postLedger") {
    return createFormAction({ redirect, json: handleResponse(accountId, request)})({
      request,
      schema: saveLedgerSchema,
      mutation: addPostMutation,
      environment: {request},
      //successPath: `/` /* path to redirect on success */,
    });
  } else if (action === "saveLedger") {
    return createFormAction({ redirect, json: handleResponse(accountId, request) })({
      request,
      schema: saveLedgerSchema,
      mutation: saveLedgerMutation,
      environment: {request},
      //successPath: "/" /* path to redirect on success */,
    });
  } else if (action === 'clearTx'){
    return redirect(`/`, {
      status: 302,
      headers: await setSession('txList', [], request),
    });
  }
  return {};
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <Page/>
  );
}
