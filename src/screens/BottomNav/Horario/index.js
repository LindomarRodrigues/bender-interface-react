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


export default function Horario(){
    return(
        <View style={styles.container}>
            <Text style={{color:'#fff', fontSize:18}}>Pagina de Horarios</Text>
        </View>
        
    )
}
