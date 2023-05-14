import { Text, View, StyleSheet } from "react-native";
import Pantalla from "../components/Pantalla";
import NumeralButton from "../components/NumeralButton";
import React, { useState, useRef} from 'react';

export default function Datafon(props) {

  const decimalNow = useRef(false);
  const [decimalPrice, setDecimalPrice] = useState('00');
  const [price, setPrice] = useState('0');

  function incrementNumber (newValue) {
    if (!decimalNow.current) {
      if (price == '0') setPrice(newValue);
      else setPrice(price + newValue);
    }
    else {
      if (decimalPrice == '00') setDecimalPrice(newValue + '0');
      else setDecimalPrice(decimalPrice.slice(0, -1) + newValue);
    }
  }

  function applyDecimal () {
    decimalNow.current = true;
  }

  function deletePrevious () {
    if(!decimalNow.current) {
      if (price.length > 1) setPrice(price.slice(0, -1));
      else if (price.length == 1 && price != '0') setPrice('0');
    }
    else {
      if (decimalPrice[1] == '0') {
        setDecimalPrice('00');
        decimalNow.current = false;
      }
      else setDecimalPrice(decimalPrice.slice(0, -1) + '0');
    }
  }

  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
  printable = price + ',' + decimalPrice;
  return (
    <Pantalla>
        <Text style={styles.shower}> {printable} </Text> 
      <View style={styles.grid_layout}>
        <Row>
          <NumeralButton onPress={() => incrementNumber('7')} number={'7'}/>
          <NumeralButton onPress={() => incrementNumber('8')} number={'8'}/>
          <NumeralButton onPress={() => incrementNumber('9')} number={'9'}/>
          <NumeralButton onPress={() => deletePrevious()} number={'<-'} setColor={"red"}/>

        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber('4')} number={'4'}/>
          <NumeralButton onPress={() => incrementNumber('5')} number={'5'}/>
          <NumeralButton onPress={() => incrementNumber('6')} number={'6'}/>
        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber('1')} number={'1'}/>
          <NumeralButton onPress={() => incrementNumber('2')} number={'2'}/>
          <NumeralButton onPress={() => incrementNumber('3')} number={'3'}/>
        </Row>
        <Row>
          <NumeralButton onPress={() => incrementNumber('0')} number={'0'}/>
          <NumeralButton onPress={() => applyDecimal()} number={','}/>
        </Row>

      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
    grid_layout: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  },
  row: {
    marginVertical: 15,
    flexDirection: "row",
    backgroundColor: "darkblue",
  },
  shower: {
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 15,
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 5,
    fontSize: 30,
    textAlign: 'right',
  }
});