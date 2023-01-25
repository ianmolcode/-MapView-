
import React, { useState , useRef } from 'react';  
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { GOOGLE_MAP_KEY } from './googlemapapi';
import MapViewDirections from 'react-native-maps-directions';
export default function Demo() {
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

  
  return (
    <View style={styles.container}>
      <MapView
       ref= {mapRef}
       style={styles.map}
      initialRegion={pickupCoordinates} >
      <Marker coordinate={pickupCoordinates} />
      <Marker coordinate={dropoffCoordinates} />
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
});