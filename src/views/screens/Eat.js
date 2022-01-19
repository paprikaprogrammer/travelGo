import React from 'react'
import { 
    Text, 
    ScrollView,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    Image,
    View, } from 'react-native'
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

const Eat = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <ImageBackground style={{flex: 1, height: 130}} source={require('../../assets/eat.png')}>
                <View style={style.header}>
                    <Icon
                        name="arrow-back-ios"
                        size={28}
                        color={COLORS.primary}
                        onPress={navigation.goBack}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                    style={style.containers}>
                        <View style={style.wrapper}>
                            <Image style={style.warpImg} source={require('../../assets/kuliner1.jpg')}></Image>
                            <View style={style.wrapBoxTxt}>
                                <View>
                                    <Text style={style.warpTxt}>Seafood - Antapani </Text>
                                    <Text style={{fontSize:11}}>2km</Text>
                                    <Text style={style.wrapTxtNormalPrice}>IDR 60,000</Text>
                                    <Text style={style.wrapTxtIdr}>IDR 35,000</Text>
                                    <Text style={style.wrapTxtDiscFood}>Hemat35%</Text>
                                </View>
                            </View>
                            <View style={style.wrapDisc}>
                                <Text style={{fontSize:11}}>Diskon 35%</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    containers: {
        backgroundColor: COLORS.white,
        height: 500,
        paddingHorizontal: 20,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingTop: 10,
        marginTop: 40,
        elevation: 20
    },
    wrapper: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        // width: width / 2 - 27,
        marginRight: 18,
        width: '100%',
        marginBottom: 18,
        marginTop: 5,
        flexDirection: 'row'
    },
    warpImg :{
        height: width/3,
        width: width/3,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    warpTxt:{
        // marginLeft: 8,
        // marginTop: 10,
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
        top: 10,
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
    },
    wrapTxtDiscFood :{
        fontSize: 11,
        backgroundColor: 'antiquewhite',
        position: 'absolute',
        bottom: -25
    }
});

export default Eat
