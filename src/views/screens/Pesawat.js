import React from 'react'
import { 
    Text, 
    ScrollView,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextInput,
    Button,
    View, } from 'react-native'
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';

const Pesawat = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <StatusBar translucent backgroundColor={COLORS.primary} />
            <ImageBackground style={{flex: 1, height: 130}} source={require('../../assets/pesawat.png')}>
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
                    <View>
                      <Text>Dari :</Text>
                      <View style={style.inputContainer}>
                        <Icons name="aircraft" size={28} />
                        <TextInput
                          placeholder="Jakarta"
                          style={{color: COLORS.grey}}
                        />
                      </View>
                      <Text>Ke :</Text>
                      <View style={style.inputContainer}>
                        <Icons name="aircraft" size={28} />
                        <TextInput
                          placeholder="Bandung"
                          style={{color: COLORS.grey}}
                        />
                      </View>
                      <Text>Tanggal Berangkat :</Text>
                      <View style={style.inputContainer}>
                        <Icons name="aircraft" size={28} />
                        <TextInput
                          placeholder="Tanggal"
                          style={{color: COLORS.grey}}
                        />
                      </View>
                      <View>
                        <Text>Penumpang :</Text>
                        <View style={style.inputContainer}>
                          <Icons name="aircraft" size={28} />
                          <TextInput
                            placeholder="1 Penumpang"
                            style={{color: COLORS.grey}}
                          />
                        </View>
                        <Text>Kelas Penerbangan :</Text>
                        <View style={style.inputContainer}>
                          <Icons name="aircraft" size={28} />
                          <TextInput
                            placeholder="Kelas"
                            style={{color: COLORS.grey}}
                          />
                        </View>
                      </View>
                      <Button title="Cari Tiket" style={style.button}></Button>
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
      height: 700,
      paddingHorizontal: 20,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      paddingTop: 10,
      marginTop: 40,
      elevation: 20
    },
    inputContainer: {
      height: 55,
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      borderWidth: 0.5,
      margin: 10
    },
});

export default Pesawat
