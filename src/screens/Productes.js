import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Pantalla from "../components/Pantalla";
import { useState } from "react";
import productes from "../utils/productes";
import Producte from "../components/Producte";
import { colors } from "../utils/colors";
import TitleBar from "../components/TitleBar";

export default function Productes(props) {
  const [total, setTotal] = useState(0);

  const prs = productes.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <Pantalla>
      <TitleBar title="My Products" />
      {total > 0 ? (
        <>
          <TouchableOpacity
            style={[styles.totalHolder, { borderColor: colors.main }]}
            activeOpacity={0.4}
          >
            <Text style={styles.priceText}>{total} €</Text>
            <View style={styles.floatTextWrap}>
              <Text style={styles.floatText}>Click to Confirm</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={[styles.totalHolder, { borderColor: "gray" }]}>
          <Text style={styles.placeholderText}>0.0 €</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.listContainer}>
        {prs.map((row, i) => (
          <View style={styles.row}>
            {row.map((col, j) => (
              <Producte
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
  placeholderText: {
    fontSize: 25,
    color: "gray",
    fontStyle: "italic",
    textAlign: "center",
  },
  totalHolder: {
    padding: 10,
    paddingVertical: 20,
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 15,
  },
  priceText: {
    color: colors.main,
    fontSize: 25,
    fontWeight: 900,
    textAlign: "center",
  },
  floatTextWrap: {
    position: "absolute",
    top: -10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  floatText: {
    color: "white",
    backgroundColor: colors.main,
    paddingHorizontal: 15,
    fontStyle: "italic",
    borderRadius: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 9,
  },
  clearAll: {
    backgroundColor: "red",
    padding: 10,
    alignSelf: "flex-start",
    marginHorizontal: 25,
    borderRadius: 10,
  },
});
