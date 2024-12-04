import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";
import clients from "../../constants/clients";

const Clients = () => {
  return (
    <View style={styles.clientsContainer}>
      <Header />

      <View style={styles.clientContent}>
        <Text style={styles.title}>Clientes selecionados</Text>

        <View style={styles.clientsList}>
          <ClientCard type="client" client={clients[0]} />
          <ClientCard type="client" client={clients[1]} />
        </View>

        <Pressable style={styles.clearSelectedClients}>
          <Button type="secondary" text="Limpar clientes selecionados" />
        </Pressable>
      </View>
    </View>
  );
};

export default Clients;
