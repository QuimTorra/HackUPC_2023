import { StyleSheet, View,Text } from "react-native";
import { colors } from "../utils/colors";
import Pantalla from "./Pantalla";
import AnimatedLoader from "react-native-animated-loader";
import { useState, useEffect } from "react";

export default function PayLoading(props) {

    const [visible, setVisible] = useState(true);

    useEffect( () => {
        //setTimeout(setVisible(!visible), 5000);
    }, []);

  return (
    <Pantalla>
        <View style={{
            position: 'absolute',
            top:0,
            bottom:0,
            right:0,
            left:0,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{
                fontStyle:"italic",
                color:colors.main,
                marginBottom: 10
            }}>Pay with card</Text>
            <View style={{
                    height: 80,
                    width: '80%',
                    backgroundColor: `${colors.main}`, 
                    alignItems: 'center', 
                    borderRadius: 10,
                }}>
                <Text style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                }}>
                    Total: {props.cost} €
                </Text>
                <AnimatedLoader
                    visible={visible}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}>
                </AnimatedLoader>
            </View>
        </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: "100%",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
