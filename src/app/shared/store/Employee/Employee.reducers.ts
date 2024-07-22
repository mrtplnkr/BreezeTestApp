import { createReducer,on } from "@ngrx/store";
import { EmployeeState } from "./Employee.state";
import { addemployee } from "./Employee.actions";

const _employeeReducer = createReducer(EmployeeState,
    on(addemployee,(state,action)=>{
        return{
            ...state,
            ...action
        }
    }),
)

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}