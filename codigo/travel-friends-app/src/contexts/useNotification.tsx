import { createContext, useContext, useState, ReactNode } from "react";

import { notificationDB } from "../database/notificationDB";

interface ProviderProps {
  children: ReactNode;
}

interface INotification {
  id: number;
  type: string;
  title: string;
  description: string;
}

interface ContextData {
  notificatioList: INotification[];
  generateNotification: () => void;
  clearNotification: () => void;
  startGeneration: () => void;
}

const NotificationContext = createContext<ContextData>({} as ContextData);

export function NotificationProvider({ children }: ProviderProps) {
  const [notificatioList, setNotificationList] = useState<INotification[]>(
    [] as INotification[]
  );

  function generateNotification() {
    const num = Math.floor(Math.random() * notificationDB.length);
    const newNotification = notificationDB[num];

    console.log("notificações =>", notificatioList.length, newNotification);
    notificatioList.unshift(newNotification);
  }

  function startGeneration() {
    setInterval(() => generateNotification(), 1000000);
  }

  function clearNotification() {
    setNotificationList([]);
  }

  return (
    <NotificationContext.Provider
      value={{
        notificatioList,
        generateNotification,
        clearNotification,
        startGeneration,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): ContextData {
  const context = useContext(NotificationContext);

  return context;
}
