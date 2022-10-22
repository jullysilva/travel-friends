import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: number;
  email: string;
  senha: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  userData: User;
  getUser: ({ id }: User) => void;
  setUser: (userData: User) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User>({
    id: 1,
    email: "leo@gmail.com",
    senha: "1234",
  });

  const setUser = (userData: User) => {
    setUserData(userData);
  };

  const getUser = () => {
    return userData;
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        getUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function userHook(): UserContextData {
  const context = useContext(UserContext);

  return context;
}
