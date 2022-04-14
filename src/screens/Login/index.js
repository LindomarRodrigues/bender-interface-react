import {Image, Text, TextInput, TouchableOpacity, View,} from "react-native";
import Eye from "react-native-vector-icons/Ionicons";
import Email from "react-native-vector-icons/MaterialIcons";
import React, {useEffect, useState} from "react";
import styles from "./style";
import MontarAxiosAPI from "../../utilitarios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardError from './CardError'

export default function Login({navigation}) {
    const [eye, setEye] = useState(true);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [encJwt, setEncJwt] = useState("")


    useEffect(() => {
        AsyncStorage.setItem('@enc_jwt', encJwt).then(r => {

            console.log(encJwt)
        })
    }, [encJwt]);

    useEffect(() => {
        setErrorMessage("")
    }, [email, senha])


    const entrar = () => {
        const axiosApi = MontarAxiosAPI();
        if (email !== "" && senha !== "") {
            axiosApi.post('/autenticacao/entrar',
                `grant_type=&username=${email}&password=${senha}&scope=&client_id=&client_secret=`,
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(r => {
                    let resposta = r.data;

                    console.log(resposta)
                    if (resposta.status) {
                        console.log(resposta)
                        AsyncStorage.setItem('@enc_jwt', r.data.access_token).then(r => {
                            navigation.navigate("BottomNav");
                        })
                    } else {
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
                />
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
                {errorMessage != "" && <CardError  error={errorMessage} />}
                <TouchableOpacity style={styles.button} onPress={entrar}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={[styles.textButton, {marginTop: 20}]} onPress={nav}>Cadastre-se</Text>
            </View>
        </View>
    );
}
