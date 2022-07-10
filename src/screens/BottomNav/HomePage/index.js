import {
    View,
    ScrollView,
    StyleSheet,
    Text
} 
from "react-native";
import React, {useState, useEffect} from "react";
import Cabecalho from "../../../components/Cabecalho";
import Informe from "../../../components/Informe";
import MontarAxiosAPI from "../../../utilitarios/axios";

const HomePage= ({navigation})=>{

  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const Axiosapi = MontarAxiosAPI();
  useEffect(()=>{
    if(loading){
      Axiosapi.get("/informes/listar_informes").then(r=>{
        setContent(r.data);
        setLoading(false)
    }).catch(error=>{
        alert(error)
    })
    }
    setTimeout(()=>{
      setLoading(true);
    }, 10000)
  },[loading])
    
    return(
            <View style={styles.container}>
                <Cabecalho title="Início" navigation={navigation}/>
                
                <ScrollView style={{marginBottom:70, height:'auto'}}>
                  {content.map((item,key)=>{
                    return(
                      <View key={key}>
                        <Informe remetente={item.remetente} content={item.content}/>
                      </View>
                    )
                  })}
                </ScrollView>
            </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#15202B",
      flex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    }
}
)

      // useEffect(()=>{
      //     const getList = async ()=>{
      //         const req = await (await fetch('https://bender-api-uft-dev.herokuapp.com/listar_grupos_telegram_por_periodo')).json();
      //         setList(req);
      //         setLoading(false);
      //     }
      //     getList();
      // },[]);
  
  
      // function renderItem({item, index}){
      //     return(
      //         <View style={styles.carouselItemContainer} key={index}>
      //             <Image resizeMode="contain" style={styles.carouselItemImage} source={{uri: logo}}/>
      //             <View style={styles.carouselItemText}>
      //                 <Text onPress={(event)=>OpenURL(item.link)} style={styles.carouselItemTitle}>{item.nome}</Text>
      //             </View>
      //         </View>
      //     )
      // }