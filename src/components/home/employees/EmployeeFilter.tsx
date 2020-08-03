import debounce from 'lodash/debounce';
import React, { Component, KeyboardEvent } from 'react';

import * as keys from '../../../constants/keys';

import { EmployeeFetchOptions } from 'types';

const SEARCH_DELAY = 300;

interface IProps {
  onFilter: (params?: EmployeeFetchOptions) => void;
}

class EmployeeFilter extends Component<IProps, any> {
  onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === keys.ENTER) {
      this.props.onFilter({ firstName: (e.target as HTMLInputElement).value });
    }
  };

  handleChange = debounce(value => {
    if (value.length > 2) {
      this.props.onFilter({ firstName: value });
    } else if (value.length === 0) {
      this.props.onFilter();
    }
  }, SEARCH_DELAY);

  render() {
    return (
      <div className="container">
        <input
          style={{
            width: '100%',
            padding: '4px',
            marginBottom: '10px',
          }}
          type="text"
          placeholder="Search Employees by FirstName"
          onChange={e => this.handleChange(e.target.value)}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default EmployeeFilter;
