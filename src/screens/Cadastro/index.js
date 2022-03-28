import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";

export default function Cadastro({ navigation }) {
  const [eye, setEye] = useState(true);
  const handlePress = () => {
    setEye((state) => !state);
  };

  const [course, setCourse] = useState("Unknown");

    const navBack = () => {
      navigation.navigate("Login");
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
          <MaterialIcons
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
          <FontAwesome
            name="user-circle-o"
            size={20}
            color="#C7CDCD"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome:"
            placeholderTextColor={"#C7CDCD"}
          />
        </View>
        <View style={styles.inputBox}>
          <Ionicons
            name="school"
            size={20}
            color="#C7CDCD"
            style={{ marginRight: 2 }}
          />
          <Picker
            selectedValue={course}
            onValueChange={(value, index) => setCourse(value)}
            mode="dropdown" // Android only
            style={styles.picker}
            dropdownIconColor= "#C7CDCD"
          >
            <Picker.Item label="Selecione o curso" value="Unknown" />
            <Picker.Item label="Ciência da Computação" value="CCOMP" />
            <Picker.Item label="Ciência da Computação 2" value="CCOMP2" />
          </Picker>
        </View>
        <View style={styles.inputBox}>
          <Ionicons
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
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={[styles.textButton, { marginTop: 20 }]} onPress={navBack}>Login</Text>
      </View>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});