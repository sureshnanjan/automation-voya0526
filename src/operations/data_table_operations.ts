import { Employee } from "../data/employee_data.js"
type Tables = {
 availableTables: Employee[][]

}
export interface DataTableOperations{
    getTitle():Promise<string>
    getDescription():Promise<string>
    getAvailabeTables():Promise<Employee[]>
    deleteRecord(table:number,record:2):Promise<void>
    editRecord(table:number,record:2,updatedData:Employee):Promise<void>
    sortTable(table:number,column:string,order:string):Promise<void>
}