import { test as base} from '@playwright/test';
import { Employee } from '../data/employee_data.js';
import { employee_data, EmployeeData } from '../data/employee_records.js';

type MyFixtures = {
  employee_data: Employee[][];
  data_class:EmployeeData;
};

export const test = base.extend<MyFixtures>({
    employee_data: async ({page},use)=>{
        await use(employee_data);
    },
    data_class:async ({page},use)=>{
        const data_class_value:EmployeeData = new EmployeeData( 
            [[
  new Employee("suresh","N","suresh@gmail.com",50.00,['edit', 'delete']),
  ],
[
  new Employee("suresh","N","suresh@gmail.com",50.00,['edit', 'delete']),
]]);
    await use(data_class_value);
});
export { expect } from '@playwright/test';

