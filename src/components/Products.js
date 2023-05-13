import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getProducts } from "../utils/api";
import { colors } from "../utils/colors";

function ProductLine(props) {
  return (
    <View>
      <Text style={{ color: colors.text }}>{props.name}</Text>
      <Text style={{ color: colors.text }}>
        {props.balance} {props.currency}
      </Text>
    </View>
  );
}

export default function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      {products.map((p, i) => (
        <ProductLine
          name={p.name}
          balance={p.balance.amount}
          currency={p.balance.currency}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    width: "90%",
  },
});
