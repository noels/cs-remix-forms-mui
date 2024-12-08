import {useState} from "react";
import Form from "~/forms/RemixForm";
import {addContraSchema, saveLedgerSchema} from "~/routes/_index";
import {ActionFunctionArgs, json, redirect} from "@remix-run/node";
import { applySchema } from "composable-functions";
import { createFormAction } from "remix-forms";
import {useLoaderData} from "@remix-run/react";
import Box from "@mui/material/Box";
import {z} from "zod";


export default function Page() {

  const ledgerEntries: any = useLoaderData()  ?? [];
  //check it balances
  let totalDebits = 0;
  let totalCredits = 0;
  ledgerEntries?.forEach((entry: any) => {
    totalDebits += entry?.debitCredit === 'Debit' ? entry.amount : 0;
    totalCredits +=  entry?.debitCredit === 'Credit' ? entry.amount : 0;
  });
  const canPost = totalCredits > 0 && (totalCredits - totalDebits) === 0;
  const buttonAction = canPost ? 'postLedger' : 'saveLedger';
  console.log("Rendering form with action: ", buttonAction, canPost, totalDebits, totalCredits, ledgerEntries.length);


  return (
    <>
      <Box>
      {(ledgerEntries as Array<any>)?.map((entry: any, idx: number) => {
        return (
          <Box key={idx}>
            {entry.txDate}|
            {entry.description}|
            {entry.debitCredit}|
            {entry.amount}
          </Box>);
      })}
        Totals:{totalDebits}|{totalCredits}
      </Box>
      <Form
          schema={saveLedgerSchema}
          radio={["debitCredit"]}
          //hiddenFields={["accountId", "ledgerId", "_action"]}
          values={{ accountId: 2, ledgerId: 1, _action: buttonAction,
          }}
      >
        {({ Field, Errors, Button }) => (
            <>
              <Field name="txDate" />
              <Field name="description" />
              <Field name="amount" />
              <Field name="debitCredit" />
              <Field name="accountId" />
              <Field name="ledgerId" />
              <Field name="_action" value={buttonAction}/>
              <Errors />
              <Button>{buttonAction}</Button>
            </>
        )}
      </Form>
      <Form schema={z.object({_action: z.string()})}
            hiddenFields={['_action']}
            values={{_action: 'clearTx'}}
            >
        {({ Field, Errors, Button }) => (
            <><Field name="_action" />
            <Button>Clear</Button></>
        )}
      </Form>
    </>
  )
}