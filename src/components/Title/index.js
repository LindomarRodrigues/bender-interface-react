import {Text, StyleSheet,View}from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Title = ({title})=>{
    return(
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
        </View>
    )
}
export default Title;

const style = StyleSheet.create({
    container:{
      marginTop: 70,
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      marginLeft: 50,
      marginBottom: 20
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    }
})