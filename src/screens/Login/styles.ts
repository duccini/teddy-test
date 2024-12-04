import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["gray-100"],
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: 350,
  },

  title: {
    fontSize: 32,
    color: colors["black"],

    textAlign: "center",
  },

  input: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 20,

    borderRadius: 4,

    borderWidth: 2,
    borderColor: colors["gray-200"],

    marginVertical: 20,

    fontSize: 24,
    color: colors["gray-250"],
    fontWeight: "400",
  },

  placeholderText: {
    fontSize: 20,
  },
});

export default styles;
