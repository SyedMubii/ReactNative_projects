import React from 'react';
import { View, Text , Button, TouchableOpacity} from 'react-native';
import TableExample from './crud';
import { DataTable} from 'react-native-paper';
//import Card1 from '../Components/Card';
//import EditData from "./src/screens/EditPage";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";


const MyHome = ({route,navigation}) => {
    const {myName} = route.params;
    const submit = () => {
        navigation.navigate("Edit", {myName: `${'Mubii'}`});

      };
    //const Stack = createNativeStackNavigator();
    return(
       

       <View style={{backgroundColor:'#lightblue'}}>
            <Text style={{textAlign:'center',paddingTop:5}}>
            Welcome  
            {' '}{myName}
            </Text>
            <TableExample />
        <DataTable.Row>
		<DataTable.Cell>Syed Mubashir Ali</DataTable.Cell>
		<DataTable.Cell>Biryani</DataTable.Cell>
		<DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell>
        <TouchableOpacity style={{backgroundColor:'lightgrey',width:50,height:40,padding:10,borderRadius:10}}
        onPress={() => submit()}>
         <Text>Edit</Text>
        </TouchableOpacity>
        </DataTable.Cell>
	</DataTable.Row>
         
            <Button title="Go Back"
            onPress={ () => navigation.goBack()}/>
        </View>
        
        
    );
};

export default MyHome;

