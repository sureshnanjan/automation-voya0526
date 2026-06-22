import {test,expect} from '../fixtures/employee_data_fixture';
import type { DataTableOperations } from '../operations/data_table_operations.js';
test("There are 2 Examples",async ({page,employee_data})=>{
    //console.log(employee_data)
    const expected_count = employee_data.length;
    const dtpage:DataTableOperations;
    const actual_tables = (await dtpage.getAvailabeTables()).length
    expect(actual_tables).toEqual(expected_count)
});
test("Table 1 has correct colums",async ({page,employee_data})=>{
    //console.log(employee_data)
});
test("Table 1 has correct number of colums",async ({page,employee_data})=>{
    //console.log(employee_data)
    //const expected = (employee_data[0])?.getColumns()
});
test("Table 1 has correct number of records",async ({page,employee_data})=>{
    //console.log(employee_data)
});