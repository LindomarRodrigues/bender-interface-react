import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';

const CustomDrawer = ({...props})=>{

    const sair = () => {
        localStorage.clear();
        AsyncStorage.clear();
        Updates.reloadAsync();
        // navigation.navigate('Login')
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: '#15202B', paddingBottom:20}}>
                <ImageBackground source={require('../../assets/images/fundo.jpg')} style={{padding: 20, marginBottom: 20, height: 200}}>
                    <Image source={require('../../assets/images/rostoBender.png')} style={{height: 80, width: 80}}/>
                    <Text style={{color:'#fff', fontSize:16, marginTop:10}}>Rafael Silva</Text>
                    <Text style={{color:'#fff', fontSize:14}}>rafael@gmail.com</Text>
                </ImageBackground>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{marginBottom:10}}>
                <TouchableOpacity style={{flexDirection:'row', marginLeft:20}}>
                    <MaterialIcons name='star' size={22} color='#fff'/>
                    <Text style={{color:'#fff', marginLeft:10}}>Avaliar App</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding: 20, marginBottom: 60, borderTopWidth: 1.5, borderTopColor: '#15202B'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical: 5}}>
                <View style={{flexDirection: 'row', marginBottom:15}}>
                    <MaterialIcons name='lock-outline' size={22} color='#fff'/>
                    <Text style={{fontSize:16, color:'#fff'}}> Trocar Senha </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={sair} style={{paddingVertical: 5}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name='exit-to-app' size={22} color='#fff'/>
                    <Text style={{fontSize:16, color:'#fff'}}> Sair do app </Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;