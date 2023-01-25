import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../Constant/googlemapapi';
const AddressPickup = ({
    placeholderText, fetchAdress
}) => {

    const onPressAdrs = (data,details)=>{
      //  console.log("details------->",details);
      const lat =details.geometry.location.lat;
        const lng =details.geometry.location.lng;
        fetchAdress(lat,lng);
    }
    return (
        <GooglePlacesAutocomplete
          placeholder={placeholderText}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'GOOGLE_MAP_KEY',
            language: 'en',
          }}
          styles={{
            textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
            },
            textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
                backgroundColor: '#F3#F3F3',
            },

            }}            
        />
        
      );
};

export default AddressPickup