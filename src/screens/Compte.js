import Pantalla from "../components/Pantalla";
import Grafiques from "../components/Grafiques";
import TitleBar from "../components/TitleBar";

export default function Compte({ navigation }, props) {
  return (
    <Pantalla>
      <TitleBar title="Account" />
      <Grafiques></Grafiques>
    </Pantalla>
  );
}
