import React, { Component } from 'react';
 import Blaze from 'meteor/gadicc:blaze-react-component';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Button from '@material-ui/core/Button';
import "../../css/mdb.css"
import "../../css/barcode.css"

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





 dataentry = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/firstnew');
  FlowRouter.reload();
}, 500);
  }


setgoal = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/setgoal');
  FlowRouter.reload();
}, 500);
  }

qualitylevel1 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/qualitylevel1');
  FlowRouter.reload();
}, 500);
  }

qualitylevel2 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/qualitylevel2');
  FlowRouter.reload();
}, 500);
  }

qualitylevel3 = () => {
    //console.log('this is:', this);
    try{
      const { detect } = require('detect-browser');
      const browser = detect();


      if (browser) {
        console.log(browser.name);
        console.log(browser.version);
      }
      console.log("This is the browser name in graph menu "+browser.name)
      if (browser.name=="ie")
      {
          console.log("browser is ie in graph menu")
    alert('Internet Explorer Detected. Please use Chrome or Firefox to view the charts.')



    }
    else {
      console.log("browser isn't ie")
      setTimeout(function() {
    FlowRouter.go('/departmentqualitycombined');
    FlowRouter.reload();
  }, 500);

    }


    }catch(err)
    {


    }



  }

prodlevel1 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/productivitylevel1');
  FlowRouter.reload();
}, 500);
  }

prodlevel2 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
  FlowRouter.go('/productivitylevel2');
  FlowRouter.reload();
}, 500);
  }

  efficiency = () => {
      //console.log('this is:', this);
      setTimeout(function() {
    FlowRouter.go('/efficiencymenu');
    FlowRouter.reload();
  }, 500);
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




  <div className="center" id="repairlog_container">
     <img src="logo.jpg " className="z-depth-3"/><br/><br/>

     <div id="centered_box_blue"  className="z-depth-5" style={{width:"40vw",height:"40vh"}}>

  <span style={{fontWeight: "bold"}}>  Department: Husky  </span>
    <br/>
    <span class="thick">   Test text </span>




     </div>

 </div>
     </div>

     </MuiThemeProvider>
    );
  }
}
