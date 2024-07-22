import { createReducer } from "@ngrx/store";
import { GlobalState } from "./Gloabal.state";

const _AppReducer = createReducer(GlobalState,

)

export function AppReducer(state: any, action: any) {
    return _AppReducer(state, action);
}