import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
const FlatListDemo = () => {
    //1st method 
    //const names = [
    // {
    //     key:"1",
    //     name:"Syed", 
    // },
    // {
    //     key:"2",
    //     name:"Mubashir", 
    // },
    // {
    //     key:"3",
    //     name:"Ali", 
    // },
    // {
    //     key:"4",
    //     name:"Shah", 
    // },
    // {
    //     key:"5",
    //     name:"Syed", 
    // },


    //2nd method
    const names = [
        {
            //always in strings
            index:"1",
            name:"Syed", 
        },
        {
            index:2,
            name:"Mubashir", 
        },
        {
            index:"3",
            name:"Ali", 
        },
        {
            index:"4",
            name:"Shah", 
        },
        {
            index:"5",
            name:"Shah1", 
        },
        {
            index:"6",
            name:"Syed", 
        },
        {
            index:"7",
            name:"Mansoor", 
        },
        
    
];

return ( <FlatList style = {styles.listStyle} keyExtractor={(key) => {
    return key.index;
}}
//if we remove horizontal it move vertically
horizontal
inverted
//anticlock wise


//Removing scrollbar
showsHorizontalScrollIndicator={false}

//Show no of columns
//numColumns={4}

data={names} renderItem={(element) => {
    //if we find data in console we need to define item and var in console
    console.log(element.item.name); 
    return <Text style = {styles.textStyle}> {element.item.name} </Text>    
    }}
    />
    )};

//renderitem is maping and FlatList is a func we define in react-native
/*return ( <FlatList data={names} renderItem={(element) => {
//if we find data in console we need to define item and var in console
console.log(element.item.name); 
return <Text style = {styles.textStyle}> {element.item.name} </Text>    
}}
/>
)};*/

const styles = StyleSheet.create({
    textStyle:{
        padding:20,
        fontSize:"40px",
        backgroundColor:"pink",
        margin:30,
        color:"white",
        borderRadius:"20px",
    },
    listStyle:{
        textAlign:"center",
       margin:20,
       padding:10,
    },
});

export default FlatListDemo;
