import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import Pantalla from "../components/Pantalla";
import { useState } from "react";
import productes from "../utils/productes";
import Producte from "../components/Producte";
import { colors } from "../utils/colors";
import TitleBar from "../components/TitleBar";
import PayLoading from "../components/PayLoading";
import PriceTeller from "../components/PriceTeller";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Productes(props) {
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [newProductVisible, setNewProductVisible] = useState(false);

  let prodName, prodPrice;

  const prs = productes.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <Pantalla>
      <TitleBar title="Products">
        <TouchableOpacity onPress={() => setNewProductVisible(true)}>
          <MaterialCommunityIcons name="plus" size={36} color={"white"} />
        </TouchableOpacity>
      </TitleBar>

      <PriceTeller total={total} onPress={() => setModalVisible(true)} />

      <ScrollView contentContainerStyle={styles.listContainer}>
        {prs.length == 0 && (
          <View>
            <Text
              style={{
                color: "gray",
                fontStyle: "italic",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Looks like you don't have any product yet...
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.accent,
                width: "44%",
                borderRadius: 5,
                padding: 4,
                backgroundColor: colors.main,
                marginLeft: "auto",
                marginRight: "auto",
                paddingHorizontal: 10,
                paddingVertical: 18,
                marginTop: 10,
              }}
              onPress={() => setNewProductVisible(true)}
            >
              <Text style={{ color: "white" }}>Create one now!</Text>
            </TouchableOpacity>
          </View>
        )}
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

      <Modal visible={newProductVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: 15,
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Register New Product
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 2,
                borderColor: "gray",
                width: "80%",
                textAlign: "center",
                marginBottom: 5,
              }}
              placeholder="Product name"
              onChangeText={(text) => (prodName = text)}
            />
            <TextInput
              keyboardType="numeric"
              style={{
                borderBottomWidth: 2,
                borderColor: "gray",
                width: "80%",
                textAlign: "center",
                fontSize: 17,
                color: colors.main,
                marginBottom: 5,
              }}
              placeholder="0.00"
              onChangeText={(text) => (prodPrice = text)}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                margin: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.red,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}
                onPress={() => setNewProductVisible(false)}
              >
                <Text style={{ color: "white" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.main,
                  paddingVertical: 5,
                  paddingHorizontal: 25,
                  borderRadius: 10,
                }}
                onPress={() => {
                  productes.push({
                    name: prodName,
                    img: "",
                    price: parseFloat(prodPrice),
                  });
                  setNewProductVisible(false);
                }}
              >
                <Text style={{ color: "white" }}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
