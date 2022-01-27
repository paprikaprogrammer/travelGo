import React, {useEffect, useState} from 'react'
import { 
    Text, 
    ScrollView,
    SafeAreaView,
    StatusBar,
    Image,
    StyleSheet,
    Dimensions,
    View, } from 'react-native'
import COLORS from '../../../consts/colors';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const {width} = Dimensions.get('screen');

const explores = () => {
    const [loading, setLoading] = useState(true);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <StatusBar translucent backgroundColor={COLORS.primary} />
        {loading ? (
            <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{alignItems: 'center'}}>
            <SkeletonPlaceholder>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                    <View style={{width: 120, height: 20, borderRadius: 4}} />
                    <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                    />
                </View>
                </View>
                <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                    style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                    style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                    <View style={{width: 120, height: 20, borderRadius: 4}} />
                    <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                    />
                </View>
                </View>
                <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                    style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                    style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
                </View>
            </SkeletonPlaceholder>
            </ScrollView>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={style.containers}>
                <View style={style.wrapTitle}>
                    <Text style={style.title}>Hore! Mari kita liburan..</Text>
                    <Text style={style.titleFav}>Tempat farovit kembali dibuka dan aman dikunjungi. Yuk, Pesan sekarang</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={style.wrapper}>
                        <Image style={style.warpImg} source={require('../../../assets/todo1.jpg')}></Image>
                        <View style={style.wrapBoxTxt}>
                            <View>
                                <Text style={style.warpTxt}>Voucher Kidania</Text>
                                <Text style={{fontSize:11}}>Bandung</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.wrapper}>
                        <Image style={style.warpImg} source={require('../../../assets/todo2.jpg')}></Image>
                        <View style={style.wrapBoxTxt}>
                            <View>
                                <Text style={style.warpTxt}>Voucher Kidania</Text>
                                <Text style={{fontSize:11}}>Bandung</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={style.wrapper}>
                        <Image style={style.warpImg} source={require('../../../assets/todo3.jpg')}></Image>
                        <View style={style.wrapBoxTxt}>
                            <View>
                                <Text style={style.warpTxt}>Voucher Kidania</Text>
                                <Text style={{fontSize:11}}>Bandung</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.wrapper}>
                        <Image style={style.warpImg} source={require('../../../assets/todo4.jpg')}></Image>
                        <View style={style.wrapBoxTxt}>
                            <View>
                                <Text style={style.warpTxt}>Voucher Kidania</Text>
                                <Text style={{fontSize:11}}>Bandung</Text>
                            </View>
                        </View>
                    </View>
                </View>
                </View>
            </ScrollView>
        )}
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
        // height: 500,
        paddingHorizontal: 20,
        // borderTopStartRadius: 30,
        // borderTopEndRadius: 30,
        paddingTop: 25,
        // marginTop: 40,
        elevation: 20,
    },
    wrapper: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        width: width / 2 - 27,
        marginRight: 18,
        marginBottom: 18,
        marginTop: 5
    },
    warpImg :{
        height: width/2-27,
        width: width/2-27,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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
    }
});

export default explores
