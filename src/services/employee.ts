import config from 'config';
import http from 'utils/http';

import { EmployeeData } from 'types';

export interface EmployeeFetchOptions {
  firstName?: string;
}

/**
 * Fetch all employees.
 *
 * @param {{firstName: string}} options
 * @returns {object}
 */
export async function fetchEmployees(options: EmployeeFetchOptions = {}) {
  const employees = await http.get(config.endpoints.employee, {
    params: {
      firstName_like: options.firstName,
    },
  });

  return employees;
}

/**
 * Save an employee.
 *
 * @param {object} employee
 * @returns {object}
 */
export async function save(employee: EmployeeData) {
  const response = await http.post(config.endpoints.employee, employee);

  return response.data;
}

/**
 * Update an employee.
 *
 * @param {object} employee
 * @returns {object}
 */
export async function update(employee: EmployeeData) {
  const response = await http.put(`${config.endpoints.employee}/${employee.id}`, employee);

  return response.data;
}

/**
 * Fetch employee by id.
 *
 * @param {string} id
 * @returns {object}
 */
export async function fetchById(id: string) {
  const response = await http.get(`${config.endpoints.employee}/${id}`);

  return response.data;
}
