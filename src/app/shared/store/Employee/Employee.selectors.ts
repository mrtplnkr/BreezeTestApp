import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeModel } from "./Employee.model";

const getemployeestate=createFeatureSelector<EmployeeModel>('employee');

export const getemployee=createSelector(getemployeestate,(state)=>{
    return state.firstname
});

export const getemployeeinfo=createSelector(getemployeestate,(state)=>{

    return state
});
