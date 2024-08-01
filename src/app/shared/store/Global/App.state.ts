import { ActionReducerMap } from "@ngrx/store";
import { employeeReducer } from "../Employee/Employee.reducers";

export const AppState: ActionReducerMap<{ employee: any }> = {
    employee: employeeReducer,
}