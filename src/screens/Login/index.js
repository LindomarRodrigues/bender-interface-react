import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Eye from "react-native-vector-icons/Ionicons";
import Email from "react-native-vector-icons/MaterialIcons";
import React, { useState,useEffect } from "react";
import styles from "./style";
import {auth} from "../../services/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"; 

export default function Login({ navigation }) {

  const [eye, setEye] = useState(true);
  //auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   //navigation
  //   if (auth.currentUser) {
  //     navigation.navigate("BottomNav");
  //   } else {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         navigation.navigate("BottomNav");
  //       }
  //     });
  //   }
  // });

  const login = ()=>{
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("BottomNav", { user: userCredential.user });
          setEmail("");
          setPassword("");
          setErrorMessage("");
        })
        .catch((error) => {
          setErrorMessage("Erro ao entrar");
        });
    } else {
      setErrorMessage("Insira o email e senha de cadastro para entrar");
    }
  };

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
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={styles.input}
            value = {email}
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
            style={{ marginRight: 10 }}
            onPress={handlePress}
          />
          <TextInput
            style={styles.input}
            value = {password}
            placeholder="Senha:"
            placeholderTextColor={"#C7CDCD"}
            secureTextEntry={eye}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={[styles.textButton, { marginTop: 20 }]} onPress={nav}>Cadastre-se</Text>
      </View>
    </View>
  );
}
