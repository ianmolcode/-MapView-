
# MapView

A react native application implementing Google Maps.

![expo-go](https://user-images.githubusercontent.com/76910737/214979777-a2649f3e-239b-46a5-926d-676273ac34d5.svg)




## Installation

Install my-project with npm

```bash
  cd maps
  npm install 
```
Further start the server using: 

```bash
  npm start
```

## Libraries Used

    "@react-navigation/bottom-tabs": "^6.5.3",
    "@react-navigation/native": "^6.1.2",
    "@react-navigation/native-stack": "^6.9.8",
    "constants": "^0.0.2",
    "expo-constants": "~14.0.2",
    "expo-status-bar": "~1.4.2",
    "ionicons": "^6.1.1",
    "native-base": "^3.4.25",
    "react": "18.1.0",
    "react-google-places-autocomplete": "^3.4.0",
    "react-native": "0.70.5",
    "react-native-event-listeners": "^1.0.7",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-google-places-autocomplete": "^2.5.1",
    "react-native-maps": "^1.3.2",
    "react-native-maps-directions": "^1.9.0",
    "react-native-placesearch": "^4.0.1",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-native-vector-icons": "^9.2.0",
    "react-navigation": "^4.4.4" 


## Features

- Current-Location
- Search Places
- Maps Direction
- Theme
- Hot Pink Line Between Two Points


## Images And Video

[Google Drive](https://drive.google.com/drive/folders/1slWkDukaRZMsxFrlK2HYRmp2ZeSl9a7r?usp=sharing)


## HomeScreen Main


```javascript
      <MapView
       ref= {mapRef}
       style={styles.map}
       //to enable the night mode, please uncomment the following  linee
       //customMapStyle={nightView}
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
```


## Optimizations

The App is under-development phase. Will Imporve with time.

