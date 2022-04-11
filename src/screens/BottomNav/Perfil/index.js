import {
    View,
    Button,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} 
from "react-native";
import React from "react";
import styles from "./style";
import Cabecalho from "../../../components/Cabecalho";


export default function Perfil(){
    return(
        <View style={styles.container}>
            <Cabecalho title="Perfil"/>
        </View>
        
    )
}