import { StyleSheet, StatusBar } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  clientsContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors["gray-100"],
  },

  clientContent: {
    padding: 20,

    backgroundColor: colors["gray-100"],
  },

  title: {
    fontSize: 22,
    color: colors["black"],
    fontWeight: "700",
    textAlign: "center",
  },

  clientsList: {
    marginTop: 20,

    gap: 20,
  },

  clearSelectedClients: {
    marginVertical: 20,
  },
});

export default styles;
