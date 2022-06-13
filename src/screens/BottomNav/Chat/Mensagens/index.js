import React, {useEffect, useState} from "react";
import {Image, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import groupBy from 'lodash/groupBy'
import * as Constantes from "../../../../utilitarios/Constantes";

const Mensagens = ({navigation, route}) => {
    const {pessoa_nome, pessoa_cor, conversa_id, e_autor} = route.params;

    const [carregando, setCarregando] = useState(true);
    const [mensagens, setmensagens] = useState([]);
    const [mensagensAgrupadas, setMensagensAgrupadas] = useState([]);
    const [msg, setMsg] = useState('');
    useEffect(() => {
        const listaPorData = Object.values(groupBy(mensagens, function (n) {
            console.log(n.aconteceu_em.slice(0, 10))
            return n.aconteceu_em.slice(0, 10)
        }))
        var data = [];
        listaPorData.map(d => {
            let section = {
                title: d[0].aconteceu_em, data: [...d]
            }
            data.push(section)
        })
        setMensagensAgrupadas(data)
    }, [mensagens])
    function atualizar() {
        axios.get(`${Constantes.URL_BASE}/mensageria/listar_mensagens?conversa_id=${conversa_id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
            }
        })
            .then(r => {
                let resposta = r.data;
                console.log(resposta)
                setmensagens(resposta)
                AsyncStorage.setItem(`mensagens_${conversa_id}`, JSON.stringify(resposta));
            })
    }
    useEffect(() => {
        if (msg === '') {
            AsyncStorage.getItem(`mensagens_${conversa_id}`).then(r => {
                setmensagens(JSON.parse(r))
                axios.get(`${Constantes.URL_BASE}/mensageria/listar_mensagens?conversa_id=${conversa_id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
                    }
                })
                    .then(r => {
                        let resposta = r.data;
                        console.log(resposta)
                        setCarregando(false)
                        setmensagens(resposta)
                        AsyncStorage.setItem(`mensagens_${conversa_id}`, JSON.stringify(resposta));
                    })

            })
        }
    }, [])
    if (carregando) {
        return null;
    }

    function renderMsg(item) {
        if ((item.responsavel === 1 && e_autor === 1) || (item.responsavel === 2 && e_autor === 0)) {
            return (
                <View style={{ width: "100%", paddingLeft: "20%", paddingRight:10, marginVertical:10}}>
                <View style={{backgroundColor: "white", width: "100%", borderTopLeftRadius: 10,borderBottomLeftRadius: 10,borderTopRightRadius: 10, paddingHorizontal:10, paddingVertical:5}}>
                    <Text style={{fontSize:16, color:'black'}}>{item.conteudo}</Text>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:'black', textAlign:'right'}}>{item.aconteceu_em}</Text>
                    </View>
                </View>
                </View>
            )
        } else {
            return (
                <View style={{ width: "100%", paddingRight: "20%", paddingLeft:10, marginVertical:10}}>
                    <View style={{backgroundColor: "rgba(255,255,255,0.7)", width: "100%", borderTopRightRadius: 10,borderBottomRightRadius: 10,borderTopLeftRadius: 10, paddingHorizontal:10, paddingVertical:5}}>
                        <Text style={{fontSize:16, color:'black'}}>{item.conteudo}</Text>
                        <View style={{}}>
                            <Text style={{fontSize:10, color:'black', textAlign:'right'}}>{item.aconteceu_em}</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

    return (<View style={style.container}>
            <View style={style.cabecalhoContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Chat");

                }}>
                    <MaterialIcons name={'arrow-back'} size={24 + 12} color={'#fff'}
                                   style={{paddingRight: 8, paddingTop: 8}}/>
                </TouchableOpacity>
                <Image source={require("../../../../assets/images/bender_face.jpg")}
                       style={[style.perfilPicture, {borderColor: pessoa_cor}]}/>
                <View style={{paddingLeft: 8}}>
                    <Text style={{color: "#fff", fontSize: 24}}>{pessoa_nome}</Text>
                    <Text style={{color: "rgba(255,255,255,0.7)", fontSize: 12}}>Mensagens
                        trocadas: {mensagens !== null ? mensagens.length : 0}</Text>
                </View>
            </View>

            <View style={style.containerMensagens}>
                <SectionList sections={mensagensAgrupadas}
                             keyExtractor={item => String(item.id)}
                             renderItem={({item}) => renderMsg(item)}
                             renderSectionHeader={({section: {title}}) => (
                                 <View style={{
                                     flex: 1,
                                     alignItems: "center"
                                 }}>
                                     <View style={{
                                         backgroundColor: '#253341',
                                         paddingHorizontal: 20,
                                         paddingVertical: 3,
                                         marginVertical: 3,
                                         borderRadius: 10,
                                     }}>
                                         <Text style={{color: 'rgba(255,255,255,0.7)'}}>{title.slice(0, 10)}</Text>
                                     </View>
                                 </View>
                             )} style={{width: "100%"}}></SectionList>
            </View>
            <View style={style.tecladoContainer}>
                <TextInput style={{
                    flex: 1,
                    backgroundColor: "#15202B",
                    color: '#fff',
                    height: 12 + 24,
                    borderRadius: 30,
                    paddingHorizontal: 10
                }} value={msg} onChangeText={setMsg}></TextInput>
                <TouchableOpacity onPress={() => {
                    axios.post(`${Constantes.URL_BASE}/mensageria/enviar_mensagem?conversa_id=${conversa_id}&conteudo=${msg}`, {},{
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
                        }
                    })
                        .then(r => {
                            let resposta = r.data;
                            setMsg('');
                            atualizar();
                        })

                }}>
                    <MaterialIcons name={'send'} size={24 + 12} color={'#fff'}
                                   style={{paddingLeft: 20}}/>
                </TouchableOpacity>
            </View>


        </View>

    )
}
export default Mensagens;
const style = StyleSheet.create({
    container: {
        backgroundColor: "#15202B",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    }, cabecalhoContainer: {
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#253341"
    }, perfilPicture: {
        width: 50, height: 50, borderRadius: 100, borderWidth: 2
    }, tecladoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#253341"

    }, containerMensagens: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        width: "100%"
    }
})