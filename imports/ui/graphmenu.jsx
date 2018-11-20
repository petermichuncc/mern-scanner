import React, { Component } from 'react';
 import Blaze from 'meteor/gadicc:blaze-react-component';
import Task from './Task.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import { browserHistory } from 'react-router';
//import { Redirect } from 'react-router'
//import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import "../css/mdb.css"


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

export default class Graphmenu extends Component {

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
 // FlowRouter.go('/firstnew');
 // FlowRouter.reload();
}, 500);
  }


setgoal = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/setgoal';
  //FlowRouter.go('/setgoal');
  //FlowRouter.reload();
}, 500);
  }
//
qualitylevel1 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
     // this.props.history.push('/qualitylevel1');
     window.location.href = '/qualitylevel1';
    //<Redirect to='/qualitylevel1' />
      //browserHistory.push('/qualitylevel1');

  //FlowRouter.go('/qualitylevel1');
  //FlowRouter.reload();
}, 500);
  }

qualitylevel2 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/qualitylevel2';
  //FlowRouter.go('/qualitylevel2');
 // FlowRouter.reload();
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

prodlevel1 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/productivitylevel1';
  //FlowRouter.go('/productivitylevel1');
  //FlowRouter.reload();
}, 500);
  }

prodlevel2 = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/productivitylevel2';
 // FlowRouter.go('/productivitylevel2');
  //FlowRouter.reload();
}, 500);
  }

  efficiency = () => {
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




<div  className="logincontainernew centerdiv" style={{width:"20vw"}}>
<div className="card z-depth-2" >
<div className="card-block center" style={{padding:"1%"}}>
<div className="form-header grey lighten-5">

<h3 className="textblack" style={{color:"black"}} >Graph Menu</h3>

</div>



<RaisedButton label="Data Entry" className="buttonsize" primary={true} onClick={this.dataentry}/>


<br/>
         <br/>
    <RaisedButton label="Set department goal" className="buttonsize setgoal" primary={true} onClick={this.setgoal} />

<br/>
         <br/>
         <RaisedButton label="Quality Level 1" className="buttonsize"  primary={true}  onClick={this.qualitylevel1}/>

<br/>
         <br/>
         <RaisedButton label="Quality Level 2" className="buttonsize"  primary={true}  onClick={this.qualitylevel2}/>

<br/>
         <br/>
         <RaisedButton label="Department Quality" className="buttonsize"  primary={true}  onClick={this.qualitylevel3}/>

<br/>
         <br/>
         <RaisedButton label="Productivity Level 1" className="buttonsize productivitylevel1" primary={true}   onClick={this.prodlevel1}/>

<br/>
         <br/>
         <RaisedButton label="Productivity Level 2" className="buttonsize productivitylevel2" primary={true}  onClick={this.prodlevel2}/>

           <br/>
            <br/>
          <RaisedButton label="(Actual/Planned) Efficiency Graphs" className="buttonsize efficiency" primary={true}  onClick={this.efficiency}/>







        </div>
      </div>
     </div>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.0/js/mdb.js"></script>
     </div>

     </MuiThemeProvider>
    );
  }
}
