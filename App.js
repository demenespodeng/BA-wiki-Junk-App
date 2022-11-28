import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './pages/About';
import BottomNavbar from './pages/BottomNavbar';
import Character from './pages/Character';
import CharacterDetail from './pages/CharacterDetail';
import School from './pages/School';
import SchoolDetail from './pages/SchoolDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="BA Wiki Junk App" component={BottomNavbar} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Academy" component={School} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
        <Stack.Screen name="AcademyDetail" component={SchoolDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}