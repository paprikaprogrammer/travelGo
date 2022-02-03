import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import COLORS from '../../../consts/colors';

const orders = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <StatusBar translucent={false} backgroundColor={COLORS.primary} />
          <View style={style.header}>
            <Text style={style.headerTxt}>My Order</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.sectionContent}>
                <Image style={style.sectionImg} source={require('../../../assets/bg_order.png')}></Image>
                <View style={style.wrapTitle}>
                    <Text style={style.title}>Hore! Mari kita liburan..</Text>
                    <Text style={style.titleFav}>Setelah memesan perjalanan, kamu bisa mengatur pesanan dan melihat E-tiketmu di sini.</Text>
                </View> 
                <View style={style.btnTop}>
                    <Button color={COLORS.primary} title='Pesan Perjalanan'></Button>
                </View>
                <View style={style.btnTop}>
                    <Button color={COLORS.primary} title='Lihat Riwayat Pesanan'></Button>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.primary,
    },
    headerTxt:{
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
    sectionContent: {
        marginHorizontal: 20,
        marginVertical: 38,
        fontWeight: 'bold',
        fontSize: 20,
    },
    sectionImg: {
        width: 310,
        height: 100,
        marginTop: 35
    },
    wrapTitle :{
        marginVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title :{
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 30
    },
    titleFav :{
        fontSize: 13,
        marginTop: 5,
        textAlign: 'center',
        paddingHorizontal: 15
    },
    btnTop:{
        padding: 10,
        margin: 3
    },
    imageHead:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: COLORS.primary,
        marginTop: 5,
        textAlign: 'center',
        paddingHorizontal: 15
    },
    header:{
        marginTop: 5,
        textAlign: 'center',
    }
});
export default orders;
