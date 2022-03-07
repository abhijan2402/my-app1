// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// let name ="abhishek";
function App() {
  const [mode ,setMode]=useState('light');
  const [alert ,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("dark mode has been enabled","success")
      document.title="TextUtils-Dark mode";


      //the below code which is below is used to change the title again and again automatically :

      // setInterval(()=>{
      //   document.title="TextUtils is Amazing mode";
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtils now";
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      document.title="TextUtils-Light mode";
    }
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert Alert={alert}/>
        <div className="container my-3">
                  <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
         </div>
         

 
    </>
    // <div classNameName="blank">Lovely</div>
  );
}
export default App;
