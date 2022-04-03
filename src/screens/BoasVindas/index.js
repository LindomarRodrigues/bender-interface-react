import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style.js";

export default function BoasVindas({ navigation }) {
  function nav() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.img}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Olá! Inicie sua jornada no Bender</Text>
        <TouchableOpacity style={styles.button} onPress={nav}>
          <Text style={styles.textButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
