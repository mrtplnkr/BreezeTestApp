import { createReducer, on } from "@ngrx/store";
import { EmployeeState } from "./Employee.state";
import { addemployee } from "./Employee.actions";
import { EmployeeModel } from "./Employee.model";

const _employeeReducer = createReducer(EmployeeState,
    on(addemployee, (state,action)=>{
        return{
            ...state,
            employee: action
        }
    }),
)

export function employeeReducer(state: any, action: any) : EmployeeModel {
    return _employeeReducer(state, action);
}