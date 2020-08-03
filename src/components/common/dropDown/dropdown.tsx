import React from 'react';
import Select, { ActionMeta } from 'react-select';
import classnames from 'classnames';

interface IProps {
  name?: string;
  onInputFieldChange: (name: string, value: string) => void;
  isPlain?: boolean;
  isSmall?: boolean;
  customClassName?: string;
  defaultValue?: any;
}

class DropDown extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  handleOnChange = (value: any, action: ActionMeta<any>) => {
    const { name } = this.props;

    if (name && value.value) {
      if (name === 'evaluationType' || name === 'year') {
        this.props.onInputFieldChange(name, value.value);
      } else {
        this.props.onInputFieldChange(name, value.label);
      }
    }
  };

  render() {
    const { isPlain, isSmall, customClassName } = this.props;

    return (
      <div className="custom-dropdown">
        <Select
          name={this.props.name ? this.props.name : ''}
          defaultValue={this.props.defaultValue}
          onChange={this.handleOnChange}
          classNamePrefix="lf-select"
          menuPortalTarget={document.body}
          styles={{
            menuPortal: base => ({ ...base, zIndex: 9999 }),
            menu: base => ({ ...base, marginTop: 2 }),
          }}
          menuPosition={'absolute'}
          menuPlacement={'auto'}
          className={classnames(
            'lf-select',
            {
              'lf-select--plain': isPlain,
              'lf-select--small': isSmall,
            },
            customClassName
          )}
          {...this.props}
        />
      </div>
    );
  }
}

export default DropDown;
