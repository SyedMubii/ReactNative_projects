import React from "react";
import { View, Text, StyleSheet, Image, Button, Linking} from "react-native";

const NCard = (props1) => {
    return(
        <View style={styles.textStyle1}>
        <View>
            <Text style={styles.listStyle}>
                Netflix Card
            </Text>

            <View style={styles.textStyle}>
            <Image style={styles.imageStyle} source={{uri:"https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
            }}
            />
            <Text style={styles.listStyle2}>
                Videos
            </Text>
            <Text style={styles.para}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
            </Text>

   <Button title="Watch Now"
onPress={() => Linking.openURL("https://www.netflix.com/browse") } />


            </View>
        </View>
        </View>
        );
};


const styles = StyleSheet.create({

    textStyle1: {

// margin:350,
      justifyContent:"center",
      alignItems:"center",
    //   borderWidth:  1,
    //   borderStyle:  'solid',

    //   marginBottom:20,
    },


    textStyle: {

        // height:300,
        // width:300,
        // padding:20,
        // margin:200,
// /      display:"flex",
margin:25,

      justifyContent:"center",
      alignItems:"center",
      borderWidth:  1,
      borderStyle:  'solid',

    //   marginBottom:20,
    },
    listStyle:{
        fontSize:30,
        textAlign:"center",
        fontFamily:"josefinSans",
             // color:"blue",
        //letterSpacing:2,
        textShadowOffset: {width:-3 ,height:4},
        textShadowRadius:10,
        textShadowColor:"rgba(0,0,0,0.75)",  
        fontStyle:"italic",
        // textTransform:"lowercase",
        fontVariant:['small-caps'],
        // paddingTop:10,
        
      
    },
    para:{
        fontSize:20,
        padding:30,
      
    },
    listStyle2:{
        fontSize:40,
        // padding:50,
      
    },

    imageStyle:{
        width:"100%",
        // height:undefined,
        // aspectRatio:1,
        height:300,
    },
});
  

export default NCard;