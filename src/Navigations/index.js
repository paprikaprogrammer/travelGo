import * as React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from '../views/screens/OnBoardScreen';

// tabs
import HomeScreen from '../views/screens/HomeScreen';
import Order from '../page/home/order/orders';
import Explore from '../page/home/explore/explores';
import Akun from '../page/home/akun/akuns';
// tabs

import DetailsScreen from '../views/screens/DetailsScreen';
import Wallet from '../views/screens/Wallet';
import DirectWebview from '../views/screens/DirectWebview';
import RecommendedCard from '../views/screens/RecommendedCard';
import PlaceCard from '../component/PlaceCard'
import Pesawat from '../views/screens/Pesawat'
import Hotel from '../views/screens/Hotel'
import Todo from '../views/screens/Todo'
import Kereta from '../views/screens/Kereta'
import Eat from '../views/screens/Eat'
import Event from '../views/screens/Event'
import Sewa from '../views/screens/Sewa'
import Promo from '../views/screens/Promo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={Tab1} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="DirectWebview" component={DirectWebview} />
        <Stack.Screen name="RecommendedCard" component={RecommendedCard} />
        <Stack.Screen name="PlaceCard" component={PlaceCard} />
        <Stack.Screen name="Pesawat" component={Pesawat} />
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Kereta" component={Kereta} />
        <Stack.Screen name="Eat" component={Eat} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Sewa" component={Sewa} />
        <Stack.Screen name="Promo" component={Promo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export function Tab1() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon:({focused}) => (
          <View>
            <Image 
            source={require('../assets/ichome.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#439edf' : '#747474'
            }}>
            </Image>
          </View>
        ),
      }}
      />
      <Tab.Screen name="Order" component={Order}
      options={{
        tabBarIcon:({focused}) => (
          <View>
            <Image 
            source={require('../assets/icorder.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#439edf' : '#747474'
            }}>
            </Image>
          </View>
        ),
      }}
      />
      <Tab.Screen name="Explore" component={Explore}
      options={{
        tabBarIcon:({focused}) => (
          <View>
            <Image 
            source={require('../assets/icexplore.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#439edf' : '#747474'
            }}>
            </Image>
          </View>
        ),
      }}
      />
      <Tab.Screen name="Akun" component={Akun}
      options={{
        tabBarIcon:({focused}) => (
          <View>
            <Image 
            source={require('../assets/icuser.png')}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#439edf' : '#747474'
            }}>
            </Image>
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  )
}
