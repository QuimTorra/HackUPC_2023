import { StyleSheet, Image, Pressable } from "react-native";
import React, { useState} from 'react';

const NavButton = ({onPress, icon_src}) => {

    return (
        <Pressable 
        style={({ pressed }) => [
            styles.navbutton,
            pressed && {opacity : .8},
        ]}
        onPress={onPress}>
            <Image source={icon_src} style={styles.icon} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    navbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
      backgroundColor: 'lightblue',
      width: 50,
      height:50,
    },
    icon: {
      width: 40,
      height: 40,
    },
  });
  
  export default NavButton;