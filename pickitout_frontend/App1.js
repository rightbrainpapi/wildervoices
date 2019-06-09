// // import a library to help create components 
// import React, {Component} from 'react';
// import { StyleSheet, View} from 'react-native';
// // import {createStackNavigator , createAppContainer} from 'react-navigation';


// //Import Necessary Screens
// import LandingScreen from './src/components/Landing/LandingScreen';
// // import AppNavigator from './src/components/AppNavigator/AppNavigator';


// // Create a component
// export default class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <LandingScreen/>
//         {/* <AppNavigator/> */}
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   }
// });


import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, Button, View, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////// 3 Main App Components /////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////





///////////////////////////////
///////////////////////////////
//////// Home Component ///////
///////////////////////////////
///////////////////////////////
class HomeScreen extends React.Component {
  state ={



    screenHeight: height,
    screenWidth: width,
    artposts: this.props.savedartpost,
    user_name: "Update your Name",
    user_bio: "Update your Bio",


  }

  static navigationOptions = {
    title: 'FroReel',
    headerTitleStyle: {
      color: 'rgba(36, 32, 9, .9)',
      fontSize: 45,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 70,
      
    },
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };




  render() {
    const scrollEnabled = this.state.screenHeight > 0;
    return (


      
      <SafeAreaView style={styles.mainContainer}>
       


        <View style={styles.profileSubHeaderContainer}>

            {/* <View style={styles.column1}>
              <Text>User Image</Text> 
            </View> */}
            <View style={styles.column1}>
              <Image
              style={{width: 95, height: 95,  borderRadius: 95/ 2, borderWidth: 8, borderColor: 'rgba(36, 32, 9, 1)'}}
              source={require('./src/components/assets/images/hair1.png')}
              />
            </View>



            <View style={styles.column2}>

              <View style={styles.column2_child1}>
                <Text >{this.state.user_name}</Text>
                <Text>{this.state.user_bio}</Text>
              </View>
             
              {/* <Text> Edit Button</Text> */}




            <TouchableHighlight style={styles.editButton} >
                <Text>Edit</Text>
            </TouchableHighlight>
            </View>




            <View style={styles.column3}>


            <TouchableHighlight style={styles.logoutButton} >
                <Text>Logout</Text>
            </TouchableHighlight>
              {/* <Text>Logout button</Text> */}
            </View>
        </View>

        <View style={styles.userPostsSection} > 

            
     


              <ScrollView style={{
                  flex: 1, 
                  // width: 365,
                  // height: 200,
                  // width: this.state.screenWidth,
                  backgroundColor: 'tan',
                  flexDirection: 'column',
                  // flexWrap: 'wrap',
  
                }}
                contentContainerStyle={styles.scrollview}
                          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
                >


       <View style={styles.userPostsSubSection}>






{/* Begins: This Section Should be Duplicated */}
                <View style={styles.userPost}>

                    <View style={styles.userPostImageContainer} >
                    <Image
                    style={styles.userPostImage}
                    source={require('./src/components/assets/images/hair2.png')}
                    />
                    </View>


                    <View style={styles.userPostInfoCard} >
                      <Text>Style </Text>
                      <Text>Duration </Text>
                      <Text>Longevity</Text>
                      <Text>Description</Text>
                    </View>

                </View>

{/* Ends: This Section Should be Duplicated */}

                {/* Begin: Remove After Testing */}


                <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>


             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>
                <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>


             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('./src/components/assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

            {/* End: Remove After Testing */}







   </View>


              </ScrollView>














         
            





            
         
        </View>

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
//SubHeaderContainer Styling Begins 


  mainContainer:{
     
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#802805', 
    // width: width,
    // width: 375, height: 100,
  },

//Begin Here: This will exist on every page
  profileSubHeaderContainer:{
    position: 'absolute',
    top: 0,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    alignItems: 'center',



    //Just so that I can see
    width: 375, height: 100,backgroundColor: 'rgba(255, 255, 224, .5)',
    
  },
//End Here: This will exist on every page



  column1:{
    
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, height: 100, // backgroundColor: 'powderblue'
  },


  column2:{
    // flex: 1, 
    // flexDirection: 'column',

    justifyContent: 'space-evenly',
    fontSize: 30,
    width: 150, height: 80, //backgroundColor: 'green'
  },

  column2_child1:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 150, 
    height: 50, 
    borderWidth: 2, 
    borderColor: 'rgba(36, 32, 9, 1)', 
    backgroundColor: 'rgba(255, 255, 224, .5)'
},

editButton: {
  alignSelf: 'center',
  alignItems: 'center',
  borderWidth: 2, 
  borderColor: 'rgba(36, 32, 9, .9)', 
  backgroundColor: 'rgba(255, 255, 224, .5)',
  borderRadius: 20,
  borderWidth: 2, 
  width: 50, 
  // padding: 3,
},








  column3:{
    fontSize: 30,
    justifyContent: 'center',
    width: 50, height: 80, //backgroundColor: 'red'
    
},


logoutButton: {
  alignSelf: 'center',
  
  alignItems: 'center',
  borderWidth: 2, 
  borderColor: 'rgba(36, 32, 9, .9)', 
  backgroundColor: 'rgba(255, 255, 224, .5)',
  borderRadius: 20,
  width: 55,
  borderWidth: 2, 
  // padding: 3,
},
//SubHeaderContainer Styling Ends 



// Begins Here: userPostsSection Styling

userPostsSection:{
  flex: 1, 
  flexDirection: 'row',
  justifyContent: 'flex-start',
  justifyContent: 'center', 
  justifyContent: 'space-evenly',
  marginTop: 10,
  top: 100,
  // width: 180,
  width: 365,

  flexWrap: 'wrap', 

  //remove the height when done.
  // height: 400,

  backgroundColor: 'red'
},




userPostsSubSection:{
  // alignItems: 'center',
  justifyContent: 'center', 
  width: 365,
  // height: 372,
  backgroundColor: 'green',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  paddingBottom: 105,
},






scrollview: {
  flexGrow: 1,
  // width: 300,
  justifyContent: 'center',
  alignItems: 'center',
  // justifyContent: 'flex-start',
  flexWrap: 'wrap',
},


// userPostsSecondSubSection:{
//   flex: 1, 
//   width: 365,
//   height: 370,
//   backgroundColor: 'tan',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
  
// },

userPost:{
  // alignSelf: 'center',
  backgroundColor: 'blue',
  height: 190,
  width: 170,
  margin: 6,
},

userPostImageContainer:{
  //backgroundColor: 'yellow',
  width: 170,
  height: 120,
},

userPostImage:{
  width: 170,  
  height: 120,   
  borderWidth: 4, 
  borderColor: 'rgba(36, 32, 9, 1)'
},


userPostInfoCard:{


  // Keep This Background Color
  // backgroundColor: 'rgba(255, 255, 224, .5)',
}




});



//////////////////////////////
//////////////////////////////
///////Camera Component///////
//////////////////////////////
//////////////////////////////


// import React from 'react'
// import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'



class CameraScreen extends React.Component {
  state = {
    photo: null,
  }
  
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  static navigationOptions = {
    title: 'FroReel',
    headerTitleStyle: {
      color: 'rgba(36, 32, 9, .9)',
      fontSize: 45,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 70,
      
    },
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 300, height: 300 }}
        />
      )}
      <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    </View>
    );
  }
}



