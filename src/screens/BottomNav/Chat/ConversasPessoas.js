import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import Conversa from "./Conversa";

const ConversasPessoas = ({}) => {
    const [conversas, setConversas] = useState(true);

    return (
        <View style={style.container}>
            <Conversa foto_perfil={require("../../../assets/images/bender_face.jpg")}
                      nome={"Lindomar Rodrigues"}
                      ultima_mensagem={"Testando"}
                      data_hora_ultima_mensagem={"12:00PM"}/>
            <Conversa foto_perfil={require("../../../assets/images/bender_face.jpg")}
                      nome={"Rafael Silva"}
                      ultima_mensagem={"Testando"}
                      data_hora_ultima_mensagem={"12:00PM"}/>
        </View>
    )
}
export default ConversasPessoas;


const style = StyleSheet.create({
    container: {
        width: "100%",
    },
    conversa: {
        width: "100%",
        backgroundColor: "yellow"

    },
    perfilPicture: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})