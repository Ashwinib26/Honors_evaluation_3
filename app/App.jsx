// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'AsteroidInfoApp/app/(tabs)/screens/Home.jsx';
import AsteroidDetails from 'AsteroidInfoApp/app/(tabs)/screens/AsteroidDetails.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AsteroidInfo" component={AsteroidDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