///////////////////////////////
///////////////////////////////
///////Parlor Component///////
///////////////////////////////
///////////////////////////////


import axios from 'axios'
import { FlatList, ActivityIndicator } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import Parlor_Posts from './src/components/Parlor_Posts'

class ParlorScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      artposts: [],
      page: 0,
      loading: false
    }
  }





  static navigationOptions = {
    title: 'FroReel',
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


  handleEnd =() =>{
    this.setState(state=> ({page: state.page + 1}), () => this.axiosDataCall() );
  };

  render() {
    const allpost = this.state.artposts
    return (
      <View
      style={
        {
          backgroundColor: '#802805'
        }
      } >
        <FlatList
        contentContainerStyle={styles.scrollview}
        // style={{alignContent: 'center', }}
        // contentContainerStyle={styles.scrollview}
        // onContentSizeChange={this.onContentSizeChange}
          data={allpost}
          keyExtractor={(x, i) => i}
          onEndReached={this.handleEnd}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            this.state.loading 
            ? null
            : <ActivityIndicator size='large' animating/>}
          renderItem={({item})=>
          <View 
          style={{
            // alignSelf: 'center',
            // backgroundColor: 'blue',
             width: 300,
             height: 378,
           
            margin: 15,
          }}>
            <View 
            // key={i}
            style={
              {
                //backgroundColor: 'yellow',
                width: 120,
                height: 120,
              }
            } >
            
              <Image
              source={{ uri: "http://localhost:3001/" + item.image }}
              // source={require(`./Server_Side/public/artpostimages/braidedupdo.jpeg`)} 
              style={{
                width: 300,  
                height: 290,   
                borderWidth: 4, 
                borderColor: 'rgba(36, 32, 9, 1)'
              }}alt={item.style}> 
              </Image>

              <View style={{  width: 300, backgroundColor: 'rgba(255, 255, 224, .5)'}}>
                  <Text>Style: {item.style}</Text>
                  <Text>Duration: {item.duration} </Text>
                  <Text>Longevity: {item.longevity}</Text>
                  <Text>Description:  {item.description}</Text> 
              </View>
            </View>


                


          </View>}
        // Closing tag for the Flatlist Component
        />


      </View>

      // <View >
      // <View  style={{marginBottom: 1}} key={i}>
      //   <Parlor_Posts info={allpost}  /> 
      // </View>
      
      // </View>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#802805' }}>
      //   <Text>Parlor Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => {
      //       /* 1. Navigate to the Details route with params */
      //       this.props.navigation.navigate('Details', {
      //         itemId: 88,
      //         otherParam: 'anything you want here',
      //       });
      //     }}
      //   />
      // </View>
    );
  }
}




