import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ping } from "api";
import { IUser } from "types";

const base = "@app-name/session";

export const storeUser = createAction(`${base}/store-user`, (user: IUser) => ({
  payload: user,
}));

export const restoreUser = createAsyncThunk(`${base}/restore-user`, () =>
  ping()
);
