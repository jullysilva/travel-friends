import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: theme.colors.shape,
  },
});
