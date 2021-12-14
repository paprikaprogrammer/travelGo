import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ButtonIcon,
  // ImageBackground,
  Dimensions,
  // TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');

const Wallet = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Wallet</Text>
        <View style={styles.container}>
          <View style={styles.informasiSaldo}>
            <View style={styles.text}>
              <Text style={styles.labelSaldo}>Saldo :</Text>
              <Text style={styles.valueSaldo}>Rp. 100.000</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.labelPoint}>Antar Point :</Text>
              <Text style={styles.valuePoint}>100 points</Text>
            </View>
          </View>
          <View style={styles.buttonAksi}>
            <ButtonIcon title="Add Saldo" />
            <Gap width={10} />
            <ButtonIcon title="Get Point" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '60%',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_UTAMA,
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }, 
});
export default Wallet;
