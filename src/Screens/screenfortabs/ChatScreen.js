import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function ChatScreen() {
  return (
    <View style= {styles.container}>
      <Text style ={styles.text}>Welcome to the ChatScreen. </Text>
      <Text style={styles.text}>This project is made under Vocally Internship Task💻</Text>
    </View>
  )
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
    paddingBotton:10, 
    color: '#ff726f',
    width:300,
    paddingLeft: 20,
    
  }
}) ;
