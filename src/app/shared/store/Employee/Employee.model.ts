export interface EmployeeModel {
    id:number,
    title:string,
    description:string
}

export interface Employee extends EmployeeModel {
   Errormessage:string
   //IsLoaded:boolean
}