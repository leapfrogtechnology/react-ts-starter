import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';

const StyledSelect = styled.select``;

const StyledErrorMessage = styled.div``;

const StyledLabel = styled.label``;

interface IProps {
  label?: string;
  id?: string;
  name?: string;
  [key: string]: any;
}

/**
 * Generic Select component
 * @param {*} param
 */
const Select = ({ label, ...props }: IProps) => {
  const [field, meta] = useField(props as any);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </>
  );
};

export default Select;
