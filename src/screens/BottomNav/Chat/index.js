import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import Cabecalho from "../../../components/Cabecalho";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConversasPessoas from "./Conversas";

const Chat = ({navigation}) => {
    const [carregando, setCarregando] = useState(true);
    const [menuEscolhido, setmenuEscolhido] = useState(0);

    AsyncStorage.getItem('@enc_jwt').then(r => {
        console.log(r)
        setCarregando(false)
    })
    if (carregando) {
        return null;
    }
    return (<View style={style.container}>
            <Cabecalho title="Chat" navigation={navigation}/>
            <View style={{backgroundColor: "#253341", width: "100%"}}>
                <View style={style.menuSuperior}>


                    <TouchableOpacity
                        onPress={() => setmenuEscolhido(0)}
                        style={[style.botaoMenu, {borderBottomLeftRadius: 30}, menuEscolhido === 0 ? style.botaoMenuAtivo : null]}
                    >

                        <Text style={{color: "#fff", fontSize: 22}}>Pessoas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setmenuEscolhido(1)}
                        style={[style.botaoMenu, {borderBottomRightRadius: 30}, menuEscolhido === 1 ? style.botaoMenuAtivo : null]}>
                        <Text style={{color: "#fff", fontSize: 22}}>Grupos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {menuEscolhido === 0 ? <View style={style.blocoMensagens}>
                <ConversasPessoas navigation={navigation}></ConversasPessoas>
            </View> : <View style={style.blocoMensagens}>
                <Text style={{color: "#fff"}}>Aqui será listados os grupos(que irá funcionar se Deus, Cristo, Buda,
                    Jeová, Zeus, Odin, Iemanjá e todas as outras deidades ajudarem.)!!!</Text>
            </View>}

        </View>

    )
}
export default Chat;

const style = StyleSheet.create({
    container: {
        backgroundColor: "#15202B", width: "100%", height: "100%", flex: 1, alignItems: "center"
    }, blocoMensagens: {
        backgroundColor: "#253341",
        width: "100%",
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 60 + 20
    }, menuSuperior: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#15202B",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }, botaoMenu: {
        flex: 1, alignItems: "center", justifyContent: "center"
    }, botaoMenuAtivo: {
        borderBottomColor: '#1D9BF0', borderBottomWidth: 3
    }
})