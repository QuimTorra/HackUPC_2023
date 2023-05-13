import { SafeAreaView } from "react-native-safe-area-context";

export default function Pantalla({ children }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#00aaa1" }}>
      {children}
    </SafeAreaView>
  );
}
