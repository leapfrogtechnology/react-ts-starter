import moment from 'moment';
import classnames from 'classnames';
import React, { Component, ChangeEventHandler, FocusEventHandler } from 'react';

export enum InputTypes {
  date = 'date',
  password = 'password',
  text = 'text',
  email = 'email',
}

interface IProps {
  initialValue?: string;
  type: InputTypes;
  labelText: string;
  required: boolean;
  placeholder?: string;
  error?: any;
  disabled?: boolean;
  id: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onInputFieldChange?: (name: string, dateOnly: string) => void;
}

class Input extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      date: this.props.type === 'date' && this.props.initialValue ? moment(this.props.initialValue) : null,
      calendarFocused: false,
    };
  }

  onDateChange = (name: string, date: any) => {
    if (date && date._d) {
      const changedDate = new Date(date._d).toISOString();
      const [dateOnly] = changedDate.split('T');

      this.setState(() => ({ date }));

      this.props.onInputFieldChange && this.props.onInputFieldChange(name, dateOnly);
    }
  };

  render() {
    const { labelText, required, placeholder, error, disabled, type, id, name } = this.props;

    let inputView = (
      <input
        id={id}
        name={name}
        type={InputTypes.text}
        placeholder={placeholder}
        className={classnames('lf-input', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
        onChange={this.props.onChange}
        required={required ? true : false}
        disabled={disabled}
        onBlur={this.props.onBlur}
        defaultValue={this.props.initialValue}
      />
    );

    if (type && type === InputTypes.password) {
      inputView = (
        <input
          id={id}
          name={name}
          type={InputTypes.password}
          placeholder={placeholder}
          className={classnames('lf-input', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
          onChange={this.props.onChange}
          required={required ? true : false}
          disabled={disabled}
          onBlur={this.props.onBlur}
          defaultValue={this.props.initialValue}
        />
      );
    }

    return (
      <div className="lf-input-wrap">
        <label htmlFor={labelText} className="lf-input__label">
          {labelText}
          {required && <span className="lf-input__label--required"> * </span>}
        </label>
        {inputView}
        {error && <p className="lf-input__helper">{error}</p>}
      </div>
    );
  }
}

export default Input;
