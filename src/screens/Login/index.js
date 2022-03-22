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
import React, { useState } from "react";
import styles from "./style";

export default function Login({ navigation }) {
  const [eye, setEye] = useState(true);
  const handlePress = () => {
    setEye((state) => !state);
  };
//   const nav = () => {
//     navigation.navigate("Home");
//   };
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
            placeholder="Email:"
            placeholderTextColor={"#C7CDCD"}
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
            placeholder="Senha:"
            placeholderTextColor={"#C7CDCD"}
            secureTextEntry={eye}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={[styles.textButton, { marginTop: 20 }]}>Cadastre-se</Text>
      </View>
    </View>
  );
}
