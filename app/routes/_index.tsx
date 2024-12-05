import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import Form from "~/forms/RemixForm";
import { z } from "zod";
import { applySchema } from "composable-functions";
import { createFormAction } from "remix-forms";
import { redirect, json } from "@remix-run/node";

export const addContraSchema = z.object({
  accountId: z.coerce.number(),
  contraAccountId: z.coerce.number().int(),
  description: z.string().min(3),
  amount: z.coerce.number().multipleOf(0.01).min(0.01),
  ledgerId: z.coerce.number().int(),
  _action: z.string(),
});

export const saveLedgerSchema = z.object({
  txDate: z.coerce.date().default(new Date()),
  accountId: z.coerce.number(),
  description: z.string().min(3),
  amount: z.coerce.number().multipleOf(0.01).min(0.01),
  ledgerId: z.coerce.number().int(),
  debitCredit: z.enum(["Debit", "Credit"]),
  _action: z.string(),
});

let buttonAction = "saveLedger";
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.clone().formData();
  const action = formData.get("_action");
  if (action === "postLedger") {
    return createFormAction({ redirect, json })({
      request,
      schema: addContraSchema,
      mutation: addPostMutation,
      //environment: {request},
      successPath: `/` /* path to redirect on success */,
    });
  } else if (action === "saveLedger") {
    return createFormAction({ redirect, json })({
      request,
      schema: saveLedgerSchema,
      mutation: saveLedgerMutation,
      //environment: {request},
      successPath: "/" /* path to redirect on success */,
    });
  }
  return {};
};

const addPostMutation = applySchema(addContraSchema)(async (values) => {
  console.log("postLedger action called");
  console.log(values);
  buttonAction = "saveLedger";
  return {};
});

const saveLedgerMutation = applySchema(saveLedgerSchema)(async (values) => {
  console.log("saveLedger action called");
  console.log(values);
  buttonAction = "postLedger";
  return {};
});

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  console.log("Rendering form with action: " + buttonAction);
  return (
    <>
      <Form
        schema={saveLedgerSchema}
        radio={["debitCredit"]}
        hiddenFields={["accountId", "ledgerId", "_action"]}
        values={{ accountId: 2, ledgerId: 1, _action: buttonAction }}
      >
        {({ Field, Errors, Button }) => (
          <>
            <Field name="txDate" />
            <Field name="description" />
            <Field name="amount" />
            <Field name="debitCredit" />
            <Field name="accountId" />
            <Field name="ledgerId" />
            <Field name="_action" />
            <Button>{buttonAction}</Button>
          </>
        )}
      </Form>
    </>
  );
}