///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
////////// 3 Main Navigation Stacks ///////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



const Home = createStackNavigator(
  {
    Home: HomeScreen,
    // Profile: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      
      //Styles the Header
      headerStyle: {
        backgroundColor: 'rgba(255, 214, 172, .3)',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
      
    },
  }
);

const Camera = createStackNavigator(
  {
    Camera: CameraScreen,
    // Camera: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',

      //Styles the Header
      headerStyle: {
        backgroundColor: 'rgba(255, 214, 172, .3)',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      title: 'You',
      tabBarLabel: 'Camera!',
    },
  }
);

const Parlor = createStackNavigator(
  {
    Parlor: ParlorScreen,
    // Profile: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',

      //Styles the Header
      headerStyle: {
        backgroundColor: 'rgba(255, 214, 172, .3)',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      title: 'You',
      tabBarLabel: 'Parlor!',
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


// const Tabs = createBottomTabNavigator({ screen: Home },
//   {
//     tabBarOptions: {
//       activeTintColor: '#e91e63',
//       labelStyle: {
//         fontSize: 12,
//       },
//       style: {
//         backgroundColor: 'rgba(255, 214, 172, .9)',
//         // backgroundColor: 'rgba(255, 214, 172, .3)',
//       },
//     }
//   });

const Tabs = createBottomTabNavigator({ Home, Camera, Parlor }, 
   {
  tabBarOptions: {
    activeTintColor: 'rgba(36, 32, 9, .9)',
    
    labelStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: 'rgba(255, 214, 172, .9)',
      // backgroundColor: 'rgba(255, 214, 172, .3)',
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
class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




export default  App 





