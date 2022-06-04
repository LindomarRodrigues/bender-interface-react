import react, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MessageBox = (props)=>{

    const [mbox, setMBox] = useState(false);
    const [rotate, setRotate] = useState(0);
    const [message, setMessage] = useState("");

    function setar(){
        setMBox(()=>!mbox)
        if(!mbox){
            setRotate(90) 
            setMessage(props.content)
        }
        else{
            setRotate(0)
        }
    }

    if(!(props.type)){
        return(
            <View style={!mbox ? styles.container : styles.message}>
                <TouchableOpacity style={styles.box} onPress={setar}>
                    <Text style={{color: "#C7CDCD"}}>{props.title}</Text>
                    <MaterialIcons
                    name="navigate-next"
                    size={30}
                    color="#C7CDCD"
                    style={[
                        {transform: [{ rotate: `${rotate}deg` }] },
                    ]}
                    />
                </TouchableOpacity>
                <View style={mbox ? styles.messageBox : {display: "none"}}>
                    <Text>
                    {message}
                    </Text>
                </View>
            </View>
        )
    }
    else{
        return(
            <View style={!mbox ? styles.container : styles.message}>
                <TouchableOpacity style={styles.box} onPress={setar}>
                    <Text style={{color: "#C7CDCD", fontSize: 16}}>{props.title}</Text>
                    <MaterialIcons
                    name="navigate-next"
                    size={30}
                    color="#C7CDCD"
                    style={[
                        {transform: [{ rotate: `${rotate}deg` }] },
                    ]}
                    />
                </TouchableOpacity>
                <View style={mbox ? styles.pdfBox : {display: "none"}}>
                    <MaterialIcons
                        name="insert-drive-file"
                        size={30}
                        color="red"
                    />
                    <Text>{message}</Text>
                </View>
            </View>
        )
    }

}

export default MessageBox;

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        backgroundColor: "#253341",
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    box:{
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        width: "90%",
        alignItems: "center"
    },
    message:{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        backgroundColor: "#253341",
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center",
        height: "auto",
        paddingTop: 10,
    },
    messageBox:{
        width: "90%",
        backgroundColor: "#C7CDCD",
        padding: 10,
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    pdfBox:{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#C7CDCD",
        padding: 5,
        marginBottom: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
    }
})