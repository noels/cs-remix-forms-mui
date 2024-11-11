import {createElement, useEffect, useRef} from 'react';
import {Input} from '@mui/material';

export default function UncontrolledInput(
  {value,
  component,
  name,
  id,
  ...rest}: any,

) {

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current && !!value) {
      (inputRef.current as any).value = value;
    }
  }, [value])

  return createElement(component, {name: name, id: id, inputRef: inputRef, defaultValue: value, ...rest});
}