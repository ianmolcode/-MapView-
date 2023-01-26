import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import ChooseLocation from './src/Screens/ChooseLocation';
import Tabs from './src/Screens/Tab';
import { EventRegister } from 'react-native-event-listeners';
import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import theme from './src/Screens/Constant/Theme';
import themeContext from './src/Screens/Constant/themeContext';

const Stack = createNativeStackNavigator();

function App() {
const[mode, setMode] = useState(false)

useEffect(() => {
  const listener =  EventRegister.addEventListener('changeTheme', (data) => { 
    setMode(data);
   // console.log(data)
    
  })
  return () => {
    EventRegister.removeEventListener(listener);
  };
}) ;

  

  return (
    <themeContext.Provider value={mode===true? theme.light : theme.dark}>
      {/*to make the dark theme we need to add theme={DarkTheme} in NavigationContainer */}
      <NavigationContainer independent={true}  >
      <Stack.Navigator>
        <Stack.Screen name="Tabs" options={{ headerShown: false }} component={Tabs} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="chooseLocation"  component={ChooseLocation} />
      </Stack.Navigator>
      
      
    </NavigationContainer>
    </themeContext.Provider>
  );
}

export default App;