import React, { Component } from 'react';
 import Blaze from 'meteor/gadicc:blaze-react-component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';



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

export default class Efficiencymenu extends Component {

  componentWillMount() {
console.log("component will mount in graph menu")







}






  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }


 dataentry = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/firstnew';
  //FlowRouter.go('/firstnew');
  //FlowRouter.reload();
}, 500);
  }


setgoal = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/setgoal';
 // FlowRouter.go('/setgoal');
  //FlowRouter.reload();
}, 500);
  }

qualitylevel1 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/qualitylevel1';
  //FlowRouter.go('/qualitylevel1');
  //FlowRouter.reload();
}, 500);
  }

qualitylevel2 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/qualitylevel2';
  //FlowRouter.go('/qualitylevel2');
  //FlowRouter.reload();
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
        window.location.href = '/departmentqualitycombined';  
    //FlowRouter.go('/departmentqualitycombined');
    //FlowRouter.reload();
  }, 500);

    }


    }catch(err)
    {


    }



  }

departments = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/departments';   
  //FlowRouter.go('/departments');
  //FlowRouter.reload();
}, 500);
  }

workcellShifts = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/workcellshifts';   
  //FlowRouter.go('/workcellshifts');
  //FlowRouter.reload();
}, 500);
  }

  back = () => {
      //console.log('this is:', this);
      setTimeout(function() {
        window.location.href = '/efficiencymenu';   
    //FlowRouter.go('/efficiencymenu');
    //FlowRouter.reload();
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




  <div  className="logincontainernew centerdiv">
  <div className="card z-depth-2" >
  <div className="card-block center">
  <div className="form-header grey lighten-5"  >

<h3 className="textblack" style={{color:"black"}} >Workcell Graphs</h3>
</div>



    <RaisedButton label="View Workcell Shifts" className="buttonsize operator" primary={true} onClick={this.workcellShifts}/>
<br/>
         <br/>
         <RaisedButton label="Compare All Workcells" className="buttonsize workcell" primary={true} onClick={this.departments}/>
           <br/>
                    <br/>
                    <RaisedButton label="Back" className="buttonsize back" primary={true} onClick={this.back}/>






        </div>
      </div>
     </div>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.0/js/mdb.js"></script>
     </div>
     </MuiThemeProvider>
    );
  }
}
