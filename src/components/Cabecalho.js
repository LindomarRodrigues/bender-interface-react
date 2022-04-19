import { StyleSheet, Text, TouchableWithoutFeedback, Image, View } from "react-native";
import React from "react";

const Cabecalho = ({ title, navigation }) => {
    const handlePress = () => {
        navigation.navigate("Perfil");
    }
    return (
        <View style={style.container} >
            <Text style={style.title}>{title}</Text>
            <TouchableWithoutFeedback onPress={() => { handlePress() }}>
                <Image source={require("../assets/images/bender_face.jpg")} style={style.perfilPicture} />
            </TouchableWithoutFeedback>
        </View>
    )
}
export default Cabecalho;


const style = StyleSheet.create({
    container: {
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#253341"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    perfilPicture: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
})