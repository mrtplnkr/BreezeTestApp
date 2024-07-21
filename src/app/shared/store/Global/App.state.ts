import { blogReducer } from "../Blog/Blog.reducers";
import { AppReducer } from "./App.Reducer";
import {routerReducer} from '@ngrx/router-store'

export const AppState={
    blog:blogReducer,
    app:AppReducer,
    router:routerReducer
}