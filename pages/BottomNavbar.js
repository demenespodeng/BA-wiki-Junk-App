import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import About from './About';
import Character from './Character';
import School from './School';

const BottomTab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="About" component={About} 
      options={{ 
        headerShown: false, 
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
            ), 
      }} />
      <BottomTab.Screen name="Character" component={Character} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} />
      <BottomTab.Screen name="Academy" component={School} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
    </BottomTab.Navigator>
  );
};

export default BottomNavbar;
