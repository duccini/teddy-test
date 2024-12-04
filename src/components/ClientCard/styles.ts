import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  clientCardContainer: {
    backgroundColor: colors["white"],

    borderRadius: 4,
    padding: 15,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  clientText: {
    color: colors["black"],
    textAlign: "center",
    paddingBottom: 10,
  },

  clientTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  clientSubTitle: {
    fontSize: 14,
    fontWeight: "400",
  },

  clientActions: {
    marginTop: 5,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  clients: {
    marginLeft: "auto",
  },
});

export default styles;
