import { IUser } from "types";
import { fakeRequest } from "utils";

export const ping = () =>
  fakeRequest({
    id: "user-1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  } as IUser);

export const createSession = (email: string, password: string) =>
  fakeRequest({
    user: {
      id: "user-1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    } as IUser,
    token: "RANDOM-APP-TOKEN",
  });
