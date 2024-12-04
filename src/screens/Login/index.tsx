import { Pressable, Text, TextInput, View } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Olá, seja bem vindo!</Text>
        <TextInput style={styles.input} placeholder="Digite o seu nome:" />
        <Pressable>
          <Button type="primary" text="Entrar" />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
