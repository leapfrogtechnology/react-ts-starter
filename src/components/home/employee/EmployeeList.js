import moment from 'moment';
import React, { Component } from 'react';

import Table from 'components/common/table';

//import history from 'utils/history';
//import * as routes from 'constants/routes';
//import { interpolate } from 'utils/string';
import { handleError } from 'utils/errorHandler';
import * as employeeService from 'services/employeeService';

const columns = [
  {
    Header: 'SN.',
    accessor: 'sn',
    maxWidth: 100,
    Cell: props => <span>{props.index + 1}</span>,
  },
  {
    Header: 'FirstName',
    accessor: 'firstName'
  },
  {
    Header: 'LastName',
    accessor: 'lastName',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Date of birth',
    accessor: 'dob',
    Cell: props => <span>{moment(props.value).format('LL')}</span>,
  },
  {
    Header: 'Address',
    accessor: 'address',
  }
];

/**
 *
 * Sample component to list employee
 *
 */
class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  setLoading = loading => {
    this.setState({
      loading,
    });
  };

  fetchEmployees = async () => {
    try {
      this.setLoading(true);
      const employees = await employeeService.fetchEmployees();
      this.setState({ employees: employees.data, loading: false });
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
      handleError(err);
    }
  };

  render() {
    const { employees, loading } = this.state;

    return (
      <div className="container">
        <div className="full-scope-card">
          <div className="full-scope-card__header">
            <div className="table-header">
              <h3>{"Employee List"}</h3>
            </div>
          </div>
          <div className="full-scope-card__content">
            <Table
              data={employees}
              showPagination={false}
              minRows={3}
              columns={columns}
              loading={loading}
              getTrProps={(state, rowInfo) => {
                return {
                  onClick: e => {
                    //TODO: click implementation details
                  },
                };
              }}
            />
          </div>
        </div>
      </div>   
    );
  }
}

export default EmployeeList;