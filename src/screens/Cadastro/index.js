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
import axios from "axios";
import * as Constantes from "../../utilitarios/Constantes";
import MontarAxiosAPI from "../../utilitarios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro({ navigation }) {
  const [eye, setEye] = useState(true);
  const [click, setClick] = useState(false);

  const handlePress = () => {
    setEye((state) => !state);
  };

  const handleClick = () => {
    setClick((state) => !state);
  };

  // const [course, setCourse] = useState("");

  const [institution, setInstitution] = useState();
  const [campus, setCampus] = useState();
  const [course, setCourse] = useState();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const navBack = () => {
    navigation.navigate("Login");
  };
  const cadastrar = () => {
    const postData = {
      nome: nome,
      email: email,
      senha: password,
      curso: course,
      campus: campus,
      instituicao: institution,
      tipo_usuario: 1,
    };
    axios
      .post(`${Constantes.URL_BASE}/autenticacao/cadastrar`, postData, {
        headers: {
          accept: "application/json",
        },
      })
      .then((r) => {
        if (r.data.status) {
          const axiosApi = MontarAxiosAPI();
          axiosApi
            .post(
              "/autenticacao/entrar",
              `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`,
              {
                headers: {
                  accept: "application/json",
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((response) => {
              let resposta = response.data;
              alert(resposta.erro);
              if (resposta.status) {
                AsyncStorage.setItem("@enc_jwt", resposta.access_token).then(
                  (r) => {
                    localStorage.setItem("enc_jwt", resposta.access_token);
                    navigation.navigate("BottomNav");
                  }
                );
              } else {
                setErrorMessage(resposta.erro);
              }
            })
            .catch((err) => alert("Servidor da API não está respondendo"));
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <View>
      {/* Segunda etapa do cadastro */}
      <View style={!click ? styles.container : styles.container2}>
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
              value={email}
              style={styles.input}
              placeholder="Email:"
              placeholderTextColor={"#C7CDCD"}
              onChangeText={(text) => {
                setEmail(text);
              }}
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
              onChangeText={(text) => {
                setNome(text);
              }}
            />
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
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
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
              placeholder="Confirmar Senha:"
              placeholderTextColor={"#C7CDCD"}
              secureTextEntry={eye}
              onChangeText={(text) => {
                setPasswordCheck(text);
              }}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleClick}>
            <Text style={styles.textButton}>Avançar</Text>
          </TouchableOpacity>
          <Text
            style={[styles.textButton, { marginTop: 20 }]}
            onPress={navBack}
          >
            Login
          </Text>
        </View>
      </View>

      {/* Segunda etapa do cadastro */}
      <View style={!click ? styles.container2 : styles.container}>
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
              name="account-balance"
              size={20}
              color="#C7CDCD"
              style={{ marginRight: 2 }}
            />
            <Picker
              selectedValue={institution}
              onValueChange={(value, index) => setInstitution(value)}
              mode="dropdown" // Android only
              style={styles.picker}
              dropdownIconColor="#C7CDCD"
            >
              <Picker.Item label="Selecione a Instituição" value="" />
              <Picker.Item
                label="Universidade Federal do Tocantins"
                value="1"
              />
            </Picker>
          </View>
          <View style={styles.inputBox}>
            <MaterialIcons
              name="place"
              size={20}
              color="#C7CDCD"
              style={{ marginRight: 2 }}
            />
            <Picker
              selectedValue={campus}
              onValueChange={(value, index) => setCampus(value)}
              mode="dropdown" // Android only
              style={styles.picker}
              dropdownIconColor="#C7CDCD"
            >
              <Picker.Item label="Selecione o Campus" value="" />
              <Picker.Item label="UFT - Campus Palmas" value="1" />
            </Picker>
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
              onValueChange={(value) => setCourse(value)}
              mode="dropdown" // Android only
              style={styles.picker}
              dropdownIconColor="#C7CDCD"
            >
              <Picker.Item label="Selecione o curso" value="" />
              <Picker.Item label="Ciência da Computação" value="1" />
              <Picker.Item label="Engenharia de Alimentos" value="2" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => cadastrar()}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
          <Text
            style={[styles.textButton, { marginTop: 20 }]}
            onPress={handleClick}
          >
            Voltar
          </Text>
        </View>
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
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
