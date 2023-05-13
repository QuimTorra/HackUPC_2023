import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import TopBar from "../components/TopBar";

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <TopBar />
    </Pantalla>
  );
}
