import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from '../views/screens/OnBoardScreen';
import HomeScreen from '../views/screens/HomeScreen';
import DetailsScreen from '../views/screens/DetailsScreen';
import Wallet from '../views/screens/Wallet';
import DirectWebview from '../views/screens/DirectWebview';
import RecommendedCard from '../views/screens/RecommendedCard';
import PlaceCard from '../component/PlaceCard'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="DirectWebview" component={DirectWebview} />
        <Stack.Screen name="RecommendedCard" component={RecommendedCard} />
        <Stack.Screen name="PlaceCard" component={PlaceCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
