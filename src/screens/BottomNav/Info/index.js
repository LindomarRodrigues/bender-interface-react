import {
    View,
} 
from "react-native";
import React, {useState, useEffect} from "react";
import styles from "./style";
import data from "./dataInfo";
import Title from "../../../components/Title";
import Box from "../../../components/Box";
import { NavigationContainer } from "@react-navigation/native";
import { Alert } from "react-native-web";

export default function Info({navigation}){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getList = ()=>{
            setList(data);
        }
        getList()
    }, [])
    
    const handlePress = (val) =>{
        navigation.push("InfoScreen", { itens: val})
    }

    return(
        <View style={styles.container}>
            <Title title="Informações"/>
            {Object.keys(list).map((item, key) => <Box title={list[item].nome} key={key} click={handlePress} itens={list[item]} />)}
        </View>
        
    )
}