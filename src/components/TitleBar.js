import { View, Text } from "react-native";
import { colors } from "../utils/colors";

export default function TitleBar(props) {
  return (
    <View
      style={{
        backgroundColor: `${colors.main}`,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {props.title}
      </Text>
      <View
        style={{
          position: "absolute",
          right: 15,
          top: 10,
        }}
      >
        {props.children}
      </View>
    </View>
  );
}
