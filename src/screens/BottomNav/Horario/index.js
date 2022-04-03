import {
    View,
    Button,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
}
    from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import Box from '../../../components/Box'
import Title from "../../../components/Title";
import ResultHorarios from "./ResultHorarios";
import { NavigationContainer } from "@react-navigation/native";

export default function Horario({navigation}) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getList = async () => {
            const req = await fetch('https://bender-api-uft-dev.herokuapp.com/listar_horarios_por_periodo')
            const json = await req.json()
            setList(json)
            setLoading(false)
        }
        getList()
    }, [])

    const handlePress = (val) =>{
        navigation.push("ResultHorarios", { itens: val})
    }
    return (
        <View style={styles.container}>
           <Title title="Horario" />
            {!loading && Object.keys(list).map((item, key) => (<Box  title={`${item}° Período`} key={key} click={handlePress} itens={list[item]}/>))}
        </View>

    )
}
