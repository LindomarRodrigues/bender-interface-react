import {View, Text, Linking, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import data from "./dataInfo";
import Box from "../../../components/Box";
import Cabecalho from "../../../components/Cabecalho";

export default function Info({navigation}){

    const localData = [
        {
           "nome":"Restaurante Universitário",
           "file": "https://drive.google.com/u/3/uc?id=1zx-9FW-WJB8EPmLsQEGrhRvj__TQnLW2&export=download",
        },
        {
            "nome":"Biblioteca UFT",
            "file": "https://drive.google.com/u/3/uc?id=161Uhl5YRFvw2sOMVH7SEOSljzXCCE907&export=download",
         },
         {
            "nome":"Auxilios UFT",
            "file": "https://drive.google.com/u/3/uc?id=1uVO3mxEQbziaHgIFzaPqjU814UYrJ6n7&export=download",
        },
        {
           "nome":"Calendario Acadêmico",
           "file": "https://bender-api-uft.herokuapp.com/informacoes_curso/calendario_academico"
        },
        {
           "nome":"Regimento Acadêmico",
           "file": "https://drive.google.com/u/3/uc?id=1Cxqdu1C4OSF09t_H3BtUAztmORkHaVwk&export=download",
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