//Optional
import React from "react";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";



//this is functional component
// function App () {
//   return <h1>Hello World</h1>
//  }

// const Apps = () => {
//   return (
//     <h1 >SAM {3+3}</h1>
//     );
//   };




const App = () => {
  return (
    //we use single tag without section tag in jsx

    //we use className in css
    //in jsx we need to close tag like img
    //use camelcase like onClick
    
  //using Links with simple bootstrap
  <> 
  
<Header title={45}
// title="My Todo List"
 //searchBar={true}
 />
<Todos/>
<Footer/>
    </>

    );
  };


 //How react is actually looking
//this is fat arrow function
// const App = () => {
//  return React.createElement("h1", {}, "Hello World")
// }

export default App;
