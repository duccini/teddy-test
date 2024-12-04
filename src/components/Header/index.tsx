import { Image, Pressable, View } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.headerWrap}>
      <Image
        style={styles.imageHeader}
        source={require("../../assets/images/teddy-logo.png")}
      />

      <Pressable>
        <Image
          style={styles.headerIcon}
          source={require("../../assets/icons/hamburger.png")}
        />
      </Pressable>
    </View>
  );
};

export default Header;
