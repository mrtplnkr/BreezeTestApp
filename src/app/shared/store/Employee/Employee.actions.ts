import { createAction, props } from "@ngrx/store";

export const ADD_EMPLOYEE='[employee page] add employee';
export const addemployee=createAction(ADD_EMPLOYEE,props<{firstname: string, lastname: string, lookingforwork: boolean, level: number }>());
