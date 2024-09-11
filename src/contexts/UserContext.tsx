import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserContextType | null>(null);

  useEffect(() => {
    const webApp = window.Telegram.WebApp;
    const initDataUnsafe = webApp?.initDataUnsafe;

    if (initDataUnsafe) {
      setUser(initDataUnsafe.user || null);
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
