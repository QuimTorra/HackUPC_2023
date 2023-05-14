import { Modal, TouchableOpacity, Text, StyleSheet } from "react-native";
import PayLoading from "./PayLoading";
import { colors } from "../utils/colors";

export default function PaymentModal({ modalVisible }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal visible={modalVisible} animationType="slide">
      <PayLoading
        cost={total}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      ></PayLoading>
      <TouchableOpacity
        style={styles.closeModal}
        onPress={() => setModalVisible(false)}
        activeOpacity={0.4}
      >
        <Text style={{ color: "white" }}>cancel operation</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeModal: {
    backgroundColor: colors.red,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    marginLeft: 20,
  },
});
