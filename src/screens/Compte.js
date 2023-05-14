import Pantalla from "../components/Pantalla";
import Grafiques from "../components/Grafiques";
import TitleBar from "../components/TitleBar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Compte({ navigation }, props) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch(
      "http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/transactions/balance"
    )
      .then((res) => res.json())
      .then((data) => setBalance(data.balance));
  }, []);

  return (
    <Pantalla>
      <TitleBar title="Account" />
      <View
        style={{
          margin: 10,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            color: "gray",
          }}
        >
          Your balance...
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          {balance.toFixed(2)} €
        </Text>
      </View>
      <Grafiques></Grafiques>
    </Pantalla>
  );
}
