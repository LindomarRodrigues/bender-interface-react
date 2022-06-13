import {StyleSheet, View} from "react-native";
import React, {useEffect, useState} from "react";
import Conversa from "./Conversa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Constantes from "../../../utilitarios/Constantes";
import {DateTime} from 'luxon';

const Conversas = ({navigation}) => {
    const [conversas, setConversas] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('conversas').then(r => {
            setConversas(JSON.parse(r))

            axios.get(`${Constantes.URL_BASE}/mensageria/listar_conversas`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
                }
            })
                .then(r => {
                    let resposta = r.data;
                    setConversas(resposta)
                    AsyncStorage.setItem('conversas', JSON.stringify(resposta));
                })

        })
    }, [])

    return (<View style={style.container}>
        {conversas && conversas.map(conversa => <Conversa navigation={navigation}
                                                          foto_perfil={require("../../../assets/images/bender_face.jpg")}
                                                          nome={conversa.e_autor ? conversa.receptor_nome : conversa.autor_nome}
                                                          ultima_mensagem={conversa.ultima_mensagem}
                                                          data_hora_ultima_mensagem={DateTime.fromISO(conversa.ultima_mensagem_horario).toLocaleString()}
                                                          usuario_cor={conversa.e_autor ? conversa.receptor_cor : conversa.autor_cor}
                                                          key={conversa.id}
                                                          conversa_id={conversa.id}
                                                          e_autor={conversa.e_autor}/>)}
    </View>)
}
export default Conversas;


const style = StyleSheet.create({
    container: {
        width: "100%",
    }, conversa: {
        width: "100%", backgroundColor: "yellow"

    }, perfilPicture: {
        width: 50, height: 50, borderRadius: 100
    }
})