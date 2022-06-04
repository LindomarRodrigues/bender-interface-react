import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil({navigation}) {
    const [email, setEmail] = useState('fulanociclanobeltrano@mail.com');
    const [nome, setNome] = useState('Fulano Ciclano Beltrano');
    const [corUsuario, setCorUsuario] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('@usuario').then(r => {
            setCorUsuario(JSON.parse(r).cor)
            setEmail(JSON.parse(r).email)
            setNome(JSON.parse(r).nome)
        })
    }, [])

    return (
        <View style={style.container}>
            <View style={style.blocoDados}>
                <View style={[style.campoDado, {marginTop: 10}]}>
                    <Text style={{fontSize: 16, color: "white"}}>Nome</Text>
                    <Text style={{fontSize: 18, color: "white", fontWeight: "bold"}}>{nome}</Text>
                </View>
                <View style={[style.campoDado, {marginTop: 30}]}>
                    <Text style={{fontSize: 16, color: "white"}}>Email</Text>
                    <Text style={{fontSize: 18, color: "white", fontWeight: "bold"}}>{email}</Text>
                </View>

            </View>
            <View style={[style.cabecalho, {backgroundColor: corUsuario}]}>
                <Image source={require("../../../assets/images/bender_fry.png")} style={style.capaFoto}/>
                <Image source={require("../../../assets/images/bender_face.jpg")} style={[style.perfilFoto, {
                    borderColor: corUsuario,
                }]}/>
            </View>
        </View>

    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "#15202B",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
    },
    cabecalho: {
        width: "100%",
        height: 60 + 200,

        position: "absolute",
        top: 0,
        left: 0
    },
    capaFoto: {
        marginTop: 60,
        width: 200,
        height: 200
    },
    perfilFoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        position: "absolute",
        top: 210,
        left: 280
    },
    blocoDados: {
        flex: 1,
        position: "absolute",
        top: 260,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 60,
        marginBottom: 60 + 20
    },
    campoDado: {
        backgroundColor: "#253341",
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 20,

    },
    button: {
        height: 55,
        width: 55,
        backgroundColor: "red",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 40,
        right: 10
    },
    textButton: {
        fontSize: 18, color: "white"
    },
})