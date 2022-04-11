import {
    View,
    Button,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Linking,
} 
from "react-native";
import React, {useState, useEffect} from "react";
import styles from "./style";
import Carousel from 'react-native-snap-carousel';
import data from './dataCarousel';
import Cabecalho from "../../../components/Cabecalho";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.70

const logo='https://i.imgur.com/ewq3ESq.png';

const OpenURL = async (url) => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Dont know how to open this URL: ${url}');
      }
  };

const HomePage= ()=>{

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(()=>{
        const getList = async ()=>{
            const req = await (await fetch('https://bender-api-uft-dev.herokuapp.com/listar_grupos_telegram_por_periodo')).json();
            setList(req);
            setLoading(false);
        }
        getList();
    },[]);


    function renderItem({item, index}){
        return(
            <View style={styles.carouselItemContainer} key={index}>
                <Image resizeMode="contain" style={styles.carouselItemImage} source={{uri: logo}}/>
                <View style={styles.carouselItemText}>
                    <Text onPress={(event)=>OpenURL(item.link)} style={styles.carouselItemTitle}>{item.nome}</Text>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Cabecalho title="Início"/>
            <Carousel
                layout={"default"}
                useScrollView
                layoutCardOffset={10}
                data={data}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={renderItem}
                activeSlideAlignment = "center"
            />
        </View>
        
    )
}

export default HomePage;