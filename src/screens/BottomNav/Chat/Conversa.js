import {Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import * as Constantes from "../../../utilitarios/Constantes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Conversa = ({foto_perfil, nome, ultima_mensagem, data_hora_ultima_mensagem, usuario_cor}) => {

    return (<View style={style.conversa}>
        <View style={{flexDirection: "row"}}>
            <Image source={foto_perfil} style={[style.perfilPicture, {borderColor: usuario_cor}]}/>
            <View style={style.blocoNomeMensagem}>
                <Text style={{fontSize: 18, color: "black", fontWeight: "bold"}}>{nome}</Text>
                <Text style={{fontSize: 12, color: "gray",}}>{ultima_mensagem}</Text>
            </View>
        </View>
        <View style={style.blocoHorarioConfirmacao}>
            <Text style={{fontSize: 12, color: "gray"}}>{data_hora_ultima_mensagem}</Text>
        </View>
    </View>)
}
export default Conversa;


const style = StyleSheet.create({
    conversa: {
        width: "100%",
        backgroundColor: "whitesmoke",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginBottom: 5,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 3

    }, perfilPicture: {
        width: 60, height: 60, borderRadius: 100, borderWidth:2
    }, blocoNomeMensagem: {
        justifyContent: "space-between", paddingLeft: 10, paddingVertical: 5
    }, blocoHorarioConfirmacao: {
        flexDirection: "column", height: "100%", justifyContent: "flex-start", paddingRight: 10, paddingTop: 10
    }
})