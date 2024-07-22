import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeModel } from "./Employee.model";

const getemployeestate=createFeatureSelector<EmployeeModel>('employee');

export const getEmployeeName = createSelector(getemployeestate,(state)=>{
    return state.firstname
});

export const getEmployeeInfo = createSelector(getemployeestate,(state)=>{
    return state
});
