import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export default function PriceTeller({ total, onPress }) {
  return (
    <>
      {total > 0 ? (
        <>
          <TouchableOpacity
            style={[styles.totalHolder, { borderColor: colors.main }]}
            activeOpacity={0.4}
            onPress={onPress}
          >
            <Text style={styles.priceText}>{total.toFixed(2)} €</Text>
            <View style={styles.floatTextWrap}>
              <Text style={styles.floatText}>Click to Confirm</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={[styles.totalHolder, { borderColor: "gray" }]}>
          <Text style={styles.placeholderText}>0.00 €</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
});
