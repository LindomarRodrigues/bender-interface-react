import React, {useEffect, useState} from "react";
import HomePage from "./HomePage";
import Horario from "./Horario";
import Info from "./Info";
import Perfil from "./Perfil";
import Chat from "./Chat";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerNav from "./DrawerNav";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from "axios";
import * as Constantes from "../../utilitarios/Constantes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    const [carregando, setCarregando] = useState(true);
    const [corUsuario, setCorUsuario] = useState(null);


    axios.get(`${Constantes.URL_BASE}/usuario/usuario`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
        }
    }).then(r => {
        let resposta = r.data;
        AsyncStorage.setItem('@usuario', JSON.stringify(resposta));
        setCorUsuario(resposta.cor)
        setCarregando(false)
    }).catch(err=>{
        alert(err)
    })


    if (carregando === true) {
        return null
    }
    return (<Tab.Navigator
        screenOptions={({route}) => ({
            tabBarStyle: {
                backgroundColor: '#253341',
                position: 'absolute',
                bottom: 0,
                borderTopWidth: 0,
                height: 60,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }, tabBarIcon: ({color, size}) => {
                let iconName;
                let iconSize;

                if (route.name === 'Home') {
                    iconName = 'home'
                    iconSize = 30
                } else if (route.name === 'Horario') {
                    iconName = 'calendar-today'
                    iconSize = 25
                } else if (route.name === 'Info') {
                    iconName = 'apps'
                    iconSize = 30
                } else if (route.name === 'Chat') {
                    iconName = 'chat'
                    iconSize = 30
                } else if (route.name === 'DrawerNav') {
                    iconName = 'person-circle-outline'
                    iconSize = 30

                    return <Ionicons name={iconName} size={iconSize} color={color}/>;
                }
                return <MaterialIcons name={iconName} size={iconSize} color={color}/>;
            }, tabBarActiveTintColor: corUsuario, tabBarInactiveTintColor: '#AAB8C2', tabBarLabel: () => {
                return null
            },


        })}>
        <Tab.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
        <Tab.Screen name="Horario" component={Horario} options={{headerShown: false}}/>
        <Tab.Screen name="Info" component={Info} options={{headerShown: false}}/>
        <Tab.Screen name="DrawerNav" component={DrawerNav} options={{headerShown: false}}/>
        {/*<Tab.Screen name="Mensagens" component={DrawerNav} options={{headerShown: false}}/>*/}
    </Tab.Navigator>)
}