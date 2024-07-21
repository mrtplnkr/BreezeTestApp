import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "./Employee.model";

const getemployeestate=createFeatureSelector<Employee>('employee');

export const getemployee=createSelector(getemployeestate,(state)=>{
    return state.description
});

export const getemployeeinfo=createSelector(getemployeestate,(state)=>{
    return state
});
