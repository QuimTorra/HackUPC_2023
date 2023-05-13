import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import Boto from "../components/NavButton";

export default function Bizum({ navigation }, props) {
  return (
    <Pantalla>
      <Button title="<-" onPress={() => navigation.goBack()} />
      <Text>Bizum</Text>
    </Pantalla>
  );
}
