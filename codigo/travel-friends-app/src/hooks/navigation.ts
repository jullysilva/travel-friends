import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { HomeRoutesParams, TermsRoutesParams } from "../routes/routes";

export function useHomeNavigation() {
  const navigation = useNavigation<StackNavigationProp<HomeRoutesParams>>();
  return navigation;
}

export function useTermsNavigation() {
  const navigation = useNavigation<StackNavigationProp<TermsRoutesParams>>();
  return navigation;
}
