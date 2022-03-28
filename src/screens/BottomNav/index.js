import {
    View,
    Button,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React from "react";
import HomePage from "./HomePage";
import Horario from "./Horario";
import Info from "./Info";
import Perfil from "./Perfil";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#253341',
                    position: 'absolute',
                    bottom: 0,
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarIcon: ({color, size }) => {
                  let iconName;
                  let iconSize;
      
                  if (route.name === 'Home') {
                      iconName='home'
                      iconSize=30
                  } 
                  else if (route.name === 'Horario') {
                    iconName = 'calendar-today'
                    iconSize=25
                  }
                  else if (route.name === 'Info') {
                    iconName = 'apps'
                    iconSize=30
                  }
                  else if (route.name === 'Perfil') {
                    iconName = 'person-circle-outline'
                    iconSize=30

                    return <Ionicons name={iconName} size={iconSize} color={color} />;
                  }
                  return <MaterialIcons name={iconName} size={iconSize} color={color} />;
                },
                tabBarActiveTintColor: '#1D9BF0',
                tabBarInactiveTintColor: '#AAB8C2',
                tabBarLabel:() => {return null},
                })
                }>
                <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
                <Tab.Screen name="Horario" component={Horario} options={{ headerShown: false }}/>
                <Tab.Screen name="Info" component={Info} options={{ headerShown: false }}/>
                <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>
            </Tab.Navigator>
    )
}