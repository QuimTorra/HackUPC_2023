import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import TopBar from "../components/TopBar";
import Grafiques from "../components/Grafiques";
import Products from "../components/Products";

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <TopBar />
      <Products />
      {/* <Grafiques></Grafiques> */}
    </Pantalla>
  );
}
