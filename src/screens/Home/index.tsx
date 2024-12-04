import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import styles from "./styles";
import Header from "../../components/Header";

import clients from "../../constants/clients";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";
import { userService } from "../../services/user/usersService";
import { User } from "../../models/userModel";

const Home = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [foundClients, setFoundCLients] = useState(0);
  const [clients, setClients] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(1);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { clients, totalPages, currentPage } = await userService.getAllUsers(
      currentPageState,
      limit
    );
    setClients(clients);
    setFoundCLients(clients.length);
    setTotalPages(totalPages);
    setCurrentPageState(currentPage);
  }

  async function newPage(page: number) {
    const { clients, totalPages, currentPage } = await userService.getAllUsers(
      page,
      limit
    );
    setClients(clients);
    setFoundCLients(clients.length);
    setCurrentPageState(currentPage);
  }

  function renderClientList(clients: User[]) {
    return (
      <FlatList
        nestedScrollEnabled
        data={clients}
        keyExtractor={(client) => String(client.id)}
        renderItem={({ item }: any) => <ClientCard type="home" client={item} />}
      />
    );
  }

  return (
    <View style={styles.homeContainer}>
      <Header />

      <View style={styles.homeContent}>
        <Text style={styles.results}>
          <Text style={styles.resultsSpan}>{foundClients}</Text> clientes
          encontrados:
        </Text>

        <View style={styles.setPagination}>
          <Text style={styles.results}>Clientes por página:</Text>
        </View>

        <View style={styles.clientsList}>{renderClientList(clients)}</View>

        <Pressable style={styles.createClient}>
          <Button type="secondary" text="Criar cliente" />
        </Pressable>

        <View style={styles.paginationContainer}>
          <Pressable onPress={() => newPage(1)}>
            <Text style={styles.paginationItem}>1</Text>
          </Pressable>

          <Text style={styles.paginationItem}>...</Text>

          <Pressable
            onPress={() =>
              newPage(
                currentPageState === 1
                  ? Math.floor(totalPages / 2) - 1
                  : currentPageState - 1
              )
            }
          >
            <Text style={styles.paginationItem}>
              {currentPageState === 1
                ? Math.floor(totalPages / 2) - 1
                : currentPageState - 1}
            </Text>
          </Pressable>

          <Pressable
            style={styles.activePage}
            onPress={() =>
              newPage(
                currentPageState === 1
                  ? Math.floor(totalPages / 2)
                  : currentPageState
              )
            }
          >
            <Text style={[styles.paginationItem, styles.activeText]}>
              {currentPageState === 1
                ? Math.floor(totalPages / 2)
                : currentPageState}
            </Text>
          </Pressable>

          {currentPageState < totalPages && (
            <>
              <Pressable>
                <Text
                  style={styles.paginationItem}
                  onPress={() =>
                    newPage(
                      currentPageState === 1
                        ? Math.floor(totalPages / 2) + 1
                        : currentPageState + 1
                    )
                  }
                >
                  {currentPageState === 1
                    ? Math.floor(totalPages / 2) + 1
                    : currentPageState + 1}
                </Text>
              </Pressable>

              <Text style={styles.paginationItem}>...</Text>

              <Pressable onPress={() => newPage(totalPages)}>
                <Text style={styles.paginationItem}>{totalPages}</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;
