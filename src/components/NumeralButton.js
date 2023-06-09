import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";

const NumeralButton = ({ onPress, number, setColor = colors.main }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.navbutton, { borderColor: setColor }]}
      activeOpacity={0.4}
    >
      <Text style={styles.num_text}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navbutton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    width: 95,
    height: 95,
    borderWidth: 1,
    marginHorizontal: 7,
  },
  num_text: {
    fontSize: 30,
  },
});

export default NumeralButton;
