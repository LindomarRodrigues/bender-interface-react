import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Voltar = ({title, navigation})=>{
    const seta = {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingLeft: 30,
    }
    const handlePress = () =>{
        navigation.pop();
    }
    return (
    <TouchableOpacity style={seta} onPress={handlePress}>
        <MaterialIcons
        name="keyboard-arrow-left"
        size={40}
        color="#C7CDCD"
        style={{ marginRight: 10 }}
        />
        <Text style={{color: "white", fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
    )
}
export default Voltar;