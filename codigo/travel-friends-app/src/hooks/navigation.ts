import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { HomeRoutesParams, InitialRoutesParams } from "../routes/routes";

export function useHomeNavigation() {
  const navigation = useNavigation<StackNavigationProp<HomeRoutesParams>>();
  return navigation;
}

export function useInitialNavigation() {
  const navigation = useNavigation<StackNavigationProp<InitialRoutesParams>>();
  return navigation;
}
