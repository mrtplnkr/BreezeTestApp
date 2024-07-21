import { createAction, props } from "@ngrx/store";
import { EmployeeModel } from "./Employee.model";

export const LOAD_BLOG_SUCCESS='[employee page] load employee success';
export const LOAD_BLOG_FAIL='[employee page] load employee fail';
export const LOAD_BLOG='[employee page] load employee';
export const ADD_BLOG_SUCCESS='[employee page] add employee success';
export const ADD_BLOG='[employee page] add employee';
export const UPDATE_BLOG='[employee page] update employee';
export const UPDATE_BLOG_SUCCESS='[employee page] update employee success';
export const DELETE_BLOG='[employee page] delete employee';
export const DELETE_BLOG_SUCCESS='[employee page] delete employee success';


export const loademployee=createAction(LOAD_BLOG);

export const loademployeesuccess=createAction(LOAD_BLOG_SUCCESS,props<{employeelist:EmployeeModel[]}>())

export const loademployeefail=createAction(LOAD_BLOG_FAIL,props<{Errortext:any}>())

export const addemployee=createAction(ADD_BLOG,props<{employeeinput:EmployeeModel}>());

export const addemployeesuccess=createAction(ADD_BLOG_SUCCESS,props<{employeeinput:EmployeeModel}>());

export const updateemployee=createAction(UPDATE_BLOG,props<{employeeinput:EmployeeModel}>());

export const updateemployeesuccess=createAction(UPDATE_BLOG_SUCCESS,props<{employeeinput:EmployeeModel}>());

export const deleteemployee=createAction(DELETE_BLOG,props<{id:number}>());

export const deleteemployeesuccess=createAction(DELETE_BLOG_SUCCESS,props<{id:number}>());

