import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
import TopBar from "../components/TopBar";
import NavButton from "../components/NavButton";
import Grafiques from "../components/Grafiques";

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
      <TopBar />
      <Text>Home</Text>
      <NavButton 
          img_src={require('../../assets/bizzumIcon.png')}
          onPress={() => navigation.navigate("Bizum")}
      />
      <Grafiques></Grafiques>
    </Pantalla>
  );
}
