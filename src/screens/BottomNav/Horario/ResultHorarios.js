import react from "react";
import {
    View,
    Button,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
}from "react-native";
import Box from '../../../components/Box'

const ResultHorarios = ({route})=>{
    const list = route.params.itens
    return(
        <View style={styles.container}>
            <View ></View> 
            {Object.keys(list).map((item,key)=>(<Box title={`${list[item].disciplina_nome}  (${list[item].turma.toUpperCase()})`} key={key}/>))}
        </View>
    )
}

export default ResultHorarios;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#15202B",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        paddingTop: 80
      }
}
)