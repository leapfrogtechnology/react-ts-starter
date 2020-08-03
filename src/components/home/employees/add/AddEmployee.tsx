import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm';

interface IProps {}

interface IState {
  data: EmployeeData;
}

export interface EmployeeData {
  id?: string;
  firstName: string;
  lastName: string;
  designation: string;
  address: string;
  dob: string;
  designation_value?: any;
}

class AddEmployee extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        designation: '',
        address: '',
        dob: '',
      },
    };
  }

  render() {
    let { data } = this.state;
    return <EmployeeForm data={data} />;
  }
}

export default AddEmployee;
