import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import COLORS from '../../../consts/colors';

const akuns = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Text style={style.headerTxt}>Akun</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 50,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <View style={style.boxContainer}>
              <Text style={{
                  fontSize: 22,
                  fontWeight: 'bold'
              }}>Vidi Aldiano</Text>
              <Text>Verified
                  <Icon name="verified" style={{
                      color: '#348bd8',
                  }}/>
              </Text>
              <Text>Tiket Points : <Text style={{color:'#f9a200', fontWeight:'bold'}}>1000</Text></Text>
            </View>
          </View>
        </View>
        <View style={style.sectionContent}>
            <Text>Selesaikan semua misi dan dapatkan <Text style={{fontWeight:'bold'}}>10,000</Text> tiket Points</Text>
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
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  boxContainer: {
    height: 85,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 2,
    // flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 20,
    // alignItems: 'center',
    elevation: 12,
  },
  sectionContent: {
    marginHorizontal: 20,
    marginVertical: 58,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default akuns;
