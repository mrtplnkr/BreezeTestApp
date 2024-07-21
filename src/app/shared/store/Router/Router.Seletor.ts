import { createFeatureSelector, createSelector } from "@ngrx/store";
import {RouterReducerState} from '@ngrx/router-store'

const getrouterstate=createFeatureSelector<RouterReducerState>('router');

export const getrouterinfo=createSelector(getrouterstate,(state)=>{
    return state.state.params['id'];
})