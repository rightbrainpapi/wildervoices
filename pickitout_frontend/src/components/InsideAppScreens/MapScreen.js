import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {Card, CardSection, Header, Button, Input, Spinner} from '../common'
//////////////////////////////
//////////////////////////////
///////Camera Component///////
//////////////////////////////
//////////////////////////////


// import React from 'react'
// import { View, Text, Image, Button } from 'react-native'
// import ImagePicker from 'react-native-image-picker'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



class MapScreen extends React.Component {
  state = {
    photo: null,
  }
  
//   handleChoosePhoto = () => {
//     const options = {
//       noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.uri) {
//         this.setState({ photo: response });
//       }
//     });
//   };

  static navigationOptions = {
    title: 'Wilder Voices',
    headerTitleStyle: {
      color: 'rgba(36, 32, 9, .9)',
      fontSize: 45,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 70,
      
    },
  };
 
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

//I had to export the object with a key of MapScreen in order to
// export it from the index file using the following method 
// export * from './MapScreen';

export { MapScreen};

// I had to export the object with a key of MapScreen ex. {MapScreen: MapScreen} 
// in order to export it from the index file using the following method 
// export * from './MapScreen';