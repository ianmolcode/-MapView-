import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import ChooseLocation from '../ChooseLocation';
const Stack = createNativeStackNavigator();

export default function MapScreen({navigation}) {
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="chooseLocation"  component={ChooseLocation} />
          </Stack.Navigator>
          
          
        </NavigationContainer>
      );
}





