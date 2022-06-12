import react, {useState} from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Linking,
} 
from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Informe = (props)=>{

    const [mbox, setMBox] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [message, setMessage] = useState("");
    const [link, setLink] = useState("");

    function setar(){
        setMBox(()=>!mbox)
        if(!mbox){
            setRotate(90) 
            setMessage(props.content)
            setLink(props.link)
        }
        else{
            setRotate(0)
        }
    }

    const OpenURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert('Dont know how to open this URL: ${url}');
        }
    };

    return(
        <View style={!mbox ? styles.container : styles.message}>
            <TouchableOpacity style={styles.box} onPress={setar}>
            <MaterialIcons
                name="perm-device-information"
                size={40}
                color="#C7CDCD"
                style={{ marginRight: 2 }}
              />
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"#fff"}}>Informes: {props.remetente}</Text>
            </View>
            <MaterialIcons
                name="arrow-forward-ios"
                size={30}
                color="#C7CDCD"
                style={{ marginRight: 2, transform: [{ rotate: `${rotate}deg` }] }}
              />
            </TouchableOpacity>
            <View style={mbox ? styles.messageBox : {display: "none"}}>
                <Text>Aviso: {message}</Text>
                <Text onPress={(event)=>OpenURL(link)} style={{marginTop:10, color:'#0000EE'}}>link: {link}</Text>
            </View>
        </View>
    )
}

export default Informe;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#253341",
        marginTop: 20,
        width: "100%",
        height: 70,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    content:{
        width: '70%',
    },
    box:{
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        width: "90%",
        alignItems: "center",
    },
    message:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#253341",
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center",
        height: "auto",
        paddingTop: 10,
    },
    messageBox:{
        width: "90%",
        height: 'auto',
        backgroundColor: "#C7CDCD",
        padding: 5,
        marginBottom:10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop:20,
    }
})