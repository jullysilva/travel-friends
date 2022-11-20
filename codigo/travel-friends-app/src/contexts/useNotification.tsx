import { createContext, useContext, useState, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface INotification {
  type: "info" | "alert" | "warning";
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
    //Pegar de um array rander
    const newNotification: INotification = {
      title: "Nova Promoção!",
      description:
        "Convide um amigo para a Travel e ganhe 50% de desconto no seu próximo passeio.",
      type: "info",
    };
    console.log("notificações =>", notificatioList.length);
    notificatioList.unshift(newNotification);
  }

  function startGeneration() {
    setInterval(() => generateNotification(), 10000);
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
