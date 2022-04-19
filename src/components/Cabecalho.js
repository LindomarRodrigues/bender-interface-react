import {Image, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cabecalho = ({title}) => {
    const [corUsuario, setCorUsuario] = useState(null);
    AsyncStorage.getItem('@usuario').then(r => {
        setCorUsuario(JSON.parse(r).cor)
    })


    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Image source={require("../assets/images/bender_face.jpg")} style={[style.perfilPicture,
                {borderColor: corUsuario}]}/>
        </View>
    )
}
export default Cabecalho;


const style = StyleSheet.create({
    container: {
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#253341"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    perfilPicture: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2
    }
})