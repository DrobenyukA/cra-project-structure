import { IUser } from "types";

export interface ISessionState {
  isLoading: boolean;
  user: IUser | null;
  token: string | null;
}
