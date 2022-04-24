import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const LogoCurso = ()=>{
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/CCOMP.png')} style={{width: 100, height:100}}/>
            <Text style={{color:'#fff', fontSize:16}}>CIÊNCIA DA COMPUTAÇÃO</Text>
            <Text style={{color:'#fff'}}>Universidade Federal do Tocantins</Text>
        </View>
    )
}

export default LogoCurso;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '50%',
    },
})