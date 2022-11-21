import { createContext, useContext, useState, ReactNode } from "react";

import { notificationDB } from "../database/notificationDB";

interface ProviderProps {
  children: ReactNode;
}

export interface INotification {
  id: number;
  type: string;
  title: string;
  description: string;
  date: Date;
}

interface ContextData {
  notificatioList: Array<INotification>;
  generateNotification: () => void;
  clearNotification: () => void;
  startGeneration: () => void;
}

const NotificationContext = createContext<ContextData>({} as ContextData);

export function NotificationProvider({ children }: ProviderProps) {
  let notificatioList = [
    {
      id: 7,
      title: "Atualização de dados!",
      description:
        "Alguns dados da sua conta precisam ser complementados, por gentileza acesse sua conta!",
      type: "warning",
      date: new Date(),
    },
  ];

  function generateNotification() {
    const num = Math.floor(Math.random() * notificationDB.length);
    const newNotification = notificationDB[num];
    const a = {
      ...newNotification,
      date: new Date(),
    };

    notificatioList.unshift(a);
  }

  function startGeneration() {
    setInterval(() => generateNotification(), 10000);
  }

  function clearNotification() {
    notificatioList = [];
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
