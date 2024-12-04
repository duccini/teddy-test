import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: colors["white"],

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  imageHeader: {
    height: 34,
    width: 70,
  },

  headerIcon: {
    width: 24,
    height: 20,
  },
});

export default styles;
