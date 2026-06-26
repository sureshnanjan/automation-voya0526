export class Employee{
  fname:string;
  lname:string;
  email:string;
  due:number;
  action:string[]
  constructor(name:string,lname:string,em:string,due:number,actions:string[]){
    this.fname = name;
    this.lname = lname;
    this.email = em;
    this.due = due;
    this.action = actions
  }
  getColumns():string[]{
    return [""]
  }
}