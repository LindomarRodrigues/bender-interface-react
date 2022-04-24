import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Title from '../../../../components/Title';
import ReferenceBox from '../../../../components/ReferenceBox';

const Referencia = ()=>{
    return(
        <View style={styles.container}>
            <Title title="Sobre o personagem"/>
            <Image source={require('../../../../assets/images/reference.jpg')} style={{width: 250, height: 150, marginLeft: 20}}/>
            <ReferenceBox/>
            <Text style={{marginTop: 30, marginLeft:20, width:'85%', color: '#fff', fontWeight: 'bold'}}>
                Todos os direitos autorais do personagem Bender são pertencentes à fox broadcasting company.
            </Text>
        </View>
    )
} 

export default Referencia;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: '100%',
    },
})