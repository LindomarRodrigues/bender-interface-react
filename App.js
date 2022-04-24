import 'react-native-gesture-handler';
import React, {useState} from "react";
import BoasVindas from "./src/screens/BoasVindas";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import BottomNav from "./src/screens/BottomNav";
import DrawerNav from "./src/screens/BottomNav/DrawerNav";
import ResultHorarios from "./src/screens/BottomNav/Horario/ResultHorarios";
import InfoScreen from "./src/screens/BottomNav/Info/InfoScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'localstorage-polyfill';

const Stack = createStackNavigator();

const MyTheme = {
    dark: false,
    colors: {
      primary: '#fff',
      background: '#15202B',
      text: '#fff',
      card: '#253341',
    },
  }

const transparentEffect = ({ current, closing }) => ({
        cardStyle: {
            backgroundColor: 'transparent'
        },
      });

export default function App() {
    //Autenticaçao
    const [encJwt, setEncJwt] = useState(null);
    const [carregando, setCarregando] = useState(true);

    AsyncStorage.getItem('@enc_jwt').then(r => {
        if (r !== null) {
            localStorage.setItem("enc_jwt", r);
            setEncJwt(r)
        }
        setCarregando(false)
    })
    if (carregando) {
        return null;
    } else {
        return (<NavigationContainer theme={MyTheme}>

            <Stack.Navigator initialRouteName={encJwt === null ? "BoasVindas" : "BottomNav"}>
                <Stack.Screen
                    name="BoasVindas"
                    component={BoasVindas}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
                <Stack.Screen
                    name="BottomNav"
                    component={BottomNav}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
                <Stack.Screen
                    name="ResultHorarios"
                    component={ResultHorarios}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
                <Stack.Screen
                    name="InfoScreen"
                    component={InfoScreen}
                    options={{headerShown: false, cardStyleInterpolator: transparentEffect}}
                />
            </Stack.Navigator>
        </NavigationContainer>);
    }
}
