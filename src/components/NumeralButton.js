import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState} from 'react';

const NumeralButton = ({onPress, number, setColor='lightblue'}) => {
    const dynamicStyles = {
        backgroundColor: setColor,
      };

    return (
        <Pressable 
        style={({ pressed }) => [
            styles.navbutton,
            dynamicStyles,
            pressed && {opacity : .8},
        ]}
        onPress={onPress}
        >
            <Text style={styles.num_text}> {number} </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    navbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 12,
      width: 75,
      height:65,
      marginHorizontal: 7,
    },
    num_text: {
        fontSize: 30
    }
  });
  
  export default NumeralButton;