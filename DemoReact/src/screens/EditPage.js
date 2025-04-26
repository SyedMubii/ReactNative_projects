import React from 'react';
import { View, Text , Button, StyleSheet} from 'react-native';
//import TableExample from './crud';
import { DataTable} from 'react-native-paper';
import Card1 from '../Components/Card';
import { TouchableOpacity } from 'react-native-web';

const EditData = ({route,navigation}) => {
    const {myName} = route.params;
    const ali = () => {
        console.log('Ali ');
          
        //navigation.navigate("Home", {myName: 'Mubii'});
        	 
    };

    
    return(
        <View>
            <Text style={styles.container1}>
                Welcome  
                {' '}{myName}
            </Text>

           <TouchableOpacity
    onPress={()=> ali()}
     style={styles.button2}><Text style={{color:'white'}}>Add New +</Text></TouchableOpacity>
    
             <Card1 />
   
    

            <Button title="Go Back"
            onPress={ () => navigation.goBack()}/>
        </View>
    );
};


// <DataTable style={styles.container}>
            // <DataTable.Header style={styles.tableHeader}>
            //     <DataTable.Title>Name</DataTable.Title>
            //     <DataTable.Title>Favourite Food</DataTable.Title>
            //     <DataTable.Title>Age</DataTable.Title>
            // </DataTable.Header>
        
            // <DataTable.Row>
            //     <DataTable.Cell>Syed Mubashir Ali</DataTable.Cell>
            //     <DataTable.Cell>Biryani</DataTable.Cell>
            //     <DataTable.Cell>23</DataTable.Cell>
                
            // </DataTable.Row>
        
            // <DataTable.Row>
            //     <DataTable.Cell>Abdul Samad</DataTable.Cell>
            //     <DataTable.Cell>Biryani</DataTable.Cell>
            //     <DataTable.Cell>26</DataTable.Cell>
                
            //   </DataTable.Row>
            // <DataTable.Row>
            //     <DataTable.Cell>Syed Azhar Ali</DataTable.Cell>
            //     <DataTable.Cell>Brownie</DataTable.Cell>
            //     <DataTable.Cell>20</DataTable.Cell>
               
            //   </DataTable.Row>
            // <DataTable.Row>
            //     <DataTable.Cell>Raman Kumar</DataTable.Cell>
            //     <DataTable.Cell>Pizza</DataTable.Cell>
            //     <DataTable.Cell>24</DataTable.Cell>

            //   </DataTable.Row>
            // </DataTable>


export default EditData;


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    container1: {
        textAlign:'center',
        paddingTop:10,
        backgroundColor:'black',
        fontWeight:'bold',
        color:'white'
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
        
    },
    button2 :{
        //borderWidth: 1,
		width:100,
		padding:10,
        marginTop:10,
marginLeft:40,
		color:'white',
		borderRadius:10,	
        backgroundColor:'red',
        //marginLeft:'35%'
        
    },
    button1 :{
        borderWidth: 1,
        backgroundColor:'lightgrey',
        borderRadius:17,
    
        
        //marginLeft:'35%'
        
    },
    loginBtn: {
        width: 50,
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        //marginTop: 40,
        backgroundColor: "lightgrey",
      },
    
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        //marginLeft: 20,
      },
    
    });

