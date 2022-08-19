import { createSession } from "api";
import { USER_TOKEN_KEY } from "./constants";

const setUserToken = (token: string) => {
  localStorage.setItem(USER_TOKEN_KEY, token);
};

export const getUserToken = () => localStorage.getItem(USER_TOKEN_KEY);

export const signIn = (email: string, password: string) =>
  createSession(email, password).then(({ user, token }) => {
    setUserToken(token);
    return { user, token };
  });

export const UserService = {
  signIn,
};
