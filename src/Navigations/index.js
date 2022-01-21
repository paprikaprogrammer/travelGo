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
import Pesawat from '../views/screens/Pesawat'
import Hotel from '../views/screens/Hotel'
import Todo from '../views/screens/Todo'
import Kereta from '../views/screens/Kereta'
import Eat from '../views/screens/Eat'
import Event from '../views/screens/Event'
import Sewa from '../views/screens/Sewa'
import Promo from '../views/screens/Promo'
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
