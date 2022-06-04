import React from 'react';

import {View, Text, StyleSheet} from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CardError = ({error})=>{
    return(
        <View style={styles.cardError}>
            <MaterialIcons name="error-outline" size={30} color="white"/>
            <Text style={styles.textError}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     cardError:{
         display: "flex",
         flexDirection: 'row',
         width: '80%',
         backgroundColor: "#F43D34",
         height: 33,
         borderRadius: 10,
         marginTop: 20,
         paddingHorizontal: 10,
         alignItems: 'center',
     },
     textError:{
         marginLeft: 10,
         color: "white",
         fontSize: 14
     }
})
export default CardError;