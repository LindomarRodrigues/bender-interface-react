import {Image, Text, TextInput, TouchableOpacity, View,} from "react-native";
import Eye from "react-native-vector-icons/Ionicons";
import Email from "react-native-vector-icons/MaterialIcons";
import React, {useEffect, useState} from "react";
import styles from "./style";
import {auth} from "../../services/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import axios from 'axios';

export default function Login({navigation}) {

    const [eye, setEye] = useState(true);
    //auth
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [encJwt, setEncJwt] = useState("")


    useEffect(() => {
        // navigation.navigate("BottomNav")
        console.log(encJwt)
    }, [encJwt]);

    useEffect(() => {
        setErrorMessage("")
    }, [email, senha])


    const entrar = () => {
        if (email !== "" && senha !== "") {
            axios.post(`https://f100-177-126-94-254.ngrok.io/autenticacao/entrar?email=${email}&senha=${senha}`)
                .then(r => {
                   let resposta = r.data;
                    if(resposta.status){
                        navigation.navigate("BottomNav", {user: 'userCredential.user'});
                    }else {
                        setErrorMessage(resposta.erro);
                    }
                })
        } else {
            setErrorMessage("Insira o email e senha para entrar!");
        }
    }

    const handlePress = () => {
        setEye((state) => !state);
    };
    const nav = () => {
        navigation.navigate("Cadastro");
    };
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/bender.png")}
                    resizeMode="contain"
                ></Image>
            </View>
            <View style={styles.box}>
                <View style={styles.inputBox}>
                    <Email
                        name="email"
                        size={20}
                        color="#C7CDCD"
                        style={{marginRight: 10}}
                    />
                    <TextInput
                        style={styles.input}
                        value={email}
                        placeholder="Email:"
                        placeholderTextColor={"#C7CDCD"}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Eye
                        name={eye ? "eye-off" : "eye"}
                        size={20}
                        color="#C7CDCD"
                        style={{marginRight: 10}}
                        onPress={handlePress}
                    />
                    <TextInput
                        style={styles.input}
                        value={senha}
                        placeholder="Senha:"
                        placeholderTextColor={"#C7CDCD"}
                        secureTextEntry={eye}
                        onChangeText={(text) => setSenha(text)}
                    />

                </View>
                <Text style={styles.mensagemErro}>{errorMessage}</Text>
                <TouchableOpacity style={styles.button} onPress={entrar}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={[styles.textButton, {marginTop: 20}]} onPress={nav}>Cadastre-se</Text>
            </View>
        </View>
    );
}
