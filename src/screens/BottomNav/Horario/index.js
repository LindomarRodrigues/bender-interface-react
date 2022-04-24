import {View,} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import Box from '../../../components/Box'
import ResultHorarios from "./ResultHorarios";
import Cabecalho from "../../../components/Cabecalho";
import data from './StaticData'

export default function Horario({navigation}) {

    //Código Anterior
    // useEffect(() => {
    //     const getList = async () => {
    //         const req = await fetch('https://bender-api-uft.herokuapp.com/listar_horarios_por_periodo')
    //         const json = await req.json()
    //         setList(json)
    //         setLoading(false)
    //     }
    //     getList()
    // }, [])

    const handlePress = (itens,title) => {
        navigation.push("ResultHorarios", {itens: itens, title: title})
    }
    return (
        <View style={styles.container}>
            <Cabecalho title="Horário" navigation={navigation}/>
            {Object.keys(data).map((item, key) => (
                <Box title={`${item}° Período`} key={key} click={handlePress} itens={data[item]}/>))}
        </View>

    )
}
