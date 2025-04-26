import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  // CheckBox,
  isSelected,
  TouchableOpacity,
  
} from "react-native";

import { CheckBox } from "react-native-web"; 

const Function1 = ({ navigation }) => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const submit = () => {
   
    if(email==="mubii" && password==="ali"){
      //Alert.alert(`Thank You ${email}`);
      // console.log(email,password);
      navigation.navigate("Home", {myName: `${email}`});
    }
    else{
      console.log('email is in correct');
      //navigation.navigate("Home", {myName: `${email}`});

    // Alert.alert('Email and Password is Incorrect');
    }
  };
  
  // console.log(email,password);
  const [agree, setAgree] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/img1.jpeg")} />
     <Image style={styles.image} source={{uri:"https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",}}/>
    */}
      
     
     <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          
            value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.container}>
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={agree}
        onValueChange={ () => 
          setAgree(!agree)}
        color={agree ? "#4630EB" : undefined}
        style={styles.checkbox}
        />
      <Text style={styles.label}>Do you like React Native?</Text>
       </View>
    
   
</View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
      style={[styles.loginBtn,
      
      {
        backgroundColor:agree ? "#4630EB" : "lightgrey"},

      ]}
      disabeled={!agree}

        onPress={()=> submit()}>
        
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

});

export default Function1; 




