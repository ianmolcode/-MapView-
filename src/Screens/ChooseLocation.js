import { View, Text , StyleSheet } from 'react-native'
import React from 'react' ; 

import { ScrollView } from 'react-native-gesture-handler';

//reusable components
import AddressPickup from './Components/AddressPickup';
import CustomBtn from './Components/CustomBtn';




const ChooseLocation = ({navigation}) => {
  const onDone = () => {
    navigation.goBack();
   
  }

  const fetchAddressCors = (lat, lng) => {
    console.log("lattitude and longitude", lat, lng);
  }
  const fetchDestinationCors = (lat, lng) => {
    console.log("lattitude and longitude", lat, lng);
  }
  return (
    
  
      <View style={StyleSheet.app}>
      <ScrollView
      keyboardShouldPersistTaps="handled"
       style= {{backgroundColor:'white' , padding: 24 , marginBottom:16 }}>
      <AddressPickup 
      placeholderText="Enter The Pickup Location"
      fetchAddress={fetchAddressCors}
      />
      <View style={{marginTop:16}}>
      <AddressPickup 
      placeholderText="Enter The DropOff Location"
      />
      <CustomBtn
        btnText="Done"
        btnStyle={{ marginTop: 16}}
        onPress={onDone}
      />
      </View>
       </ScrollView>
      
      </View>
     
      

 
  );
};

export default ChooseLocation

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  }
});