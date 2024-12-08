
import * as React from 'react';
import { useField } from 'remix-forms';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  FormControl,
  FormLabel,
  IconButton,
  OutlinedInput,
  Checkbox as MuiCheckbox,
  Select as MuiSelect,
  Button as MuiButton,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup, Alert,
  MenuItem,
  FormControlLabel,
} from '@mui/material';


export const Field = ({ children, hidden, style }: JSX.IntrinsicElements['div']) => {
  return <FormControl hiddenLabel={hidden} fullWidth sx={style}>{children}</FormControl>
};

export const Label = ({ children, htmlFor, id }: JSX.IntrinsicElements['label']) => {
  const field = useField();
  const show_label = !(field.radio && field.options?.map(option => option.name).includes(`${children}`));

  return show_label ? <FormLabel id={id} htmlFor={htmlFor}>{children}</FormLabel> : <></>
};

export const Input = React.forwardRef<
    HTMLInputElement,
    JSX.IntrinsicElements['input']
>(({className, type = 'text', name, id, onChange, onBlur, defaultValue, autoFocus, placeholder, value}, ref) => {
  switch (type) {
    case "currency":
      return <OutlinedInput
          id={id}
          name={name}
          type="number"
          className={className}
          inputRef={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          defaultValue={value || defaultValue}
          inputProps={{step: "0.01", inputMode: "decimal"}}
          onChange={onChange}
          onBlur={onBlur}  />
    case "email":
      return <OutlinedInput
          id={id}
          name={name}
          type={type}
          className={className}
          inputRef={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          defaultValue={value || defaultValue}
          inputMode={"email"}
          onChange={onChange}
          onBlur={onBlur}  />
    default:
      return <OutlinedInput
          id={id}
          name={name}
          type={type}
          className={className}
          inputRef={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          defaultValue={value || defaultValue}
          onChange={onChange}
          onBlur={onBlur} />
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
>(({ defaultValue, autoFocus, children, id, name }, ref) => {
  return (<MuiSelect
          id={id}
          name={name}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          variant='outlined'
          inputRef={ref}>
        { (children as Array<React.ReactElement<HTMLOptionElement>>).map((option: React.ReactElement<HTMLOptionElement>) => {
          return <MenuItem key={option.props.value} value={option.props.value}>{ `${option.props.children}`}</MenuItem>
        })}
      </MuiSelect>
  )
});

export const Radio = React.forwardRef<
    HTMLInputElement,
    JSX.IntrinsicElements['input']
>(({ value, name}, ref) => {
  const field = useField();
  let option = field.options!.find(option => option.value == value);
  return <FormControlLabel name={name} value={value} control={<MuiRadio inputRef={ref} />} label={`${option!.name || value}`} />
});

export const RadioGroup = ({children, ...props}: JSX.IntrinsicElements['fieldset']) => {
  const field = useField();
  const name = props['aria-labelledby']?.split('-')[2];
  return <MuiRadioGroup name={name} defaultValue={field?.value ? field.value  : field.options![0].value}>{children}</MuiRadioGroup>
}

export const Button = ({ className, children, disabled, value, onClick }: JSX.IntrinsicElements['button']) => {

  let startIcon = null;
  if (className === 'add') {
    startIcon = <AddIcon />
  } else if (className === 'del') {
    startIcon = <DeleteIcon />
  } else if (className === 'delIcon') {
    return (
        <IconButton size='small'
                    value={value}
                    type='submit'
                    onClick={(e) => {
                      console.log('clicked');
                    }}
        >
          <DeleteIcon/>
        </IconButton>
    )
  }

  return (
      <MuiButton
          type='submit'
          variant='contained'
          startIcon={startIcon}
          disabled={disabled}
          value={value}
      >{children}</MuiButton>
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
