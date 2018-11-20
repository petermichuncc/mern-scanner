import React, { Component } from 'react';


import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Button from '@material-ui/core/Button';


 /* <style>
.logincontainernew
{

  margin: 0 auto;
  width:25vw;
  padding-bottom: 5vh;
  padding-top: 5vh;


}


 .menusize
 {
  width: 80vw;

 }
 .buttonsize
 {
  width: 17vw;
  height: 4vh;

font-size: .9vw;
font-weight: bold;
 }

.centerdiv {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}


  </style>*/

// App component - represents the whole app

export default class Husky extends Component {

  componentWillMount() {
console.log("component will mount in graph menu")







}




  render() {

    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)'
    }


    return (

<MuiThemeProvider>

<div style={centerDiv}>

Test test

{/*
  <div className="center" id="repairlog_container">
     <img src="logo.jpg " className="z-depth-3"/><br/><br/>

     <div id="centered_box_blue"  className="z-depth-5" style={{width:"40vw",height:"40vh"}}>

  <span style={{fontWeight: "bold"}}>  Department: Husky  </span>
    <br/>
    <span className="thick">   Test text </span>




     </div>

 </div> */}
     </div>

     </MuiThemeProvider>
    );
  }
}
