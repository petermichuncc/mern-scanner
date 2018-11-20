import React, { Component } from 'react';
 import Blaze from 'meteor/gadicc:blaze-react-component';
import Task from './Task.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

const titles = [
  'Datacom,Packing',
  'Manual,SCD,WIU',
  'Manual Boxes',
  'Metals',
  'Raceway',
  'Auto boxes',
  'Husky',
  'Injection'
]

// App component - represents the whole app

export default class SetGoal extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);

     this.state = { value: "datacom"};
          this.state = { textFieldValue: ""};

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

  handleChangeDepartment = (event, index, value) =>{
console.log("this is the value selected "+value)
    this.setState({value});

  //console.log("This is the state value"+ this.state.value)

  }

  handleTextFieldChange=(event, index, value) =>{

  console.log("This is the value "+event.target.value)

  this.setState({
      textFieldValue: event.target.value

  });

  /*
          this.setState({
              textFieldValue: e.target.value

          });
          */
      }

  setgoal = () => {

    console.log("This is the goal "+ this.state.textFieldValue+" this is the department "+this.state.value)
    axios.get('/goalInsert',{
      params: {
           department: this.state.value,
           goal:this.state.textFieldValue
           }

    })
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    });
    //Meteor.call('goalInsert', this.state.value, this.state.textFieldValue)

    }
    menu = () => {
        //console.log('this is:', this);
        setTimeout(function() {
          window.location.href = '/graphmenu';
     // FlowRouter.go('/graphmenu');
      FlowRouter.reload();
    }, 500);
      }



    menuItems(value) {
       return titles.map((title) => (
         <MenuItem
           key={title}
           insetChildren={true}
           checked={value && value.indexOf(title) > -1}
           value={title}
           primaryText={title}
         />
       ));
     }

  render() {
const {value} = this.state;
const centerDiv= {
   position: 'fixed',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)'
}
    return (

<MuiThemeProvider>
  <div style={centerDiv}>




  <div style={{ margin: '0 auto',  width:'25vw', paddingBottom: '5vh',paddingTop: '5vh'}} className="logincontainernew centerdiv">
    <div className="card z-depth-2" style={{  border: "0", borderRadius: "0.25rem", fontWeight: "400"}}>
    <div className="card-block center">
    <div className="card z-depth-3 grey lighten-5" style={{ width:'23vw',
    zIndex:"1", height:"10vh", margin:"0 auto", marginTop:"2vh", position:"relative", top:"-7vh" }} >

  <h3 className="textblack" >Set Departmental Goal</h3>
  </div>


<label>Please enter a department goal</label>
   <br/>
       <TextField
       value={this.state.textFieldValue}
       onChange={this.handleTextFieldChange}
         className="goal"

    />


<br/>


     <label>Please select a department</label>
       <SelectField
           floatingLabelText="Department"
             className="department"
             style={{ width:'18vw'}}
              multiple={true}

              value={value}
              onChange={this.handleChangeDepartment}


            >
              {this.menuItems(value)}
            </SelectField>
<br/>
      <RaisedButton label="Menu" className="buttonsize menu" primary={true}  onClick={this.menu}/>
<br/>
         <br/>
            <RaisedButton label="Save" className="buttonsize save" primary={true}  onClick={this.setgoal}/>








        </div>
      </div>
     </div>


     </div>
     </MuiThemeProvider>
    );
  }
}
