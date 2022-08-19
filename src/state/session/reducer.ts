import { createReducer } from "@reduxjs/toolkit";
import { restoreUser, storeUser } from "./actions";
import { ISessionState } from "./types";

const initialState: ISessionState = {
  isLoading: true,
  user: null,
  token: null,
};
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(restoreUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(storeUser, (state, { payload }) => {
      state.user = payload;
    });
});
