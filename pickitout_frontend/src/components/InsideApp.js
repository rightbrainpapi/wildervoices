import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


import { FormScreen, MapScreen} from './InsideAppScreens'


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
////////// 3 Main Navigation Stacks ///////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


const Form = createStackNavigator(
  {
    Form: FormScreen,
    // Form: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',

      //Styles the Header
      headerStyle: {
        backgroundColor: '#3E71BD',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      title: 'You',
      tabBarLabel: 'Form!',
    },
  }
);

const Map = createStackNavigator(
  {
    Map: MapScreen,
    // Map: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',

      //Styles the Header
      headerStyle: {
        backgroundColor: '#3E71BD',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      title: 'You',
      tabBarLabel: 'Map!',
    },
  }
);



///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
/////////// 3 Main Navigation Tabs ////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



// Maybe I can write a terinary statement here to check if the person is signed in.
//if they are signed in it will return the Home, Camera and Parlor Screens. 
// If they are not signed in it will return the Landing Login and signup screens 

const Tabs = createBottomTabNavigator({  Form, Map }, 
   {
  tabBarOptions: {
    activeTintColor: 'rgba(36, 32, 9, .9)',
    
    labelStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: '#3E71BD',
      // backgroundColor: '#3E71BD',
    },
  }
}
  );


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//////// Tabs included in a Container /////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

const AppContainer = createAppContainer(Tabs);




///////////////////////////////////////////////
//////////// Exporting Everything /////////////
///////////////////////////////////////////////
class InsideApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}




export default  InsideApp; 