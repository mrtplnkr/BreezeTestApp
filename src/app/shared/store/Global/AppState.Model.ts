import { Employee } from "../Employee/Employee.model";

export interface AppStateModel{
    EmployeeDetails?: Employee
    IsLoaded: boolean,
}