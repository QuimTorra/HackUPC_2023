import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Datafon from "./src/screens/Datafon";
import Productes from "./src/screens/Productes";
import Compte from "./src/screens/Compte";
import { colors } from "./src/utils/colors";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Productes"
        activeColor={colors.accent}
        inactiveColor={colors.main}
        barStyle={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Datafon"
          component={Datafon}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={26}
              />
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
        <Tab.Screen
          name="Compte"
          component={Compte}
          options={{
            tabBarIcon: ({ color }) => {
              <MaterialCommunityIcons name="account" color={color} size={26} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
