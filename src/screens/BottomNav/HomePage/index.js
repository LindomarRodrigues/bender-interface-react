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

const HomePage= ({navigation})=>{

    const [list, setList] = useState([]);

    const [people, setPeople] = useState([
      {remetente:'Aviso da Coordenação', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'1'},
      {remetente:'Aviso da Diretoria de Palmas', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'2'},
      {remetente:'Assembléia Geral do CACCOMP', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'3'},
      {remetente:'Assembléia Geral do CACCOMP', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'3'},
      {remetente:'teste4', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'4'},
      {remetente:'teste5', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'5'},
      {remetente:'teste6', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'6'},
      {remetente:'teste7', content:'ENCERRA AMANHÃ - Período para validação de ATIVIDADES COMPLEMENTARES para 2022/1º, nos termos da Resolução Consepe nº 04/2005 e suas alterações – Via Processo Eletrônico em', key:'7'},
    ])

    // const [content, setContent] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     const getContent = async () => {
    //         const req = await fetch(api)
    //         const json = await req.json()
    //         setContent(json)
    //         setLoading(false)
    //     }
    //     getContent()
    // }, [])
    
    return(
            <View style={styles.container}>
                <Cabecalho title="Início" navigation={navigation}/>
                
                <ScrollView style={{marginBottom:70, height:'auto'}}>
                  {people.map((item)=>{
                    return(
                      <View key={item.key}>
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