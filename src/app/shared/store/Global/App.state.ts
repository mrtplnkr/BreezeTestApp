import { employeeReducer } from "../Employee/Employee.reducers";
import { AppReducer } from "./App.Reducer";
import {routerReducer} from '@ngrx/router-store'

export const AppState={
    employee:employeeReducer,
    app:AppReducer,
    router:routerReducer
}