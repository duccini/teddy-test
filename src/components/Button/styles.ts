import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  baseButton: {
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
  },

  baseText: {
    fontWeight: "700",
  },

  primary: {
    backgroundColor: colors["primary-500"],
    height: 60,
  },

  secondary: {
    borderWidth: 2,
    borderColor: colors["primary-500"],
    height: 40,
  },

  primaryText: {
    color: colors["white"],
    fontSize: 24,
  },

  secondaryText: {
    color: colors["primary-500"],
    fontSize: 14,
  },
});

export default styles;
