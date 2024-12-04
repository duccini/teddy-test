import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";

import currencyFormatter from "../../helpers/currencyFormatter";

interface ClientCardProps {
  client: {
    id: number;
    name: String;
    salary: number;
    companyValuation: number;
    createdAt: String;
    updatedAt: String;
  };
  type: String;
}

const ClientCard = ({ client, type }: ClientCardProps) => {
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

            <Pressable>
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
