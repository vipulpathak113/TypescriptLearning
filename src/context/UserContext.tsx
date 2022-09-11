import React, { useState, createContext } from "react";

type UserContextProviderType = {
  children: React.ReactNode;
};

type AuthUser = {
  name: string;
  email: string;
};

type ContextValue = {
  user: null | AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as ContextValue);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<null | AuthUser>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
