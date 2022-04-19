import {View,} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "./style";
import data from "./dataInfo";
import Title from "../../../components/Title";
import Box from "../../../components/Box";

export default function Info({navigation}) {
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
            <Title title="Informações"/>
            {Object.keys(list).map((item, key) => <Box title={list[item].nome} key={key} click={handlePress}
                                                       itens={list[item]}/>)}
        </View>

    )
}