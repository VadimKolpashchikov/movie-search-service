import { UserContext } from '../../context/user.context.js';
import { useUserLogin } from '../../hooks/useUserLogin.hook.js';

export default function UserContextProvider({ children }) {
  const userLoginState = useUserLogin();

  return (
    <UserContext.Provider value={userLoginState}>
      {children}
    </UserContext.Provider>
  );
}
