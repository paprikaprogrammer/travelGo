import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from './src/consts/colors';
const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
      style={{flex:1}}
      source={require('./src/assets/onboardImage.jpg')}
      >
      <View style={style.details}>
        <Text style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold', marginBottom:2}}>Welcome to TravelGo</Text>
        <Text style={{color: COLORS.white, fontSize: 16, fontWeight: 'bold',}}>Mau holiday tapi bingung pesan dimana? di TravelGo aja!</Text>
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text>Ayo Mulai!</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
