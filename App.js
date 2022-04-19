import React, {useState} from "react";
import BoasVindas from "./src/screens/BoasVindas";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import BottomNav from "./src/screens/BottomNav";
import ResultHorarios from "./src/screens/BottomNav/Horario/ResultHorarios";
import InfoScreen from "./src/screens/BottomNav/Info/InfoScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const forFade = ({ current, closing }) => ({
        cardStyle: {
          opacity: current.progress,
        },
      });
      
export default function App() {
    //Autenticaçao
    const [encJwt, setEncJwt] = useState(null);
    const [carregando, setCarregando] = useState(true);
    AsyncStorage.getItem('@enc_jwt').then(r => {
        console.log(r)
        if (r !== null) {
            setEncJwt(r)
        }
        setCarregando(false)
    })
    if (carregando) {
        return null;
    }

    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={encJwt === null ? "BoasVindas" : "BottomNav"}>
                <Stack.Screen
                    name="BoasVindas"
                    component={BoasVindas}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
                <Stack.Screen
                    name="BottomNav"
                    component={BottomNav}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
                <Stack.Screen
                    name="ResultHorarios"
                    component={ResultHorarios}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
                <Stack.Screen
                    name="InfoScreen"
                    component={InfoScreen}
                    options={{headerShown: false, cardStyleInterpolator: forFade}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
