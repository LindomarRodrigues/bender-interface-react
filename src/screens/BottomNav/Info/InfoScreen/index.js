import react, {useState, useEffect} from "react";
import {View,StyleSheet,Text,TouchableOpacity, ScrollView} from "react-native";
import { set } from "react-native-reanimated";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MessageBox from "../../../../components/MessageBox";
import MontarAxiosAPI from "../../../../utilitarios/axios"
const InfoScreen = ({route, navigation}) =>{

    const handlePress = () =>{
        navigation.pop();
    }
 
    const list = route.params.itens
    const url = list.api

    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const Axiosapi = MontarAxiosAPI();
        const getContent = async () => {
            Axiosapi.get(url,).then(r=>{
                setContent(r.data);
                setLoading(false)
            }).catch(error=>{
                alert(error)
            })
            // const req = await fetch(api)
            // const json = await req.json()
            // console.log(json)
            // setContent(json)
            // setLoading(false)
        }
        getContent()
    }, [])

    if(list.tipo == 1){
        return(
            <ScrollView style={{backgroundColor: "#15202B"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.seta} onPress={handlePress}>
                    <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="#C7CDCD"
                    style={{ marginRight: 10 }}
                    />
                    <Text style={{color: "white", fontSize: 18}}>Voltar</Text>
                </TouchableOpacity>
                {!loading && Object.keys(content).map((item, key)=>(<MessageBox content={content[item].email} title={content[item].nome} key={key} type={list.file}/>))}
                {/* <MessageBox title={list.nome} content={list.nome} type={list.file}/> */}
            </View>
            </ScrollView>
        )
    }
    else if(list.tipo == 2){
        return(
            <ScrollView style={{backgroundColor: "#15202B"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.seta} onPress={handlePress}>
                    <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="#C7CDCD"
                    style={{ marginRight: 10 }}
                    />
                    <Text style={{color: "white", fontSize: 18}}>Voltar</Text>
                </TouchableOpacity>
                {!loading && Object.keys(content).map((item, key)=>(<MessageBox content={content[item].lattes} title={content[item].nome} key={key} type={list.file}/>))}
                {/* <MessageBox title={list.nome} content={list.nome} type={list.file}/> */}
            </View>
            </ScrollView>
        )
    }
    else if(list.tipo == 3){
        return(
            <ScrollView style={{backgroundColor: "#15202B"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.seta} onPress={handlePress}>
                    <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="#C7CDCD"
                    style={{ marginRight: 10 }}
                    />
                    <Text style={{color: "white", fontSize: 18}}>Voltar</Text>
                </TouchableOpacity>
                {!loading && Object.keys(content).map((item, key)=>(<MessageBox content={`E-mail: ${content[item].email} \nTelefone: ${content[item].telefone}`} title={content[item].email} key={key} type={list.file}/>))}
            </View>
            </ScrollView>
        )
    }
    else{
        return(
            <ScrollView style={{backgroundColor: "#15202B"}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.seta} onPress={handlePress}>
                    <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="#C7CDCD"
                    style={{ marginRight: 10 }}
                    />
                    <Text style={{color: "white", fontSize: 18}}>Voltar</Text>
                </TouchableOpacity>
                {!loading && Object.keys(content).map((item, key)=>(<MessageBox content={content[item].file} title={content[item].nome} key={key} type={list.file}/>))}
                {/* <MessageBox title={list.nome} content={list.nome} type={list.file}/> */}
            </View>
            </ScrollView>
        )
    }
}

export default InfoScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#15202B",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        paddingTop: 80,
        paddingBottom:50
      },
      seta:{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingLeft: 30,
      }
}
)