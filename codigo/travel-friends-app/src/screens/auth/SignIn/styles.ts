import { StyleSheet, Dimensions } from "react-native";

import theme from "../../../utils/theme";
const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.fild,
  },
  button: {
    marginTop: 100,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",

    alignItems: "center",
  },
});
