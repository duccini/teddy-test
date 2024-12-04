import { StyleSheet, StatusBar } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors["gray-100"],
  },

  homeContent: {
    padding: 20,

    backgroundColor: colors["gray-100"],
  },

  results: {
    fontSize: 18,
    color: colors["black"],
    textAlign: "center",
  },

  resultsSpan: {
    fontWeight: "700",
  },

  setPagination: {
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 10,
  },

  clientsList: {
    marginTop: 20,

    gap: 20,
  },

  createClient: {
    marginVertical: 20,
  },

  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  activePage: {
    width: 35,
    height: 35,
    backgroundColor: colors["primary-500"],
    borderRadius: 4,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  paginationItem: {
    fontSize: 16,
    fontWeight: "700",
    color: colors["black"],
  },

  activeText: {
    color: colors["white"],
  },
});

export default styles;
