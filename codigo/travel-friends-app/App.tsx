import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UserProvider } from "./src/contexts/userData";
import { Routes } from "./src/routes";

import { navigationRef } from "./src/routes/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
}
