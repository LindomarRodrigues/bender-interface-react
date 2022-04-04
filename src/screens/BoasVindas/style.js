import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#15202B',
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      height: '63%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
      height: 237,
      width: 256,
    },
    box: {
      height: '37%',
      width: '100%',
      backgroundColor: '#253341',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    text:{
      fontSize: 28,
      color: '#fff',
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50,
      
    },
    button:{
      width: '85%',
      height: 50,
      backgroundColor: '#1D9BF0',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton:{
      fontSize: 18,
      color: '#fff'
    }
  });

export default styles;