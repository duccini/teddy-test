import { Text, View } from "react-native";
import styles from "./styles";

interface ButtonProps {
  type: String;
  text: String;
}

const Button = ({ type, text }: ButtonProps) => {
  return (
    <View
      style={
        type === "primary"
          ? [styles.baseButton, styles.primary]
          : [styles.baseButton, styles.secondary]
      }
    >
      <Text
        style={
          type === "primary"
            ? [styles.baseText, styles.primaryText]
            : [styles.baseText, styles.secondaryText]
        }
      >
        {text}
      </Text>
    </View>
  );
};

export default Button;
