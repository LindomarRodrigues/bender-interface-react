import {View, Text, Linking, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import data from "./dataInfo";
import Box from "../../../components/Box";
import Cabecalho from "../../../components/Cabecalho";
import * as Constantes from '../../../utilitarios/Constantes'

export default function Info({navigation}){

    const localData = [
        {
           "nome":"Restaurante Universitário",
           "file": `${Constantes.URL_BASE}/informacoes_curso/restaurante_universitario`,
        },
        {
            "nome":"Biblioteca UFT",
            "file": `${Constantes.URL_BASE}/informacoes_curso/biblioteca_uft`,
         },
         {
            "nome":"Auxilios UFT",
            "file": `${Constantes.URL_BASE}/informacoes_curso/auxilio_uft`,
        },
        {
           "nome":"Calendario Acadêmico",
           "file": `${Constantes.URL_BASE}/informacoes_curso/calendario_academico`,
        },
        {
           "nome":"Regimento Acadêmico",
           "file": `${Constantes.URL_BASE}/informacoes_curso/regimento_academico`,
        },  {
            "nome":"Matriz Curricular",
            "file": `${Constantes.URL_BASE}/informacoes_curso/matriz_curricular`,
         },
        ]

    const OpenURL = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert('Dont know how to open this URL: ${url}');
    }
    }


    const [list, setList] = useState([]);
    const [locallist, setLocallist] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getList = () => {
            setList(data);
            setLocallist(localData);
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
                {Object.keys(localData).map((items, key) => <Box title={localData[items].nome} key={key} itens={localData[items]} click={()=>OpenURL(localData[items].file)}/>)}
            </View>
        </View>

    )
}