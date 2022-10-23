import { createContext, useContext, useState, ReactNode } from "react";

import { User } from "../@types/models.interface";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  userData: User;
  getUser: ({ idUser }: User) => void;
  setUser: (userData: User) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User>({
    idUser: "1",
    cpf: "12345678",
    nome: "leo anjos",
    senha: "abcd",
    email: "leo@gmail.com",
    TOKEN: '',
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
