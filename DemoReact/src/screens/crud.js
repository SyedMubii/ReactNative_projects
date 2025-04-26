import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DataTable,Button } from 'react-native-paper';

const TableExample = ({ navigation }) => {
    const submit = () => {
       // console.log('Edit')
         navigation.navigate("Home", {myName: 'Mubii'});
        
    };

    const ali = () => {
       console.log('Mubii ');
         
      //navigation.navigate("Home", {myName: 'Mubii'});
          
   };
return (

<View>
<TouchableOpacity
  onPress={()=> ali()}
   style={styles.button2}><Text style={{color:'white'}}>Add New +</Text></TouchableOpacity>
  

	<DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Name</DataTable.Title>
		<DataTable.Title>Favourite Food</DataTable.Title>
		<DataTable.Title>Age</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
	</DataTable.Header>

	<DataTable.Row>
		<DataTable.Cell>Syed Mubashir Ali</DataTable.Cell>
		<DataTable.Cell>Biryani</DataTable.Cell>
		<DataTable.Cell>23</DataTable.Cell>
        <DataTable.Cell><TouchableOpacity  style={styles.loginBtn}
          onPress={()=> submit()}>
         <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity></DataTable.Cell>
	</DataTable.Row>

	<DataTable.Row>
		<DataTable.Cell>Abdul Samad</DataTable.Cell>
		<DataTable.Cell>Biryani</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
        <DataTable.Cell><TouchableOpacity  style={styles.loginBtn}
        onPress={()=> submit()}>
       <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity></DataTable.Cell>
      </DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Syed Azhar Ali</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
        <DataTable.Cell><TouchableOpacity  style={styles.loginBtn}
        onPress={()=> submit()}>
       <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity></DataTable.Cell>
      </DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Raman Kumar</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
        <DataTable.Cell><TouchableOpacity  style={styles.loginBtn}
        onPress={()=> submit()}>
       <Text style={styles.loginText}>Edit</Text>
      </TouchableOpacity></DataTable.Cell>
      </DataTable.Row>
	</DataTable>
  </View>
);
};

export default TableExample;

const styles = StyleSheet.create({
container: {
	padding: 15,
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
