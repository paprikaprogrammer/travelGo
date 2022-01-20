import { 
    View, 
    Text,
    Image,
    StyleSheet,
    Dimensions, } from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');

const ProductCard = (props) => {
  return (
    <View style={style.wrapper}>
        <Image style={style.warpImg} source={props.image}></Image>
        <View style={style.wrapBoxTxt}>
            <View>
                <Text style={style.warpTxt}>{props.title}</Text>
                <Text style={{fontSize:11}}>{props.loc}</Text>
                <Text style={style.wrapTxtNormalPrice}>IDR {props.pricenormal}</Text>
                <Text style={style.wrapTxtIdr}>IDR {props.pricedisc}</Text>
            </View>
        </View>
        <View style={style.wrapDisc}>
            <Text style={{fontSize:11}}>{props.diskon}</Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        width: width / 1.1,
        marginRight: 18,
        marginBottom: 18,
        marginTop: 5
    },
    warpImg :{
        height: width/2,
        width: width/1.1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    warpTxt:{
        fontWeight: 'bold',
    },
    wrapBoxTxt :{
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5
    },
    wrapTxtIdr: {
        color: 'red',
        fontWeight: 'bold'
    },
    wrapTxtNormalPrice : {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        fontSize: 11
    },  
    wrapDisc: {
        position: 'absolute',
        top: 20,
        backgroundColor: 'white',
        padding: 4,
    },
    wrapTitle :{
        marginVertical: 13
    },
    title :{
        fontWeight: 'bold',
        fontSize: 18
    },
    titleFav :{
        fontSize: 13
    }
})

export default ProductCard
