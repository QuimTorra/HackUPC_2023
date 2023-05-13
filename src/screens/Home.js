import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate("Bizum");
        }}
        title="Fer un Bizum"
      />
    </Pantalla>
  );
}
