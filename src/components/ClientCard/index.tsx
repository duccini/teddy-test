import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

import currencyFormatter from "../../helpers/currencyFormatter";

interface ClientCardProps {
  client: {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    createdAt: string;
    updatedAt: string;
  };
  type: String;
  onDeleteClient: (clientName: string, clientId: number) => void;
}

const ClientCard = ({ client, type, onDeleteClient }: ClientCardProps) => {
  return (
    <View style={styles.clientCardContainer}>
      <Text style={[styles.clientText, styles.clientTitle]}>{client.name}</Text>
      <Text style={[styles.clientText, styles.clientSubTitle]}>
        Salário: {currencyFormatter(client.salary)}
      </Text>
      <Text style={[styles.clientText, styles.clientSubTitle]}>
        Empresa: {currencyFormatter(client.companyValuation)}
      </Text>

      <View style={styles.clientActions}>
        {type === "home" ? (
          <>
            <Pressable>
              <Image source={require("../../assets/icons/plus.png")} />
            </Pressable>

            <Pressable>
              <Image source={require("../../assets/icons/pencil.png")} />
            </Pressable>

            <Pressable onPress={() => onDeleteClient(client.name, client.id)}>
              <Image source={require("../../assets/icons/garbage.png")} />
            </Pressable>
          </>
        ) : (
          <Pressable style={styles.clients}>
            <Image source={require("../../assets/icons/minus.png")} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ClientCard;
