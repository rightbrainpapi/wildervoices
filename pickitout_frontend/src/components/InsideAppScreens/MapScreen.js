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
import axios from 'axios'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


















class MapScreen extends React.Component {
  state = {
    photo: null,
        artposts: [],
        page: 0,
        loading: false
      
    
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
 
 ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ////////////////////////////AXIOS CALL/////////////////////////////
  ///////////To Get Images in Database to World_Container////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  
  componentWillMount () {
    // e.preventDefault()
    console.log('We in the  routes');
    this.axiosDataCall();

  }

axiosDataCall = async () =>{
  this.setState({ loading:true});

    axios.get('http://localhost:3001/api/artposts')
      
      .then(response => {
        // console.log(response.data)
        let postentry = response.data
        // this.setState({
        //   artposts:postentry
        //   // artposts:postentry

        // });

        this.setState(state=>({
          artposts: [...state.artposts, ...postentry], loading:false }));
  
        console.log("-----We Are Here-----")
        console.log(this.state.artposts)
      })
  
      .catch( //<--this part of the axios is dealing with the error object.
        error => {
            console.log('Error fetching and parsing data', error);
        }
    );
  
  };


  render() {
    const allposts = this.state.artposts
    console.log(allposts)
    // map((allposts))
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.8651,
         longitude: -119.5383,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
       {allposts.map((eachpost)=>{
        //  console.log(eachpost.lat)
        //  console.log(eachpost.long)
        const lat = eachpost.lat
        const long = eachpost.long
         return (
          <MapView.Marker
          key={eachpost._id}
          coordinate={{
            latitude: 37.8651,
            longitude: -119.5383
          }}
            >
   
          </MapView.Marker>
         );
       })}

       
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