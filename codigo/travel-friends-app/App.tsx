import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./src/routes";

import { navigationRef } from "./src/routes/RootNavigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
}
