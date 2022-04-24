import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DevBox from '../../../../components/DevBox';
import Title from '../../../../components/Title';
import LogoCurso from '../../../../components/LogoCurso';

const Criadores = ()=>{
    return(
        <View style={styles.container}>
            <Title title="Criadores do App"/>
            <DevBox/>
            <Text style={{color:'#fff', marginLeft:20, fontSize:18, fontWeight:'bold', marginTop:30, marginBottom:20}}>Equipe:</Text>
            <Text style={{color:'#fff', marginLeft:20, fontSize:16}}>Lindomar Rodrigues</Text>
            <Text style={{color:'#fff', marginLeft:20, fontSize:16}}>Mateus Araujo Dias</Text>
            <Text style={{color:'#fff', marginLeft:20, fontSize:16}}>Neudison Ferreira</Text>
            <Text style={{color:'#fff', marginLeft:20, fontSize:16}}>Rafael Silva Tavares</Text>
            <LogoCurso/>
        </View>
    )
}

export default Criadores;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: '100%',
    },
})