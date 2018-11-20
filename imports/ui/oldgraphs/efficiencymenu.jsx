import React, { Component } from 'react';
 //import Blaze from 'meteor/gadicc:blaze-react-component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
//import 'font-awesome/css/font-awesome.min.css';
//import 'mdbreact/dist/css/mdb.css';
//import { RaisedButton, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from '@material-ui/coreCard';


// App component - represents the whole app

export default class Efficiencygraphs extends Component {

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




operatorGraphs = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/operatorgraphs';
  //FlowRouter.go('/operatorgraphs');
  //FlowRouter.reload();
}, 500);
  }

workcellGraphs = () => {
    //console.log('this is:', this);
    setTimeout(function() {
      window.location.href = '/workcellgraphs';
  //FlowRouter.go('/workcellgraphs');
  //FlowRouter.reload();
}, 500);
  }
  tempVsPerm = () => {
      //console.log('this is:', this);
      setTimeout(function() {
        window.location.href = '/tempvsperm';
    //FlowRouter.go('/tempvsperm');
    //FlowRouter.reload();
  }, 500);

    }

  back = () => {
      //console.log('this is:', this);
      setTimeout(function() {
        window.location.href = '/graphmenu';
   // FlowRouter.go('/graphmenu');
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

<h3 className="textblack" style={{color:"black"}} >Efficiency Menu</h3>
</div>




    <RaisedButton label="Operator graphs" className="buttonsize operator" primary={true} onClick={this.operatorGraphs}/>
<br/>
         <br/>
         <RaisedButton label="Workcell graphs" className="buttonsize workcell" primary={true} onClick={this.workcellGraphs}/>
           <br/>
             <br/>
             <RaisedButton label="Temp Vs Permanent" className="buttonsize workcell" primary={true} onClick={this.tempVsPerm}/>
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
