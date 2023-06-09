import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { colors } from "../utils/colors";
import { useState } from "react";

export default function Producte(props) {
  const [count, setCount] = useState(0);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.container}
      onPress={() => {
        props.onPress();
        setCount(count + 1);
      }}
    >
      <Text>{props.name}</Text>
      <Text style={styles.priceTag}>{props.price.toFixed(2)} €</Text>
      {count > 0 && (
        <View style={styles.countFloat}>
          <Text style={{ color: "white" }}>{count}</Text>
        </View>
      )}
      {count > 0 && (
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.deleteFloat}
          onPress={() => {
            props.onDelete();
            setCount(count - 1);
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>—</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    width: "44%",
    borderRadius: 5,
    padding: 4,
  },
  priceTag: {
    textAlign: "right",
    fontSize: 16,
    color: colors.main,
    fontWeight: "bold",
  },
  countFloat: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: colors.main,
    width: 24,
    height: 24,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteFloat: {
    position: "absolute",
    top: -8,
    left: -8,
    backgroundColor: colors.red,
    width: 24,
    height: 24,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
