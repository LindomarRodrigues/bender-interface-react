import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Box = (props) => {
  const [mbox, setMBox] = useState(false);
  const [rotate, setRotate] = useState(0);

  return (
    <View
      style={[
        styles.container,
        mbox
          ? { height: "auto" }
          : {
              height: 55,
              justifyContent: "center",
            },
        props.CustomMarginBottom ? { marginBottom: 20 } : {},
      ]}
    >
      <TouchableOpacity style={styles.box} onPress={()=>{props.click(props.itens,props.title)}}>
        <Text style={[styles.title, mbox ? { marginTop: 10 } : {}]}>
          {props.title}
        </Text>
        <MaterialIcons
          name="navigate-next"
          size={20}
          color="#C7CDCD"
          style={[
            { marginRight: 10, transform: [{ rotate: `${rotate}deg` }] },
            mbox ? { marginTop: 10 } : {},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
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
  },
});
