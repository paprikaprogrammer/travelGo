import React, { useEffect, useState, Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import COLORS from '../../consts/colors';
import axios from 'axios';
const {width} = Dimensions.get('screen');

const Wallet = () => {
  const[data, setData]=useState()
  const getData = async() => {
    try {
      // call api method get places
      const res = await axios.get('https://mocki.io/v1/ee56562c-f13c-4c7d-a254-5771918ed362')
      console.log(res, "api saldo")
      console.log(res.data, "data saldo")
      console.log(res.data[0].saldo)
      setData(res.data)
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <Text style={styles.txt}>e-Wallet</Text>
        <View style={styles.container}>
          {data && data.map((item,i)=>{
            return <>
              <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                  <Text style={styles.labelSaldo}>Saldo :</Text>
                  <Text style={styles.valueSaldo}>Rp. {item.saldo}</Text>
                </View>
                <View style={styles.text}>
                  <Text style={styles.labelPoint}>Antar Point :</Text>
                  <Text style={styles.valuePoint}>{item.point} points</Text>
                </View>
              </View>
            </>
          })}
          {/* <View style={styles.informasiSaldo}>
            <View style={styles.text}>
              <Text style={styles.labelSaldo}>Saldo :</Text>
              <Text style={styles.valueSaldo}>Rp. 100.000</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.labelPoint}>Antar Point :</Text>
              <Text style={styles.valuePoint}>100 points</Text>
            </View>
          </View> */}
        </View>
      <Webs/>
    </SafeAreaView>
  );
};

class Webs extends Component {
  render() {
      return <WebView
      source={{ uri: 'https://docs.midtrans.com/en/snap/overview' }} />;
  }
}

const styles = StyleSheet.create({
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
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }, 
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    justifyContent: 'center',
  }
});
export default Wallet;

