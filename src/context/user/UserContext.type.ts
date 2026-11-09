export type UserType = { name: string; isLogged: boolean };

export interface IUserContext {
  user: UserType | null;
  login: (name: string) => void;
  logout: () => void;
}
