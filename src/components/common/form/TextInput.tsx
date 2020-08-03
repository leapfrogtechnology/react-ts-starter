import React from 'react';
import { useField } from 'formik';

interface IProps {
  label: string;
  name: string;
  id: string;
}

/**
 * Generic TextInput field
 * @param {*} param
 */
const TextInput = ({ label, ...props }: IProps) => {
  const [field, meta] = useField(props as any);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default TextInput;
