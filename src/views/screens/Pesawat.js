import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');

const Pesawat = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 500,
            paddingHorizontal: 20,
          }}>
          <View style={style.box}>
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
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary,
  },
  inputContainer: {
    height: 55,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  box: {
    elevation: 15,
    borderRadius: 10,
    paddingHorizontal: 2,
    backgroundColor: COLORS.white,
    height: 450
  },
  button: {
    paddingHorizontal: 10,
  }
});
export default Pesawat;
