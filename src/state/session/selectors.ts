import { ISessionState } from "./types";

export const getSessionUser = <T extends { session: ISessionState }>({
  session,
}: T) => session.user;

export const getSessionToken = <T extends { session: ISessionState }>({
  session,
}: T) => session.token;

export const getSessionLoadingState = <T extends { session: ISessionState }>({
  session,
}: T) => session.isLoading;
