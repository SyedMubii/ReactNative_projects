import React from 'react';
import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  CheckBox,
 
} from 'react-native';
import { DataTable } from 'react-native-paper';


const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const App1 = () => {

  const TodoListItem = ({textValue, id, checked, onRemove}) => {
    return (
      <View style={styles.container}>
          ...
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            <Icon name="delete" size={30} color="#e33057" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };


  const [visible, setVisible] = React.useState(false);
  const [Name, setName] = useState(""); 
  const [Favourite_food, setFavourite_food] = useState("");
  const [Age, setAge] = useState("");
  const submit = () => {
   // navigation.navigate("Edit", {myName: `${'Mubii'}`});
console.log(Name,Favourite_food,Age);

  };
  const Edit = () => {
    // navigation.navigate("Edit", {myName: `${'Mubii'}`});
 console.log('Data Editted');
   };
   const Delete = () => {
    // navigation.navigate("Edit", {myName: `${'Mubii'}`});
 console.log('Data Deleted');
   };
  return (
    <View>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() =>  setVisible(false)}>
              <Image
                source={require('../../assets/1.jfif')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={{flexDirection:'row'}}>
                      <TextInput style={styles.textfield}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="  Name"
                      placeholderTextColor="#003f5c"
                      
                       value={Name}
                      onChangeText={(Name) => setName(Name)}
                    />
                    <TextInput
                    style={styles.textfield}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="  Favourite Food"
                      placeholderTextColor="#003f5c"
                      
                       value={Favourite_food}
                      onChangeText={(Favourite_food) => setFavourite_food(Favourite_food)}
                    />
                    <TextInput
                    style={styles.textfield}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="  Age"
                      placeholderTextColor="#003f5c"
                      
                       value={Age}
                      onChangeText={(Age) => setAge(Age)}
                    />

                    </View>
                    <View style={{flexDirection:'row' ,margin:10}}>
      <CheckBox value="Active" />
      <Text style={{}}> Is Active</Text>
       </View>
    
                    <TouchableOpacity  style={{width: 70,margin:10, borderRadius: 10,height: 40,alignItems: "center",justifyContent: "center",backgroundColor: "lightgrey"}} 
                    //onPress={()=> submit()}
                    onPress={() => setVisible(false)}
                    //onPress={() => setVisible(true)} 
                    >
                   <Text style={{color:'white'}}>Submit</Text>
                  </TouchableOpacity>
                 

        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          
        </Text>
      </ModalPoup>
      
      <View style={{flex: 1, justifyContent: 'center', marginTop:'5%',marginLeft:'6%',marginRight:'80%'}}>
      <Button title="Add New +" onPress={() => setVisible(true)} />
      </View>
      <View>
      <DataTable style={{padding:'3%'}}>
      <DataTable.Header style={{backgroundColor: '#DCDCDC'}}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite_food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
            <DataTable.Title>Action</DataTable.Title>
      </DataTable.Header>
    
      <DataTable.Row>
        <DataTable.Cell>{Name}</DataTable.Cell>
        <DataTable.Cell>{Favourite_food}</DataTable.Cell>
        <DataTable.Cell>{Age}</DataTable.Cell>
        <DataTable.Cell><TouchableOpacity
        //onPress={()=> Edit()}
        onPress={() => setVisible(true)} 
        >
        <Image
          source={require('../../assets/edit.png')}
          style={{height: 30, width: 30}}
        />
       
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Delete()}>
        <Image
          source={require('../../assets/trash.jpg')}
          style={{height: 25, width: 35}}
        />
      </TouchableOpacity>
      </DataTable.Cell>
      </DataTable.Row>
    
      </DataTable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
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
  textfield:{
    margin:10,width:'30%',height:35
                      
  }
  
});

export default App1;





//2nd Modal

// import React from "react";
// import { View,Button, Text,Modal, TextInput,TouchableOpacity} from 'react-native'

// class App extends React.Component {
 
 
//   constructor()
//  {
//   super();
//   this.state={
//     show:false
//   }
  
//  }   
//     render() {
//       const Name = "Mubii";
//       const Favourite_food = "Ali";
//       const submit = () => {
//         //navigation.navigate("Edit", {myName: `${'Mubii'}`});
//         console.log(Name,Favourite_food);
//       };
//         return(
          
//             <View style={{flex:1,marginTop:150}}>
//             <Text style={{fontSize:80}}>Open Modal</Text>
//             <Button title="show modal" onPress={()=>{this.setState({show:true})}} />
//             <Modal
//             transparent={true}
//             visible={this.state.show}
//             >
//             <View style={{flex:1,backgroundColor:'#000000aa'}}>
//             <View style={{flex:1,backgroundColor:'#ffffff',margin:150,padding:40,borderRadius:10}}>
//             <TouchableOpacity  style={{
             
//                //padding:20,
             
//               }} 
//         onPress={()=>{this.setState({show:false})}}>
//          <Text style={{textAlign:'right'}}> X</Text>
//         </TouchableOpacity>
//             <Text style={{fontSize:50}}>Modal Open</Text>
//             <TextInput
//             style={{margin:10,width:'40%',height:'15%'}}
//             autoCapitalize="none"
//             autoCorrect={false}
//             placeholder=" Name"
//             placeholderTextColor="#003f5c"
            
//               value={Name}
//             //onChangeText={(Name) => setName(Name)}
//           />
//           <TextInput
//             style={{margin:10,width:'40%',height:'15%'}}
//             autoCapitalize="none"
//             autoCorrect={false}
//             placeholder=" Favourite_food"
//             placeholderTextColor="#003f5c"
            
//               value={Favourite_food}
//             //onChangeText={(Favourite_food) => setName(Favourite_food)}
//           />
//           <TouchableOpacity  style={{width: 70,margin:10, borderRadius: 10,height: 40,alignItems: "center",justifyContent: "center",backgroundColor: "lightgrey"}} 
//           onPress={()=> submit()}>
//          <Text style={{color:'white'}}>Submit</Text>
//         </TouchableOpacity>
        
         

//             </View>
//             </View>
//             </Modal>
//             </View>
//         )
//     }
// } 
// // <Button title="Close modal" onPress={()=>{this.setState({show:false})}} />

// export default App;