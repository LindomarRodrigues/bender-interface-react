import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#15202B",
      flex: 1,
      width: "100%",
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    carouselItemContainer:{
      backgroundColor: "#253341",
      borderRadius: 10,
      height: 400,
      width: 250,
      marginTop: 50
    },
    carouselItemTitle:{
      fontSize: 18,
      fontWeight: 'normal',
      textAlign: "center",
      color: "#111",
    },
    carouselItemImage:{
        width: "100%",
        height: 330,
        
    },
    carouselItemText:{
      backgroundColor: "#AAB8C2",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      height: 70,
      justifyContent: "center",
    },
}
)

export default styles;