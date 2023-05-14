import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
} from "react-native";
import Pantalla from "../components/Pantalla";
import { useState } from "react";
import productes from "../utils/productes";
import Producte from "../components/Producte";
import { colors } from "../utils/colors";
import TitleBar from "../components/TitleBar";
import PayLoading from "../components/PayLoading";
import PriceTeller from "../components/PriceTeller";

export default function Productes(props) {
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const prs = productes.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <Pantalla>
      <TitleBar title="Products" />

      <PriceTeller total={total} onPress={() => setModalVisible(true)} />

      <ScrollView contentContainerStyle={styles.listContainer}>
        {prs.map((row, i) => (
          <View style={styles.row} key={i}>
            {row.map((col, j) => (
              <Producte
                key={i + "." + j}
                price={col.price}
                name={col.name}
                onPress={() => {
                  let sum = total + col.price;
                  setTotal(parseFloat(sum.toFixed(2)));
                }}
                onDelete={() => {
                  let sum = total - col.price;
                  setTotal(parseFloat(sum.toFixed(2)));
                }}
              />
            ))}
          </View>
        ))}
      </ScrollView>
      <Modal visible={modalVisible} animationType="slide">
        <PayLoading
          cost={total.toFixed(2)}
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
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    padding: 10,
    display: "flex",

    gap: 9,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 9,
  },
  clearAll: {
    backgroundColor: colors.red,
    padding: 10,
    alignSelf: "flex-start",
    marginHorizontal: 25,
    borderRadius: 10,
  },
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
