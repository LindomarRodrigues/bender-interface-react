import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const DevBox = ()=>{
    return(
        <View style={style.container}>
            <Text style={{padding:15, color: '#fff', fontSize:16}}>
                App desenvolvido pela equipe do curso de Ciêcia da Computação - UFT.
            </Text>
        </View>
    )
}

export default DevBox;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#253341',
        width: '90%',
        height: 'auto',
        borderRadius: 15,
        marginLeft: 20
    }
})