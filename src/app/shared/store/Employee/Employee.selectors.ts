import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "../Global/AppState.Model";

const getEmployeeState = createFeatureSelector<AppStateModel>('employee');

export const getEmployeeInfo = createSelector(getEmployeeState, state => {
    return state.employee
});
