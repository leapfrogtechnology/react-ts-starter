import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InputLabel from './InputLabel';

interface IProps {
  label?: string;
  isMandatory?: boolean;
  name?: string;
  error?: any;
  placeholder?: string;
  value?: any;
  options?: Array<{ label: string; value: any }>;
  handleChange: (obj: { target: { name?: string; value: any } }) => void;
  disabled?: boolean;
  clearable?: boolean;
  uniqueIdentifier?: string;
}

const FormSelect = (props: IProps) => {
  const { label, isMandatory, name, error, placeholder, value, options, handleChange, disabled, clearable } = props;

  return (
    <div className="form-group">
      {label && InputLabel(label, isMandatory)}
      <Select
        options={options}
        name={name}
        className={classnames('', { 'child-border-red': error })}
        value={value}
        isDisabled={disabled}
        isClearable={clearable}
        onChange={selectedOption =>
          handleChange({ target: { name: name, value: selectedOption ? selectedOption.value : null } })
        }
        placeholder={placeholder}
      />
      {error && <span className="color-red">{error}</span>}
    </div>
  );
};

FormSelect.propTypes = {
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  isMandatory: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),
  uniqueIdentifier: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
};

export default FormSelect;
