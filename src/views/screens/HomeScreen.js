import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/EvilIcons';
import Iconmenu from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import COLORS from '../../consts/colors';
import places from '../../consts/places';
import RecommendedCard from '../../views/screens/RecommendedCard'
import Promo from '../../component/Promo';
import CategoryMenu from '../../component/CategoryMenu';
// import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', place)}>
        <ImageBackground  style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Iconmenu name="aircraft" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="staro" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Icon name="wallet" size={28} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 30,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <View style={style.inputContainer}>
              <Icons name="search" size={28} />
              <TextInput
                placeholder="Mau kemana kira kira?"
                style={{color: COLORS.grey}}
              />
            </View>
          </View>
        </View>
        <View style={style.categoryMenu}>
          <CategoryMenu onPress={() => navigation.navigate('Pesawat')} image={require('../../assets/pesawat.png')} title='Pesawat'/>
          <CategoryMenu onPress={() => navigation.navigate('Hotel')} image={require('../../assets/hotel.png')} title='Hotel'/>
          <CategoryMenu onPress={() => navigation.navigate('Todo')} image={require('../../assets/todo.png')} title='To Do'/>
          <CategoryMenu onPress={() => navigation.navigate('Kereta')} image={require('../../assets/kereta.png')} title='Kereta'/>
          <CategoryMenu onPress={() => navigation.navigate('Eat')} image={require('../../assets/eat.png')} title='Eat'/>
          <CategoryMenu onPress={() => navigation.navigate('Event')} image={require('../../assets/event.png')} title='Event'/>
          <CategoryMenu onPress={() => navigation.navigate('Sewa')} image={require('../../assets/mobil.png')} title='Sewa Mobil'/>
          <CategoryMenu onPress={() => navigation.navigate('Promo')} image={require('../../assets/promo.png')} title='Promo'/>
        </View>
        <Text style={style.sectionTitle}>Tujuan Populer</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          {/* banner promo */}
          <Text style={style.sectionTitle}>Promo Terbaik di Tahun 2022</Text>
          <Promo />
          {/* <PlaceCard /> */}
          <Text style={style.sectionTitle}>Rekomendasi Terbaik</Text>
          <RecommendedCard />
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
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 55,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    opacity: 0.8,
    backgroundColor: 'black'
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width
  },
  categoryMenu : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    flexWrap: 'wrap',
    width: '100%',
  } 
});
export default HomeScreen;
