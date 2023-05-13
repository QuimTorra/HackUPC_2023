import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import TopBar from "../components/TopBar";
import NavButton from "../components/NavButton";
import Grafiques from "../components/Grafiques";
import Products from "../components/Products";
import { bizzum_img } from "../utils/images";

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <TopBar />
      <Products />
      {/* <Grafiques></Grafiques> */}
      <Text>Home</Text>
      <NavButton
        icon_src={bizzum_img}
        onPress={() => navigation.navigate("Bizum")}
      />
      <Grafiques></Grafiques>
    </Pantalla>
  );
}
