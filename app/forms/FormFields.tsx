
import * as React from 'react';
import { useField } from 'remix-forms';
import { useFormState } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  Checkbox as MuiCheckbox,
  NativeSelect as MuiSelect,
  Button as MuiButton,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup, Alert, TextField,
} from '@mui/material';


export const Field = ({
  children,
  ...props
}: JSX.IntrinsicElements['div']) => {
  return <FormControl fullWidth {...props} >{children}</FormControl>
};

export const Label = ({
  className,
  children,
  htmlFor,
  id,
}: JSX.IntrinsicElements['label']) => {
  return (
    <FormLabel id={id} htmlFor={htmlFor}>{children}</FormLabel>
  )
}

export const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>(({className, type = 'text', name, id, onChange, onBlur,...props}, ref) => {
  switch (type) {
    case "currency":
      return <OutlinedInput id={id} name={name} type="number" className={className} inputRef={ref} inputProps={{step: "0.01", inputMode: "decimal"}} onChange={onChange} onBlur={onBlur}  />
    case "email":
      return <OutlinedInput id={id} name={name} type={type} className={className} inputRef={ref} inputMode={"email"} onChange={onChange} onBlur={onBlur}  />
    default:
      return <OutlinedInput id={id} name={name} type={type} className={className} inputRef={ref} onChange={onChange} onBlur={onBlur} />
  }
});

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>(({ type = 'checkbox', className, ...props }, ref) => (
<MuiCheckbox className={className} inputRef={ref} inputProps={{...props}} />
));

export const Select = React.forwardRef<
  HTMLSelectElement,
  JSX.IntrinsicElements['select']
>(({ className, ...props }, ref) => {
  
  return (<MuiSelect 
    variant='filled' 
    input={<OutlinedInput />}
    inputProps={{...props}} 
    inputRef={ref}
    className={className}/>)
});

export const Radio = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>(({ type = 'radio', value, name, checked , id, onChange, onBlur}, ref) => (
  <MuiRadio inputRef={ref} name={name} value={value} checked={checked} onChange={onChange} onBlur={onBlur} />
));

export const RadioGroup = (props: JSX.IntrinsicElements['fieldset']) => {
  const field = useField();
  return <MuiRadioGroup  defaultValue={field.options![0].value}>{props.children}</MuiRadioGroup>
}

export const Button = ({
  className,
  ...props
}: JSX.IntrinsicElements['button']) => {
  const formState = useFormState()
  //console.log('button children', children?.toString());

  let startIcon = null;
  if (className === 'add') {
    startIcon = <AddIcon />
  } else if (className === 'del') {
    startIcon = <DeleteIcon />
  }

  return (
    <MuiButton
      type='submit'
      variant='contained'
      startIcon={startIcon}
      {...props}
    />
  )
};

export const Error = (props: JSX.IntrinsicElements['div']) => {
  const {children, ...rest} = props;
  return <div className={"shibolith"} {...rest} >{children}</div>
}

export const Errors = (props: JSX.IntrinsicElements['div']) => {
  const {children, ...rest} = props;
  return <Alert severity='error'>{children}</Alert>
}