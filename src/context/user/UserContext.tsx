import { useUserContext } from './hooks/useUserContext.hook';
import type { ReactNode } from 'react';

import { createContext } from 'react';
import type { IUserContext } from './UserContext.type';

const UserContext = createContext<IUserContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const userContext = useUserContext();

  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
