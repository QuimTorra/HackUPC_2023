import { Button, Text } from "react-native";
import Pantalla from "../components/Pantalla";
<<<<<<< Updated upstream
import TopBar from "../components/TopBar";
=======
import NavButton from "../components/NavButton";
>>>>>>> Stashed changes

export default function Home({ navigation }, props) {
  return (
    <Pantalla>
<<<<<<< Updated upstream
      <TopBar />
=======
      <Text>Home</Text>
      <NavButton 
          img_src={require('../../assets/bizzumIcon.png')}
          onPress={() => navigation.navigate("Bizum")}
      />
>>>>>>> Stashed changes
    </Pantalla>
  );
}
