import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, View, Text, TextInput } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {Card, CardSection, Header, Button, Input, Spinner} from '../common'
//////////////////////////////
//////////////////////////////
///////Camera Component///////
//////////////////////////////
//////////////////////////////


// import React from 'react'
// import { View, Text, Image, Button } from 'react-native'
// import ImagePicker from 'react-native-image-picker'



class FormScreen extends React.Component {
  state = {
    email:'',
    password: '',
    error: '',
    loading: false //by default I am not loading anything.
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
       
    <Card >
        <CardSection>
            
        <Input 
        label='User'
        placeholder='user'
        />





        </CardSection>
        <CardSection>
        <Input 
        label='Email'
        placeholder='user@gmail.com' 
        value={this.state.email}
        onChangeText={email => this.setState({email: email})}
        />
        </CardSection>
        <CardSection>
        <Input 
        label='Zipcode'
        placeholder='zipcode'/>
        </CardSection>
        <CardSection>
        <Input 
        label='Record'
        placeholder='record'/>
        </CardSection>
      
     
{/*       
      <Input placeholder='record'></Input>
      <Text>DocuSign Trigger Here</Text> */}
     <CardSection>     
      <Button >
            DocuSign
      </Button> 
      </CardSection>
    </Card>
       

    );
  }
}


//I had to export the object with a key of FormScreen in order to
// export it from the index file using the following method 
// export * from './FormScreen';

export { FormScreen};

// I had to export the object with a key of FormScreen ex. {FormScreen: FormScreen} 
// in order to export it from the index file using the following method 
// export * from './FormScreen';