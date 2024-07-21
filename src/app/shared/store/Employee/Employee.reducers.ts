import { createReducer,on } from "@ngrx/store";
import { EmployeeState } from "./Employee.state";
import { addemployee, addemployeesuccess, deleteemployee, loademployee, loademployeefail, loademployeesuccess, updateemployee, updateemployeesuccess } from "./Employee.actions";
import { EmployeeModel } from "./Employee.model";

const _employeeReducer = createReducer(EmployeeState,

)

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);

}