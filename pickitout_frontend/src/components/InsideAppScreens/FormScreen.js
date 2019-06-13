import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, View, Text, TextInput } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {Card, CardSection, Header, Button, Input, Spinner} from '../common'
import Script from 'react-load-script'
// import console = require('console');

//////////////////////////////
//////////////////////////////
///////Camera Component///////
//////////////////////////////
//////////////////////////////




class FormScreen extends React.Component {
  state = {
    user:'',
    email:'',
    zipcode: '',
    password: '',
    record:'',
    error: '',
    loading: false //by default I am not loading anything.
  }


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
  onButtonPress(){
        this.setState({
          email:'',
          user:'',
          zipcode: '',
          record:'',
          loading: false,
          error: ''
        })
  }
  render() {

    return (

        // <Script
        // url="https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js"
        // onCreate={
        //     docuSignClick.Clickwrap.render({
        //     environment: 'https://demo.docusign.net',
        //     accountId: 'a06e4408-79bf-41c1-931a-8c466bda73cb',
        //     clickwrapId: 'e988b56a-0b7e-4e53-82b7-f6858cfd103f',
        //     clientUserId: 'UNIQUE_USER_ID'
        //   }, '#ds-terms-of-service')}
        // onError={console.log(err)}
        // onLoad={console.log}
        // />
       
    <Card >
        <CardSection>
            
        <Input 
        label='User'
        placeholder='user'
        value={this.state.user}
        onChangeText={user => this.setState({user: user})}
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
        placeholder='10454'
        value={this.state.zipcode}
        onChangeText={zipcode => this.setState({zipcode: zipcode})}
        />
        </CardSection>


        <CardSection>
        <Input 
        label='Record'
        placeholder='record'
        value={this.state.record}
        onChangeText={record => this.setState({record: record})}
        />
        </CardSection>
      
     <CardSection>     
      <Button 
      onPress={this.onButtonPress.bind(this)}
      >
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