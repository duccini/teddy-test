import { Pressable, Text, View } from "react-native";
import styles from "./styles";

interface DeleteClientModal {
  clientName: string;
  onCloseModal: () => void;
  onDeleteClient: () => void;
}

const DeleteClientModal = ({
  onDeleteClient,
  clientName,
  onCloseModal,
}: DeleteClientModal) => {
  return (
    <View style={styles.clientModalContainer}>
      <View style={styles.clientModalContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Excluir cliente:</Text>
          <Text style={styles.subTitle}>
            Tem certeza que deseja excluir o cliente {clientName}?
          </Text>
        </View>

        <Pressable style={styles.modalAction} onPress={() => onDeleteClient()}>
          <Text style={[styles.modalActionText, styles.text1]}>
            Excluir cliente
          </Text>
        </Pressable>
        <Pressable style={styles.modalAction} onPress={() => onCloseModal()}>
          <Text style={[styles.modalActionText, styles.text2]}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DeleteClientModal;
