
console.log("start page has been loaded")

import React, { Component } from 'react';
//import $ from 'jquery.2'

//require('jquery-ui/themes/base/autocomplete.css')
//require('jquery-ui/ui/widgets/autocomplete')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AutoComplete from 'material-ui/AutoComplete';
 import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';

 import "../../css/mdb.css"
 //import "../../css/keyboard.css"
//import "../../css/jquery-ui.css"
import "../../css/digitalplantoactual.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { browserHistory } from 'react-router';
import {browserHistory,withRouter} from "react-router-dom"
import {Redirect, router } from 'react-router'
import PropTypes from 'prop-types';


import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";


import GridContainer from "/imports/components/Grid/GridContainer.jsx";
import GridItem from "/imports/components/Grid/GridItem.jsx";
import Button from "/imports/components/CustomButtons/Button.jsx";
import Card from "/imports/components/Card/Card.jsx";
import CardBody from "/imports/components/Card/CardBody.jsx";
import CardHeader from "/imports/components/Card/CardHeader.jsx";
import CustomInput from "/imports/components/CustomInput/CustomInput.jsx";

import loginPageStyle from "/imports/assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import { connect } from 'react-redux'

import { instanceOf } from 'prop-types';
//import { withCookies, Cookies } from 'react-cookie';
import cookie from "react-cookies";
  import moment from "moment";

//import '../../ui/digitalplantoactual/test.vue';



  //import 'virtual-keyboard/dist/js/jquery.keyboard.js'
  //import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

//import "../../js/jquery.keyboard.extension-all.js"


//import keyboard from 'virtual-keyboard'



//import $ from 'jquery.2'
//import "../../js/jquery.keyboard.extension-all.js"


//require("./node_modules/virtual-keyboard/dist/js/jquery.keyboard.extension-all.min")
//import "../../js/jquery-ui.js"



console.log("page loaded")

//import Plantoactual from '/imports/ui/digitalplantoactual/plantoactual.jsx';

//import { RaisedButton, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
if (Meteor.isClient) {

//  require('./client-only-file.js');
}


// App component - represents the whole app




class StartNew extends Component {
/*  static propTypes = {
     cookies: instanceOf(Cookies).isRequired
   };*/


