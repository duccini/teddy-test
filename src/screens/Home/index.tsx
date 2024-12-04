import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

import clients from "../../constants/clients";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />

      <View style={styles.homeContent}>
        <Text style={styles.results}>
          <Text style={styles.resultsSpan}>{clients.length}</Text> clientes
          encontrados:
        </Text>

        <View style={styles.setPagination}>
          <Text style={styles.results}>Clientes por página:</Text>
        </View>

        <View style={styles.clientsList}>
          <ClientCard type="home" client={clients[0]} />
          <ClientCard type="home" client={clients[1]} />
        </View>

        <Pressable style={styles.createClient}>
          <Button type="secondary" text="Criar cliente" />
        </Pressable>

        <View style={styles.paginationContainer}>
          <Pressable>
            <Text style={styles.paginationItem}>1</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.paginationItem}>...</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.paginationItem}>3</Text>
          </Pressable>

          <Pressable style={styles.activePage}>
            <Text style={[styles.paginationItem, styles.activeText]}>4</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.paginationItem}>5</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.paginationItem}>...</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.paginationItem}>12</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
