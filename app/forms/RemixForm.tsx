import type { FormProps, FormSchema } from 'remix-forms'
import { createForm } from 'remix-forms'
// For Remix, import it like this
import { Form as RemixForm, useActionData, useSubmit, useNavigation } from '@remix-run/react'

const BaseForm = createForm({
  component: RemixForm,
  useNavigation,
  useSubmit,
  useActionData
});

import { Error, Errors, Field, Label, Input, Checkbox, Select, Button, Radio, RadioGroup } from './FormFields'

export default function Form<Schema extends FormSchema>(props: FormProps<Schema>) {
  return (
    <BaseForm<Schema>
      labelComponent={Label}
      fieldComponent={Field}
      inputComponent={Input}
      selectComponent={Select}
      checkboxComponent={Checkbox}
      buttonComponent={Button}
      radioComponent={Radio}
      radioGroupComponent={RadioGroup}
      errorComponent={Error}
      globalErrorsComponent={Errors}
      fieldErrorsComponent={Errors}
      hiddenFields={['ledgerId']}
      {...props}
    />
  )
}
