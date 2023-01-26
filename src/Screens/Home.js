
// import { View, Text , TouchableOpacity, Button } from 'react-native'
// import React from 'react'
// import ChooseLocation from './ChooseLocation';

// const Home = ({navigation}) => {
//     return (
//       <View>
//         <Text>Home Heloo</Text>
//         <TouchableOpacity
//         onPress={()=>navigation.navigate('chooseLocation')}>
//             <Text>Choose Location</Text>
//         </TouchableOpacity>
//       </View>
//     )
//     };
// export default Home;


import React, { useState , useRef } from 'react';  
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View , Text, Button, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { GOOGLE_MAP_KEY } from './Constant/googlemapapi';
import MapViewDirections from 'react-native-maps-directions';
import ImagePath from '../Screens/Constant/ImagePath.js';
import { TouchableOpacity  } from 'react-native-gesture-handler';
import AddressPickup from './Components/AddressPickup';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useTheme } from 'react-navigation';


// nigtView json made using https://mapstyle.withgoogle.com/
const nightView = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
  
const mapStandardStyle = [
{
  "elementType": "geometry",
  "stylers": [
    {
      visibility: "off"
    }
  ]
},
]

export default function Home({navigation}) {
  const[state, setState]= useState({
    pickupCoordinates: { 
      latitude: 29.155483,
      longitude: 77.993524,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropoffCoordinates: {
      latitude: 28.9845,
      longitude: 77.7064,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  })
  const mapRef = useRef();
  const { pickupCoordinates, dropoffCoordinates } = state;
  const onPressLocation = () => {
    navigation.navigate('chooseLocation');
  }
  
  const theme = useTheme();
  return (
   
    <View style={styles.container}>

    <View style ={{flex:1}}>
      <MapView
       ref= {mapRef}
       style={styles.map}
       //to enable the night mode, please uncomment the following linee
    //   customMapStyle={nightView}
      initialRegion={pickupCoordinates} >
      <Marker coordinate={pickupCoordinates} 
      //  image = {ImagePath.CurLoc}
            
      />
      <Marker coordinate={dropoffCoordinates} 
      //  image= {ImagePath.GreenMarker}
      />
      
    <MapViewDirections
    origin={pickupCoordinates}
    destination={dropoffCoordinates}
    apikey={GOOGLE_MAP_KEY}
    strokeWidth={3}
    strokeColor="hotpink"

    optimizeWaypoints={true}
    onReady={result => {
      mapRef.current.fitToCoordinates(result.coordinates, {
        edgePadding: {
          right: 30,
          bottom: 300,
          left: 30,
          top: 100,
        },
      });
    }}
    />
    </MapView>
    <View style={styles.searchbar}>
    <GooglePlacesAutocomplete
    styles={{textInput:styles.input}}
    placeholder='Search'
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
    }}
    query={{
      key: {GOOGLE_MAP_KEY},
      language: 'en',
    }}
  />
  </View>
  
    </View>
   
    <View style= {styles.bottomCard}><Text>Where are you going?</Text>

    <TouchableNativeFeedback onPress = {onPressLocation} >
    <View style= {styles.bottum}>
    <Text>Choose Location📌</Text>
    </View>
    </TouchableNativeFeedback>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  bottomCard:{
    backgroundColor: 'white',
  
    width: '100%',
    padding: 30,
    alignItems: 'center',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  bottum:{
    backgroundColor: 'white',
    borderRadius: 5, 
    borderWidth: 1,
    height: 48,
    width: 300,
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
 },
  searchbar:{
    backgroundColor: 'white',
    width: '90%',
    padding: 3,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 5,
    top: 60,
    marginLeft: 20,

  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
  },
});