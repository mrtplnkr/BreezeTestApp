import { createReducer,on } from "@ngrx/store";
import { EmployeeState } from "./Employee.state";

const _employeeReducer = createReducer(EmployeeState,

)

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);

}