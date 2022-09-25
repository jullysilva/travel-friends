import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ProfileRoutesParams } from "../routes";

import { Profile } from "../../screens/app/Profile";

const { Navigator, Screen } = createStackNavigator<ProfileRoutesParams>();

export function ProfileRoutes() {
  return (
    <Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
