import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import Pantalla from "./Pantalla";
import AnimatedLoader from "react-native-animated-loader";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PayLoading(props) {
  const [visible, setVisible] = useState(true);
  const [payed, setPayed] = useState(false);

  useEffect(() => {
    //setTimeout(setVisible(!visible), 5000);
  }, []);

  if (payed) {
    setTimeout(() => props.close(), 2000);
  }

  return (
    <Pantalla>
      {payed ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.main,
              padding: 30,
              borderRadius: 100,
            }}
          >
            <MaterialCommunityIcons name="check" size={86} color="white" />
          </View>
        </View>
      ) : (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "italic",
              color: colors.main,
              marginBottom: 10,
            }}
          >
            Pay with card
          </Text>
          <TouchableOpacity
            style={{
              height: 80,
              width: "80%",
              backgroundColor: `${colors.main}`,
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => {
              let day = new Date(Date.now());
              let raw = JSON.stringify({
                name: "Inside Shop Transaction",
                date_execution: "2023-05-14",
                amount: parseFloat(props.cost),
              });
              fetch(
                "http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/transactions/create/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: raw,
                }
              )
                .then((res) => res.json())
                .then((data) => setPayed(true))
                .catch((err) => console.error(err));
            }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Total: {props.cost} €
            </Text>
            {/* <AnimatedLoader visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}
          ></AnimatedLoader> */}
          </TouchableOpacity>
        </View>
      )}
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
