import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";


const HookEffect=() =>{

//Using use state
const [My1, setMy1]=useState();
const [isLoaded, setIsLoaded]=useState(true);


    const getUserdata = async() =>{
        try{
          const response = await fetch(
           //Change Path
            // "https://thapatechnical.github.io/userapi/users.json"
            );
          const myData = await response.json();
          setMy1(myData);
          //if we find data then false
          setIsLoaded(true);
          console.log(myData);

        }catch (error) {
            console.log(error);
        }
    };
    useEffect=(() => {
        getUserdata();
    }, []);

    return(
        <View>

            {isLoaded ?
             (<View>
                <ActivityIndicator size="large" color="#0000ff" /></View>)
            : ( <View>

             <Text style={styles.listStyle2}>
                List Of Students
            </Text>
<FlatList style = {styles.listStyle}
    data={My1}
    renderItem={({item}) =>
   { return ( 
    <View>
    <View style={styles.textStyle}>
            <Image style={styles.imageStyle}
            resizeMode="cover"
            source={{uri:item.property
                //"https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
            }}
            />
    </View>
    <View>
    <Text style={styles.listStyle2}>
                Bio Data
            </Text>
    <Text style={styles.listStyle2}>{item.property < 10 ? `#0${item.property}`:`#${item.property}`}</Text>
    </View>
    <View>
    <Text style={styles.listStyle2}>Name:{item.property1}</Text>
    <Text style={styles.listStyle2}>Email{item.property2}</Text>
    <Text style={styles.listStyle2}>Mobile:{item.property3}</Text>
    </View>
    </View>

);
}}
/>
</View>
)
            }

        </View>
    
    );
};

const styles=StyleSheet.create({

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

});

export default HookEffect;
