import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'
import { NativeBaseProvider, Box } from "native-base";


import ProfileScreen from './Pages/ProfileScreen';
import HomeScreen from './Pages/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const baseURL = "http://ergast.com/api/f1/2022/drivers";
    axios.get(`${baseURL}`).then((response) => setData(response.json));
  }, []);

  // console.log(data)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;