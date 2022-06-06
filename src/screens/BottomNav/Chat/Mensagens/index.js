import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Mensagens = ({navigation, route}) => {
    const {pessoa_nome, pessoa_cor, conversa_id} = route.params;
    const [mensagens, setmensagens] = useState([]);

    // useEffect(() => {
    //     AsyncStorage.getItem('conversas').then(r => {
    //         setConversas(JSON.parse(r))
    //
    //         axios.get(`${Constantes.URL_BASE}/mensageria/listar_conversas`, {
    //             headers: {
    //                 "Authorization": `Bearer ${localStorage.getItem('enc_jwt')}`
    //             }
    //         })
    //             .then(r => {
    //                 let resposta = r.data;
    //                 setConversas(resposta)
    //                 AsyncStorage.setItem('conversas', JSON.stringify(resposta));
    //             })
    //
    //     })
    // }, [])
    console.log(conversa_id);

    return (<View style={style.container}>
            <View style={style.cabecalhoContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Chat");

                }}>
                    <MaterialIcons name={'arrow-back'} size={24 + 12} color={'#fff'}
                                   style={{paddingRight: 8, paddingTop: 8}}/>
                </TouchableOpacity>
                <Image source={require("../../../../assets/images/bender_face.jpg")} style={[style.perfilPicture,
                    {borderColor: pessoa_cor}]}/>
                <View style={{paddingLeft: 8}}>
                    <Text style={{color: "#fff", fontSize: 24}}>{pessoa_nome}</Text>
                    <Text style={{color: "rgba(255,255,255,0.7)", fontSize: 12}}>Mensagens trocadas: 22</Text>
                </View>
            </View>


        </View>

    )
}
export default Mensagens;
const style = StyleSheet.create({
    container: {
        backgroundColor: "#15202B", width: "100%", height: "100%", flex: 1, alignItems: "center"
    },
    cabecalhoContainer: {
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
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2
    }
})