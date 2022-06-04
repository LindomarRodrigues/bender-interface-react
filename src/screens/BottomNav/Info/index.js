import {View,} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import data from "./dataInfo";
import Title from "../../../components/Title";
import Box from "../../../components/Box";
import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native-web";
import Cabecalho from "../../../components/Cabecalho";

export default function Info({navigation}){
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getList = () => {
            setList(data);
        }
        getList()
    }, [])

    const handlePress = (val) => {
        navigation.push("InfoScreen", {itens: val})
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="Informações" navigation={navigation}/>
            <View style={styles.itens}>
              {Object.keys(list).map((item, key) => <Box title={list[item].nome} key={key} click={handlePress} itens={list[item]} />)}
            </View>
        </View>

    )
}