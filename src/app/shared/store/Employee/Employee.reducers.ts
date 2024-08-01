import { Action, createReducer, on } from "@ngrx/store";
import { EmployeeState } from "./Employee.state";
import { addemployee } from "./Employee.actions";
import { EmployeeModel } from "./Employee.model";

const _employeeReducer = createReducer(EmployeeState,
    on(addemployee, (state: EmployeeModel, action: Action) => {
        console.log('state', state, action);
        return {
            ...state,
            employee: action
        }
    }),
)

export function employeeReducer(state: EmployeeModel, action: Action) {
    return _employeeReducer(state, action);
}