  constructor(props) {
     super(props);
/*
const { cookies } = props;
*/
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
this.state = { shift: "1"};
this.state = { count: 0};
     this.state = { data: false};
this.state = { minutesRemaining: 0};
this.state = { operator: null};


this.handleChangeDate = this.handleChangeDate.bind(this);
this.handleChangeOperator=this.handleChangeOperator.bind(this);


}
  componentWillMount() {



console.log("component will mount")

const date = new Date();

   date.setFullYear(date.getFullYear());
//   date.setHours(0, 0, 0, 0);
     Session.setPersistent("date",date)
 this.setState({date:date});
//import "../../js/jquery.keyboard.autocomplete.js"
//var extender = require("./node_modules/virtual-keyboard/dist/js/jquery.keyboard.extension-extender.min.js");


//console.log("This is department session "+Session.get("department") +" this is the typeof "+ typeof Session.get("department"))



axios.get('/currentShift',{})
  .then(response => {
    // console.log("This is the department before calling config "+this.state.value)


  this.setState({shift:response.data});
  this.props.dispatch({
                  type: 'UPDATE_SHIFT',
                  payload: response.data
              });


  //this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });




this.setState({
  department: "datacom"
});
this.props.dispatch({
                type: 'UPDATE_DEPARTMENT',
                payload: "datacom"
            });
this.setState({
  workcells: [
    '1001',
    '1020 db1, db2',
    '1021 bench b,d,e,f',
    '1029 blister a/ blister b'
        ]
});
/*
this.setState({
  operators: ["Lisa Edwards"]
});
*/
var store = require('amplify-store');
var myStoredValues=store()
console.log("This is the department "+myStoredValues.department+" and workcell "+myStoredValues.workcell )
if(myStoredValues.department!=undefined)
{
  this.setState({
    department: myStoredValues.department
  });

  axios.get('/departmentWorkcenters',{
    params: {
         department: myStoredValues.department,

       }

  })
    .then(response => {
      // console.log("This is the department before calling config "+this.state.value)
    this.setState({workcells:response.data});
    //this.configMonthly(response.data)
    })
    .catch(error => {
      console.log(error);
    });



}
else {
  this.setState({
    department: "datacom"
  });

  this.setState({
    workcells: [
      '1001',
      '1020 db1, db2',
      '1021 bench b,d,e,f',
      '1029 blister a/ blister b'
          ]
  });



}


if(myStoredValues.workcell!=undefined)
{
  this.setState({workcell:myStoredValues.workcell});

}
else {


  this.setState({workcell:'1001'});
  this.props.dispatch({
                  type: 'UPDATE_WORKCELL',
                  payload: "1001"
              });

}




if(Session.get("shift")!=undefined)
{
  this.setState({shift:Session.get("shift")});

}
else {


  this.setState({shift:'shift 1'});
  this.props.dispatch({
                  type: 'UPDATE_SHIFT',
                  payload: "shift 1"
              });

}

/*
if(Session.get("date")!=undefined)
{
  this.setState({date:Session.get("date")});

}
else {

  this.setState({date:new Date()});

}
*/



}
componentDidMount(){
console.log("component did mount")











}

handleChangeDepartment = (event, index, value) =>{

//console.log("jquery SelectFielded text "+$(".department menuItem[value="+value+"]").text())
//console.log("This is the text "+event.target.name)
//const { cookies } = this.props;
 //cookies.set('department', value, { path: '/' });
cookie.save('department', value, { path: '/' });

var store = require('amplify-store');
store( "department", value );

axios.get('/departmentWorkcenters',{
  params: {
       department: value,

     }

})
  .then(response => {
    // console.log("This is the department before calling config "+this.state.value)
  this.setState({workcells:response.data});
  //this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });
  this.setState({department:value});
Session.setPersistent("department",value)

this.props.dispatch({
                type: 'UPDATE_DEPARTMENT',
                payload: value
            });

console.log("This is the department value"+ this.state.department)

}

handleChangeShift = (event, index, value) =>{
console.log("This is the value "+ value)
console.log("This is the index "+index)
  this.setState({shift:value});
  this.props.dispatch({
                  type: 'UPDATE_SHIFT',
                  payload: value
              });

Session.setPersistent("shift",value)
console.log("This is the state value"+ this.state.shift)

}



handleChangeDate (nullTest, date) {
console.log("This is the value SelectFielded"+ date)

   this.setState({date:date});

   Session.setPersistent("date",date)

}

menuItems(value) {
   return this.state.workcells.map((title) => (
     <MenuItem
       key={title}
       insetChildren={true}

       value={title}
       primaryText={title}
     />
   ));
 }

 handleChangeWorkcenter = (event, index, value) =>{
   //const { cookies } = this.props;
 console.log("This is the value SelectFielded"+ value)
//cookies.set('workcell', value, { path: '/' });
cookie.save('workcell', value, { path: '/' });

var store = require('amplify-store');
store( "workcell", value );







  this.setState({workcell:value});

  this.props.dispatch({
                  type: 'UPDATE_WORKCELL',
                  payload: value
              });


  Session.setPersistent("workcell",value)
 console.log("This is the state value"+ this.state.workcell)

 }
 handleChangeOperator(searchText, dataSource, params) {

 console.log("This is the searchText in handle change operator"+searchText)

 this.setState({operatorTyped:searchText});

 }

handleSelectFieldOperator = (chosenRequest, index) =>{

console.log("This is the operator before changing "+this.state.operator)

this.setState({operator:chosenRequest});

this.props.dispatch({
                type: 'UPDATE_OPERATOR',
                payload:chosenRequest
            });

Session.setPersistent("operator",chosenRequest)
console.log("This is the chosen request state "+this.state.operator)



}








  next = () => {
       //console.log('this is:', this);
       setTimeout(function() {
        window.location.href = '/plantoactual';
     //FlowRouter.go('/plantoactual');


     FlowRouter.reload();
   }, 500);
     }


     getData(searchText) {
        searchText = searchText.toUpperCase();

        return ["test","Test","new"]
          .filter(x => x.name.startsWith(searchText))
          .map(x => x.name);
      }


      handleClick = () => {
 console.log("Trying the click")
           this.props.history.push('/plantoactual')

       }


  render() {
const { classes } = this.props;
    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width:'25vw'

    }



    const Next = (props, context) => (
    <RaisedButton label="Next" className=" right" primary={true} onClick={() => context.router.history.push('/plantoactual')} />

  );

  Next.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };



    return (

<MuiThemeProvider>
  <div >


{/*<Plantoactual department={this.state.department}/>*/}


<div
  className={classes.pageHeader}

>
  <div className={classes.container} >
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form}   style={{margin:"0 auto"}}>
            <CardHeader
              color="info"
              signup
              className={classes.cardHeader}
            >
              <h4 className={classes.cardTitle}>Login</h4>

            </CardHeader>
            <p
              className={`${classes.description} ${classes.textCenter}`}
            >

            </p>
            <CardBody signup>

              <label>
                Department
                </label>
                <br/>

          <SelectField
    tabIndex="5"
          value={this.state.department}
          onChange={this.handleChangeDepartment}
          style={{ width:'10vw'}}
          className="department"
          floatingLabelStyle={{fontSize:"125%"}}
          >
          <MenuItem value={"datacom"} primaryText="Datacom" />
           <MenuItem value={"packing"} primaryText="Packing" />
             <MenuItem value={"manual"} primaryText="Manual" />
             <MenuItem value={"scd"} primaryText="SCD" />
             <MenuItem value={"manualboxes"} primaryText="Manual Boxes" />
             <MenuItem value={"metals"} primaryText="Metals" />
             <MenuItem value={"raceway"} primaryText="Raceway" />
             <MenuItem value={"wiu"} primaryText="WIU" />
             <MenuItem value={"autoboxes"} primaryText="Autoboxes" />
             <MenuItem value={"husky"} primaryText="Husky" />
          </SelectField>
          <br/>
          <label>
                Workcell
                </label>
                <br/>
          <SelectField

                className="workcells"
                tabIndex="7"
                style={{ width:'10vw'}}


                 value={this.state.workcell}
                 onChange={this.handleChangeWorkcenter}

                 floatingLabelStyle={{fontSize:"125%"}}
                 name="workcenter"
               >
                 {this.menuItems(this.state.workcells)}
               </SelectField>
               <br/>


                 <br/>
                 <label>
                Shift
                </label>
                <br/>
                <SelectField

                        tabIndex="5"
                        value={this.state.shift}
                        onChange={this.handleChangeShift}
                        style={{ width:'10vw'}}
                        className="shift"
                        floatingLabelStyle={{fontSize:"125%"}}
                        name="shift"
                        disabled={true}
                      >
                        <MenuItem value={"shift 1"} primaryText="1" />
                        <MenuItem value={"shift 2"} primaryText="2" />
                        <MenuItem value={"shift 3"} primaryText="3" />

                      </SelectField>
                      <br/>
                      <label>
                Date
                </label>
                <br/>
                      <DatePicker
                        name="date" id="date"
                        className="datepicker firstdate "  tabIndex="1"
                        floatingLabelStyle={{fontSize:"125%"}}
                        onChange={this.handleChangeDate}
                        defaultDate={new Date()}
                        value={this.state.date}
                        disabled={true}
                        />
                        <br/>
          {/* <RaisedButton label="Next" className="right " primary={true} onClick={this.next} />*/}







            </CardBody>
            <div className={classes.textCenter} >

            <RaisedButton label="Next" className=" right" primary={true} onClick={this.handleClick} />
            </div>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  </div>

</div>

</div>

     </MuiThemeProvider>
    );
  }
}


function mapStateToProps(state){
  //console.log("this is state "+state+" type of state "+typeof state+" keys "+Object.keys(state))
  console.log("This is the p2a object from redux "+state.get("p2a")+" these are the keys "+ Object.keys(state.get("p2a")))
    return {

        p2a:state.get("p2a")


    }
}

function mapDispatchToProps(dispatch) { return { dispatch, someActions:bindActionCreators(someActions, dispatch) } }
import { compose } from 'recompose';
export default compose(
  connect(mapStateToProps),
  withStyles(loginPageStyle)

)(StartNew);



//export default withStyles(loginPageStyle)(StartNew);
