import { StatusBar } from "expo-status-bar";
import React from "react";
import BoasVindas from "./src/screens/BoasVindas";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import BottomNav from "./src/screens/BottomNav";
import ResultHorarios from "./src/screens/BottomNav/Horario/ResultHorarios";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen
          name="BoasVindas"
          component={BoasVindas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="ResultHorarios"
        component={ResultHorarios}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
