import React from "react";
import { Text ,View, StyleSheet,Alert } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { TouchableOpacity } from "react-native-web";

const Card1 = (navigation) => {
	const ali = () => {
		 console.log('Shah ');
		   

		 // navigation.navigate("Cd", {myName: ' '});
<Card1 />		 
	 };
 
	return(
		
		<Card style={Styles.container}>
		<Card.Content>
			<Title>Card Design</Title>
		</Card.Content>
		<Card.Cover source={{ uri:'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} />
	<Card.Content>
		<Paragraph>Information Technology Student Portal Card</Paragraph>
		</Card.Content>
		<Card.Actions>
		
		<TouchableOpacity
		onPress={()=> ali()}
		 style={Styles.button1}><Text>Submit</Text></TouchableOpacity>
		</Card.Actions>
	</Card>		
	)
}

export default Card1;

const Styles = StyleSheet.create({
	
    container :{
		margin:37,
        borderRadius: 20,
        borderColor:'lightgrey',
        width:'25%',
        borderWidth:10
	},
    button1 :{
        //borderWidth: 1,
		width:70,
		padding:10,
		color:'white',
		borderRadius:10,	
        backgroundColor:'lightgrey',
        //marginLeft:'35%'
        
    }
})


