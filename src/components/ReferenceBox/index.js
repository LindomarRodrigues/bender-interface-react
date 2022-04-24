import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ReferenceBox = ()=>{
    return(
        <View style={style.container}>
            <Text style={{padding:15, color: '#fff', fontSize:16}}>
                Bender Bending Rodríguez é um dos personagens principais da série animada de televisão Futurama. 
                Ele foi concebido pelos criadores da série Matt Groening e David X. Cohen para a Fox Broadcasting Company.
            </Text>
        </View>
    )
}

export default ReferenceBox;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#253341',
        width: '80%',
        height: 'auto',
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 20
    }
})