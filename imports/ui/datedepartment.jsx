import React, { Component } from 'react';
 import Blaze from 'meteor/gadicc:blaze-react-component';
import Task from './Task.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {createContainer} from 'meteor/react-meteor-data';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



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

//import react-highcharts from 'react-highcharts';
const styles = {
  customWidth: {
    width: '10vw',
  },
};

// App component - represents the whole app

export default class DateDepartment extends Component {



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

/*
 componentDidMount() {


    }
*/
constructor(props) {
   super(props);
   //this.handleChange = this.handleChange.bind(this);


   this.state = { data: false};

 }


componentWillMount() {

console.log("This is the data in component will mount"+this.state.data)






      console.log('Component WILL MOUNT!')
   }

   handleClickMenu() {
console.log("clicked the handle click")
  setTimeout(function() {
FlowRouter.go('/graphmenu')
},500)

    }




 componentWillUnmount() {

 }



  /*<Select
          floatingLabelText="Department"

          value={this.props.value}
          onChange={this.props.handleChangeDepartment}
          style={{ width:'20vw'}}
          className="department"
        >
          <MenuItem value={"datacom/packing"} primaryText="Datacom/Packing" />
          <MenuItem value={"manual/scd/wiu"} primaryText="Manual/SCD/WIU" />
          <MenuItem value={"manualboxes"} primaryText="Manual Boxes" />
          <MenuItem value={"metals"} primaryText="Metals" />
          <MenuItem value={"raceway"} primaryText="Raceway" />
          <MenuItem value={"autoboxes"} primaryText="Auto boxes" />
          <MenuItem value={"husky"} primaryText="Husky" />
          <MenuItem value={"injection"} primaryText="Injection" />
        </Select>*/

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
/*
         selectionRenderer = (value) => {
            switch (value.length) {
              case 0:
                return '';
              case 1:
                return value[0];
              default:
                return `${value.length} items selected`;
            }
          }
*/
        /* <Select
                 floatingLabelText="Department"

                 value={values}
                 onChange={this.props.handleChangeDepartment}
                 style={{ width:'20vw'}}
                 className="department"
               >
                 <MenuItem value={"datacom/packing"} primaryText="Datacom/Packing" />
                 <MenuItem value={"manual/scd/wiu"} primaryText="Manual/SCD/WIU" />
                 <MenuItem value={"manualboxes"} primaryText="Manual Boxes" />
                 <MenuItem value={"metals"} primaryText="Metals" />
                 <MenuItem value={"raceway"} primaryText="Raceway" />
                 <MenuItem value={"autoboxes"} primaryText="Auto boxes" />
                 <MenuItem value={"husky"} primaryText="Husky" />
                 <MenuItem value={"injection"} primaryText="Injection" />
               </Select>*/


  render() {

const {value} = this.props;




    return (
<MuiThemeProvider>
<div>


  <div className="center " >
    <SelectField
        floatingLabelText="Department"
          className="department"
          style={{ width:'20vw'}}
           multiple={true}

           value={value}
           onChange={this.props.handleChangeDepartment}


         >
           {this.menuItems(value)}
         </SelectField>




  </div>
  <div className="center " >
             <DatePicker style={{display: 'inline-block'}} textFieldStyle={{ width:'10vw'}}  hintText="Start" defaultDate={this.props.minDate}
                onChange={this.props.handleChangeMinDate}/>
{' '}

         <DatePicker style={{display: 'inline-block'}} textFieldStyle ={{ width:'10vw'}} hintText="End" defaultDate={this.props.maxDate}
            onChange={this.props.handleChangeMaxDate}/>
</div>

<div className="center">
  <RaisedButton style={{ width:'10vw'}} label="Menu" className="buttonsize menu" primary={true} onClick={this.handleClickMenu}/>

{' '}
<RaisedButton style={{width:'10vw'}} label="Print" className="buttonsize print" primary={true} onClick={this.props.handleClickPrint}/>

</div>

</div>
</MuiThemeProvider>
    );



  }
}
