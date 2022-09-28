import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { TermsRoutesParams } from "../routes";

import Terms from "../../screens/auth/Terms";
import Home from "../../screens/app/Home";
const { Navigator, Screen } = createStackNavigator<TermsRoutesParams>();

export function TermsRoutes() {
  return (
    <Navigator
      initialRouteName={"Terms"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Terms" component={Terms} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
