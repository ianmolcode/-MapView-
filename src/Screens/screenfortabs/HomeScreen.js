import { Text, View, StyleSheet } from 'react-native'
import React, { Component, useState , useContext} from 'react'
import { Switch } from 'react-native-gesture-handler';
import {EventRegister} from 'react-native-event-listeners'
import themeContext  from '../Constant/themeContext';

// const HomeScreen = () => {
  
  
// }
// export default HomeScreen;

// import { View, Text } from 'react-native'
// import React from 'react'

export default function HomeScreen() {
  
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false)
  return (
    <View style={[ styles.container , {backgroundColor:theme.backgroundColor }]}>
      <Text style={[ styles.text , {color:theme.color}]}> Hola👋🏻. I will help you to switch between different modes.</Text>
      <Switch
        value = {mode}
        onValueChange = {()=>  {
          setMode((value)=>!value);
        EventRegister.emit("changeTheme", mode);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  
  },
  text:{
    fontWeight:'bold',
    fontSize:20, 
    padding:20,
    backgroundColor:'black',
    width:300,

    
  }
}) ;
