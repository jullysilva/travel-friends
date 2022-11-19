import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HomeRoutesParams } from "../routes";

import Home from "../../screens/app/Home";
import Roadmap from "../../screens/app/Roadmap";
const { Navigator, Screen } = createStackNavigator<HomeRoutesParams>();

export function HomeRoutes() {
  return (
    <Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Roadmap" component={Roadmap} />
    </Navigator>
  );
}
