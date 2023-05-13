import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Productes from "./Productes";
import Datafon from "./Datafon";
import { colors } from "../utils/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }, props) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Datafon"
      activeColor={colors.accent}
      inactiveColor={colors.main}
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Datafon"
        component={Datafon}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Productes"
        component={Productes}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
