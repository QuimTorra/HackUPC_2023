import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import getUser from "../utils/api";
import Constants from "expo-constants";

export default function TopBar(props) {
  const [name, setName] = useState("user");

  getUser(Constants.expoConfig.extra.userId)
    .then((res) => res.json())
    .then((data) => setName(data.name))
    .catch((err) => console.error(err));

  return (
    <View style={styles.topbarContainer}>
      <Text style={styles.textSmall}>Welcome,</Text>
      <Text style={styles.textName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topbarContainer: {
    margin: 10,
  },
  textSmall: {
    fontStyle: "italic",
  },
  textName: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
