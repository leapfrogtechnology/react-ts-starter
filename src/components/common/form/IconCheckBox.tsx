import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

interface IProps {
  label?: string;
  name?: string;
  IconComponent?: any;
  isIconImage?: boolean;
  parentClass: string;
  value?: any;
  error?: any;
  handleChange: (obj: { target: { name: string; value: 0 | 1 } }) => void;
  disabled?: boolean;
}

const IconCheckBox = (props: IProps) => {
  const { label, name, IconComponent, isIconImage, parentClass, value, error, handleChange, disabled } = props;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = !value;

    handleChange({
      target: {
        name: event.target.name,
        value: newValue ? 1 : 0,
      },
    });
  };

  return (
    <div className="d-inline-block margin--r margin--b">
      <label
        htmlFor={`${name}-toggle`}
        className={classnames('icon-checkbox-container', {
          [parentClass]: parentClass,
        })}
      >
        <input
          type="checkbox"
          id={`${name}-toggle`}
          name={name}
          checked={Boolean(value)}
          onChange={handleOnChange}
          disabled={disabled}
        />
        <span className="d-flex align-items-center flex-column padding icon-checkbox">
          {isIconImage ? (
            <img src={IconComponent} alt="no-data" className="height--full width--full  margin--b" />
          ) : (
            <IconComponent color="#000" className="height--full width--full  margin--b" />
          )}
          <span>{label}</span>
        </span>
      </label>
      {error && <div className="color-red">{error}</div>}
    </div>
  );
};

IconCheckBox.propTypes = {
  IconComponent: PropTypes.any,
  error: PropTypes.any,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  parentClass: PropTypes.string,
  value: PropTypes.any,
};

export default IconCheckBox;
