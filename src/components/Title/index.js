import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Title = ({title}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            {/* <Text style={{marginTop: 70, color: "#fff", fontSize: 25}}>oi</Text> */}
        </View>
    )
}
export default Title;

const style = StyleSheet.create({
    container: {
        marginTop: 70,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        marginLeft: 50,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    }
})