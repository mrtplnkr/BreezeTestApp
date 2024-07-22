import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "./AppState.Model";

const getAppstate=createFeatureSelector<AppStateModel>('employee');

export const getEmployeeState=createSelector(getAppstate,(state)=>{
    return state;
});