import { createAction, props } from "@ngrx/store";
import { EmployeeModel } from "./Employee.model";

export const ADD_EMPLOYEE = '[employee page] add employee details';
export const addemployee = createAction(ADD_EMPLOYEE, props<EmployeeModel>());
