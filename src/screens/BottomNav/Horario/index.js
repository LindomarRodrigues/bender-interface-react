import {View,} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import Box from '../../../components/Box'
import ResultHorarios from "./ResultHorarios";
import Cabecalho from "../../../components/Cabecalho";

export default function Horario({navigation}) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getList = async () => {
            const req = await fetch('https://bender-api-uft.herokuapp.com/listar_horarios_por_periodo')
            const json = await req.json()
            setList(json)
            setLoading(false)
        }
        getList()
    }, [])

    const handlePress = (val) => {
        navigation.push("ResultHorarios", {itens: val})
    }
    return (
        <View style={styles.container}>
            <Cabecalho title="Horário"/>
            {!loading && Object.keys(list).map((item, key) => (
                <Box title={`${item}° Período`} key={key} click={handlePress} itens={list[item]}/>))}
        </View>

    )
}
