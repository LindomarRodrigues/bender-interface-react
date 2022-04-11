import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import Cabecalho from "../../../components/Cabecalho";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConversasPessoas from "./ConversasPessoas";

const Horario = () => {
    const [carregando, setCarregando] = useState(true);
    const [menuEscolhido, setmenuEscolhido] = useState(0);
    AsyncStorage.getItem('@enc_jwt').then(r => {
        console.log(r)
        setCarregando(false)
    })
    if (carregando) {
        return null;
    }

    if (menuEscolhido === 0) {
        let tela = <View style={style.blocoMensagens}>
            <Text style={{color: "#fff"}}>asd</Text>
        </View>;
    } else {
        let tela = <View style={style.blocoMensagens}>
            <Text style={{color: "#fff"}}>dsa</Text>
        </View>;
    }
    return (
        <View style={style.container}>
            <Cabecalho title="Chat"/>
            <View style={{backgroundColor: "#253341", width: "100%"}}>
                <View style={style.menuSuperior}>
                    <View style={[style.botaoMenu, style.botaoMenuAtivo, {borderBottomLeftRadius: 30}]}>
                        <Text style={{color: "#fff", fontSize: 22}}>Pessoas</Text>
                    </View>

                    <View style={[style.botaoMenu, {borderBottomRightRadius: 30}]}>
                        <Text style={{color: "#fff", fontSize: 22}}>Grupos</Text>
                    </View>
                </View>
            </View>
            {menuEscolhido === 0 ?
                <View style={style.blocoMensagens}>
                    <ConversasPessoas></ConversasPessoas>
                </View> :
                <View style={style.blocoMensagens}>
                    <Text style={{color: "#fff"}}>dsa</Text>
                </View>}

        </View>

    )
}
export default Horario;

const style = StyleSheet.create({
    container: {
        backgroundColor: "#15202B",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center"
    },
    blocoMensagens: {
        backgroundColor: "#253341",
        width: "100%",
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 60 + 20
    },
    menuSuperior: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#15202B",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    botaoMenu: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    botaoMenuAtivo: {
        borderBottomColor: '#1D9BF0', borderBottomWidth: 3
    }
})