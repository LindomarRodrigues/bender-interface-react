import {
    View,
    StyleSheet,
    ScrollView
}from "react-native";
import BoxHorario from "./BoxHorario";
import Voltar from "../../../components/Voltar"

const ResultHorarios = ({route,navigation})=>{
    const list = route.params.itens
    const title = route.params.title
    //console.log(title)
    return(
        <ScrollView style={{backgroundColor: "#15202B"}}>
        <View style={styles.container}>
            <Voltar navigation={navigation} title={title}/>
            {Object.keys(list).map((item,key)=> <BoxHorario title={item} content={list[item]} key={key}/> 
            )}
        </View>
        </ScrollView>
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
        paddingVertical: 80
      }
}
)