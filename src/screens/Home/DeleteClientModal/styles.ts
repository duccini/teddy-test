import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  clientModalContainer: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,0.4)",

    justifyContent: "center",
  },

  clientModalContent: {
    backgroundColor: "#292828",

    alignSelf: "center",

    paddingVertical: 20,
    borderRadius: 8,

    width: 280,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    color: colors["white"],
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 22,
    textAlign: "center",
    paddingBottom: 8,
  },

  subTitle: {
    color: colors["white"],
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
  },

  modalAction: {
    padding: 10,

    borderTopWidth: 1,
    borderColor: "rgba(84, 84, 88, 0.65)",
  },

  modalActionText: {
    textAlign: "center",
    color: "#0A84FF",
    fontSize: 17,
    lineHeight: 22,
  },

  text1: {
    fontWeight: "500",
  },

  text2: {
    fontWeight: "400",
  },
});

export default styles;
