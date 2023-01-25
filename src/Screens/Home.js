
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
  
  return (
    <View style={styles.container}>
    <View style ={{flex:1}}>
      <MapView
       ref= {mapRef}
       style={styles.map}
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
    </View>
    <View style= {styles.bottomCard}><Text>Where are you going?</Text>

    <TouchableNativeFeedback onPress = {onPressLocation} >
    <View style= {styles.bottum}>
    <Text>Choose Location Buddy</Text>
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
 }
});