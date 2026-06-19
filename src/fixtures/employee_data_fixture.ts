import { test as base} from '@playwright/test';
import { Employee } from '../data/employee_data.js';
import { employee_data } from '../data/employee_records.js';

type MyFixtures = {
  employee_data: Employee[][];
};

export const test = base.extend<MyFixtures>({
    employee_data: async ({page},use)=>{
        await use(employee_data);
    }
});
export { expect } from '@playwright/test';

