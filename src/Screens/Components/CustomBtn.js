import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBtn = ({
    onPress=()=>{ },
    btnStyle={},
    btnText="Button" 
}) => {
  return (
   <TouchableOpacity
   onPress={onPress}
   style={{...styles.btnStyle, ...btnStyle}}>



    <Text>{btnText}</Text>
   </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btnStyle:{
      height: 50,
        
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 1,
        paddingHorizontal: 16,
        alignItems: 'center',


    },
})