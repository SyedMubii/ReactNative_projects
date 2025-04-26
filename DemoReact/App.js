
// In App.js in a new project

import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import Function1 from "./src/screens/Login";
import MyHome from "./src/screens/HomeYoutube";
import Card1 from "./src/Components/Card";
import TableExample from "./src/screens/crud";
import EditData from "./src/screens/EditPage";
import Challenge1 from "./src/Components/Challenges";
import App1 from "./src/screens/modal";

const App = ( ) => {
//     const Stack = createNativeStackNavigator();
   return (
   
  //  <View>
  //   <TableExample/>
  // </View>

  //    <View>
  //   <App1/>
  // </View>

//   //  //show page with the edit button
   
  // <View>    
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Login">
 
  //     <Stack.Screen name="Table" component={TableExample} />
  //     <Stack.Screen name="Home" component={EditData} />       
  //   </Stack.Navigator>
  // </NavigationContainer>
  // </View>

// // move login form

//   //   <NavigationContainer>
//   //   <Stack.Navigator initialRouteName="Login">
//   //     <Stack.Screen name="Login Form" component={Function1} />
//   //     <Stack.Screen name="Home" component={MyHome} />
//   //     <Stack.Screen name="Edit" component={EditData} />
//   //     <Stack.Screen name="Cd" component={Card1} />

//   //   </Stack.Navigator>
//   // </NavigationContainer>
  
  //show card in one line
  //   <View style={{flexDirection: 'row' , alignItems:'center'}}>
   <Card1 />
  //  <Card1 />
  //  <Card1 />
  //   </View>

   
   
   
);
};

export default App;






















// <---------------------------------->




// import React from "react";
// import { StyleSheet, View } from "react-native";
//import FlatListDemo from "./src/screens/FlatListDemo";
//import FlatListDemo1 from "./src/screens/FlatListChallenge";
//import Box1 from "./src/screens/Flexbox";
//import Image1 from "./src/screens/Images";
// import OurButton from "./src/screens/ButtonDemo";
//import OurButton1 from "./src/screens/TouchButton";
//import NCard from "./src/Components/NetflixCard";
//import Challenge1 from "./src/Components/Challenges";
//import Box2 from "./src/screens/Position";
//import Hook from "./src/screens/UsingHooks";
//import ColorGenerator from "./src/screens/ColorGenerator";
//import HookEffect from "./src/screens/RestApiHookEffect";
// import CardDetails from "./src/Components/Card";
// import Function1 from "./src/screens/Login";
// import App1 from "./src/screens/Navigation";

// const App = () => {
  //  return ( 
    //  <View>
    {/* <App1/> */}
      // <Function1 />
      {/* <CardDetails /> */}
      {/* <HookEffect /> */}
      {/* <ColorGenerator /> */}
{/* <Hook /> */}
      {/* <Box2 /> */}
{/* <Box1 /> */}
      {/* <FlatListDemo1 /> */}
     {/* <FlatListDemo /> */}
   {/* <Image1 /> */}
   {/* <OurButton /> */}
   {/* <OurButton1 /> */}
  {/* <NCard /> */}
{/* <Challenge1 /> */}
  //  </View>
//  );
// };
// const styles = StyleSheet.create({
//   textStyle: {
//     color:"red",
//     height:500,
//     display:"flex",
//     justifyContent:"center",
//     alignItems:"center",
//   },
//  });
 
//  export default App;
 


//import libraries to create components
/*import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Customcomponents from "./src/screens/Customcomponents";

//create a component that return some jsx/simple function
const App = () => {
 //creating a variable through javascript
  const name = "Mubashir Ali";
  //creating a text assigning a variable through javascript
  const name1 = <Text> Hello World my Name is : {name}</Text>;
  
  const getName = (fname, sname, tname) => {
    return `my name is ${fname} ${sname} ${tname}`;
  };

  return( 
  <View>
  <Text style={styles.textStyle}> Hello World my Name is : {name}</Text>
  <Customcomponents /> 
  {name1}
  <Text> Hi my name is {getName("syed", "Mubashir", "Ali")}</Text>
    </View>
  )
};

//create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color:"red",    marginTop:"90px",

  },
});

//export the file  so that we can use it elsewhere in our app
export default App;

*/

/*
//TASKs
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import FlatList from "./src/screens/FlatList";

const App = () => {
  //creating a variable through javascript
//   const name = "Mubashir Ali";
  // const name1 = "SMubashir Ali";
   //const name2 = "AMubashir Ali";

   return( 
    /*<View>
    { <Text style={styles.textStyle}> Hello World my Name is : {name}</Text>
    <Text style={styles.textStyle1}> Hello World my Name is : {name1}</Text>
    <Text style={styles.textStyle2}> Hello World my Name is : {name2}</Text> }*/
// <View>
  //  <FlatList />
  //</View>
//);
//};





/*
const styles = StyleSheet.create({
  
  textStyle: {
    color:"red",
    fontWeight:"bold",
    fontSize:"50px",

  },

  textStyle1: {
    color:"Blue",
    fontSize:"30px",

  },

  textStyle2: {
  color:"grey",
  marginTop:"90px",

  },

});
*/



 //export the file  so that we can use it elsewhere in our app




//pic
/*
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;*/