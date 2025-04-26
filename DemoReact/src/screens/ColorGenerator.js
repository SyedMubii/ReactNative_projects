import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";


const ColorGenerator=() =>{

    const [NewColor,setNewColor] = useState([]);
    const randomColor=() =>{
        const red=Math.floor(Math.random() * 256);
        const blue=Math.floor(Math.random() * 256);
        const pink=Math.floor(Math.random() * 256);
        // const grey=Math.floor(Math.random() * 256);
   

        return `rgb(${red},${blue},${pink})`;
    };

    return(
        <View style={styles.Mc}>
            <TouchableOpacity style={styles.Bs}
            onPress={() => {
                setNewColor([...NewColor,randomColor()]);
            //   Alert.alert(randomColor());
          //  console.log(randomColor());
            }}
            >
            <Text style={styles.Ts}>Generate Color</Text>
            </TouchableOpacity>

            <FlatList
            //removing warning key with Extractor
keyExtractor={(key) => key}
data={NewColor} renderItem={({item}) => {
   
   // console.log(item);
    return (
        
        <View style={styles.Ic}>
           <View style={
                {
                backgroundColor:item,
                borderRadius:5,
                width:"80%",
                height:100,
                marginTop:5,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
        
            }
            }
>
            <Text style={styles.Ts}>
                {item}
            </Text>
            </View>           </View>
    );   
    }}
    />


            
            
        </View>
    );
};


const styles = StyleSheet.create({
    Mc:{
        marginTop:100,

    },
    Bs:{
        backgroundColor:"#00b0ff",
        color:"eee",
        paddingVertical:10,
        paddingHorizontal:15,
        margin:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
    },
    Ts:{
        color:"white",
        textTransform:"uppercase",
        
    },
    Ic:{
        marginVertical:50,
        paddingHorizontal:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        
    },
});


export default ColorGenerator;