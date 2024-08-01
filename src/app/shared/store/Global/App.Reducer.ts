import { Action, createReducer } from "@ngrx/store";
import { GlobalState } from "./Gloabal.state";
import { AppStateModel } from "./AppState.Model";

const _AppReducer = createReducer(GlobalState,

)

export function AppReducer(state: AppStateModel, action: Action) {
    return _AppReducer(state, action);
}