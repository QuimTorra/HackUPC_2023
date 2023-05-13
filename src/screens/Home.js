import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import TopBar from "../components/TopBar";
import Grafiques from "../components/Grafiques";


export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <TopBar />
      <Grafiques></Grafiques>

    </Pantalla>
  );
}
