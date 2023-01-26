import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function FindScreen() {
  return (
    <View style= {styles.container}>
      <Text style ={styles.text}>🙇🏻</Text>
      <Text style={styles.text}>Sorry, we are in under-developoment phase. See You Later!</Text>
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
