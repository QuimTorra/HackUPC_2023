import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Pantalla from "../components/Pantalla";
import NumeralButton from "../components/NumeralButton";
import React, { useState, useRef } from "react";
import TitleBar from "../components/TitleBar";
import PriceTeller from "../components/PriceTeller";
import PayLoading from "../components/PayLoading";
import { colors } from "../utils/colors";

export default function Datafon(props) {
  const decimalNow = useRef(false);
  const [decimalPrice, setDecimalPrice] = useState("");
  const [price, setPrice] = useState("0");
  const [modalVisible, setModalVisible] = useState(false);

  function incrementNumber(newValue) {
    if (!decimalNow.current) {
      if (price == "0") setPrice(newValue);
      else setPrice(price + newValue);
    } else {
      if (decimalPrice.length == 0) setDecimalPrice(newValue);
      else if (decimalPrice.length == 1) setDecimalPrice(decimalPrice + newValue)
      else setDecimalPrice(decimalPrice.slice(0, -1) + newValue);
    }
  }

  function applyDecimal() {
    decimalNow.current = true;
  }

  function deletePrevious() {
    if (!decimalNow.current || decimalPrice.length == 0) {
      decimalNow.current = false;
      if (price.length > 1) setPrice(price.slice(0, -1));
      else if (price.length == 1 && price != "0") setPrice("0");
    } else {
        setDecimalPrice(decimalPrice.slice(0, -1));
    }
  }

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;
  printable = price + "." + decimalPrice;

  return (
    <Pantalla>
      <TitleBar title="Payment Terminal" />
      <PriceTeller
        total={parseFloat(printable)}
        onPress={() => setModalVisible(true)}
      />
      <View style={styles.gridLayout}>
        <Row>
          <NumeralButton onPress={() => incrementNumber("7")} number={"7"} />
          <NumeralButton onPress={() => incrementNumber("8")} number={"8"} />
          <NumeralButton onPress={() => incrementNumber("9")} number={"9"} />
        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber("4")} number={"4"} />
          <NumeralButton onPress={() => incrementNumber("5")} number={"5"} />
          <NumeralButton onPress={() => incrementNumber("6")} number={"6"} />
        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber("1")} number={"1"} />
          <NumeralButton onPress={() => incrementNumber("2")} number={"2"} />
          <NumeralButton onPress={() => incrementNumber("3")} number={"3"} />
        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber("0")} number={"0"} />
          <NumeralButton onPress={() => applyDecimal()} number={"."} />
          <NumeralButton
            onPress={() => deletePrevious()}
            number={"<-"}
            setColor={colors.red}
          />
        </Row>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <PayLoading
          cost={parseFloat(printable).toFixed(2)}
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
  gridLayout: {
    flex: 3, // the number of columns you want to devide the screen into
    marginTop: "auto",
    marginBottom: "auto",
  },
  row: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 25,
    justifyContent: "space-between",
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
