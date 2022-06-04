import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const RowInfo = ({horario, nome}) => {
    const styleText ={
        color: "white",
        fontSize: 14,
    }
    const styleContainer = {
        display: 'flex', flexDirection: 'row', width: '90%',height: "auto", minHeight: 20, marginTop: 15
    }
    return (
        <View style={styleContainer}>
            <Text style={[styleText, {fontWeight: "bold"}]}> {horario }  </Text>
            <View style={{width: "60%", height: "auto"}}>
                <Text style={styleText}>{nome}</Text>
            </View>
        </View>
    )
}

const BoxHorario = (props) => {
  const [mbox, setMBox] = useState(false);
  const [rotate, setRotate] = useState(0);

    //Função para abrir box
   const handlePress = ()=>{
        setMBox(state=>!state);
        mbox ? setRotate(90) : setRotate(0)
   }
  return (
    <View
      style={[
        styles.container,
        mbox
          ? { height: "auto", minHeight: 120, paddingVertical: 20}
          : {
              height: 55,
              justifyContent: "center",
            },
        props.CustomMarginBottom ? { marginBottom: 20 } : {},
      ]}
    >
      <TouchableOpacity style={styles.box} onPress={()=>{handlePress()}}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <MaterialIcons
          name="navigate-next"
          size={20}
          color="#C7CDCD"
          style={[
            { marginRight: 10, transform: [{ rotate: `${rotate}deg` }] }
        ,
          ]}
        />
      </TouchableOpacity>
       { mbox && Object.keys(props.content).map((item,key)=>(<RowInfo horario={props.content[item].horario} nome={props.content[item].nome} key={key}/>))}
    </View>
  );
};

export default BoxHorario;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    backgroundColor: "#253341",
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    marginLeft: 15,
    fontSize: 14,
    color: "#ffff",
    fontWeight: "bold"
  },
});
