import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface IProps {
  handleChange: (obj: { target: { name: string; value: number } }) => void;
  value: any;
  name: string;
  label: string;
  disabled: boolean;
}

const CheckBox = (props: IProps) => {
  const handleOnChange = (event: ChangeEvent) => {
    const { handleChange, value } = props;

    const newValue = !value;

    handleChange({
      target: {
        name: (event.target as HTMLInputElement).name,
        value: newValue ? 1 : 0,
      },
    });
  };

  const { name, label, value, disabled } = props;
  const id = label + '-input';

  return (
    <div className="radio form-elem mb-10" key={label + '-cbox'}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={Boolean(value)}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <label htmlFor={id} className="form-label dark--text">
        {label}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckBox;
