import {
  ActionCreatorsMapObject,
  bindActionCreators,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { reducer as session } from "./session";

const reducer = combineReducers({
  session,
});

export type IAppState = ReturnType<typeof reducer>;

export const useStateActions = <A, M extends ActionCreatorsMapObject<A>>(
  actions: M
) => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export const store = configureStore({
  reducer,
  devTools: {
    name: "Application name",
  },
});
