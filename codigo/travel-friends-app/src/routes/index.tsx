import React from "react";
import AppTabsRoutes from "./app/app.tabs.routes";

import { InitialRoutes } from "./auth/auth.initial.routes";

//TODO: fazer verificação se esta logado ou não para exibir auth ou app

export function Routes() {
  return <AppTabsRoutes />;
}
