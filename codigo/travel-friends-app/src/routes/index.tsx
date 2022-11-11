import React from "react";
import AppTabsRoutes from "./app/app.tabs.routes";

import { InitialRoutes } from "./auth/auth.initial.routes";

import { useAuth } from "../contexts/useAuth";

//TODO: fazer verificação se esta logado ou não para exibir auth ou app

export function Routes() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <AppTabsRoutes />;
  } else {
    return <InitialRoutes />;
  }
}
