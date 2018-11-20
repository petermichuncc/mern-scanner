import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';
 import DatePicker from 'material-ui/DatePicker';
 import "../../css/mdb.css"

  import "../../css/digitalplantoactual.css"
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  //import { browserHistory } from 'react-router';
  import {browserHistory,withRouter} from "react-router-dom"
  import {Redirect, router } from 'react-router'
  import PropTypes from 'prop-types';
//import $ from "jquery";
import Keyboard from 'react-virtual-keyboard';
import { connect } from "react-redux";

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
import cookie from "react-cookies";
import Swal from 'sweetalert2'
  import moment from "moment";



//import "../../js/jquery-ui.js"
//import "../../js/jquery.keyboard.extension-all.js"
  //  import Keyboard from 'react-virtual-keyboard';
  //import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

    //  import keyboard from 'virtual-keyboard/dist/js/jquery.keyboard.js'
    //  import "../../js/jquery.keyboard.extension-all.js"
        //import 'jquery-ui-bundle'




 //import 'virtual-keyboard/dist/js/jquery.keyboard.js'


//import "../../js/jquery.keyboard.extension-all.js"


  //import keyboard from 'virtual-keyboard'






//import "../../js/jquery.keyboard.extension-all.js"
 //import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

 //import $ from 'jquery.2'
 //import Keyboard from 'react-virtual-keyboard';
 //import keyboard from 'virtual-keyboard'

 //import "../../js/jquery-ui.js"


//import { RaisedButton, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
if (Meteor.isClient) {

//  require('./client-only-file.js');
}
//import 'jquery-ui-bundle'



// App component - represents the whole app









function addNewHour(jobs,shift,serverTimestamp)
{

console.log("Calling add new hour, here is the server timestamp "+serverTimestamp)
      var militaryHour=serverTimestamp.split(":")[0]
console.log("This is the military hour " +militaryHour)
      //hour 1 should be
      if(militaryHour>=7 && militaryHour <24)
      {
        //1 to 17
        console.log("military hour is gte 7 lt 24")
        var serverHour= militaryHour-6
      }
      else if (militaryHour<7)
      {
        //18 to 24
        console.log("military hour is lt 7")
        var serverHour= militaryHour+18

      }
      console.log("this is the hour "+serverHour)
      serverHour=serverHour.toString()







console.log("This is the add new hour server hour "+serverHour+" this is the shift "+shift)
/*  if(serverHour>=8 && shift=="shift 1")
  {
    console.log("server hour is 8 ")
    return 0
  }*/
console.log("Calling the add new hour, here are the jobs "+jobs)
console.log("This is the shift selected "+shift)
//shift is the selected shift
console.log("This is type of keys "+typeof jobs+"this is jobs "+jobs)

/*if(jobs[jobs.length - 1]!=undefined)
{
var hourObject=jobs[jobs.length - 1]
}
else if (jobs[0]!=undefined)
{
  var hourObject=jobs[0]
}*/
try {
if(jobs!=undefined && jobs!=null)
{

  if(jobs[0].hasOwnProperty('shiftId'))
  {
    console.log("This is the shift id in jobs"+jobs[0].shiftId)
      var shiftId=jobs[0].shiftId
  }
  else
  {
    var shiftId=Math.random().toString(36).substr(2, 16)
  }

  console.log("This is the shift id "+shiftId)





  var earnedHour=0.00


var newHour=serverHour
newHour=newHour.toString()



var count=null


        //  console.log("This is the server hour inside the add a new hour if statement "+hour)

          //Therefore I should go ahead and insert a new hour into the database


                console.log("This is the new hour about to insert "+newHour)

        //  jobInsertNewHour(hourObject.partNumber,hourObject.department,hourObject.workcell,hourObject.operator,hourObject.shift,newHour)

    //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
          //go head and push a new object to the array
  //grab the most recent job

console.log("This is the planned cookie "+cookie.load("planned"))
console.log("This is the operator cookie "+cookie.load("operator"))

  var hourObject={
    fieldName:newHour.toString(),
    id:Math.random().toString(36).substr(2, 16),
    hour:null,
    hourEnd:null,
    hourNumber:newHour,
    count:null,
    shiftId:shiftId,
    shiftSelected:cookie.load("shift"),
    shift:cookie.load("shift"),
    date:serverHour,
    timestamp:serverTimestamp,
    actual:null,
    planned:cookie.load("planned"),
    plannedCumulative:null,
    actualCumulative:0,
    earnedHour:null,
    cycletime:null,
    minutesLost:null,
    minutesWorked:null,
    minutesRemaining:null,
    calculatedMinutesLost:null,
    downtimeTotal:0,
    lostTimeTotal:0,
    totalMinutesLost:0,
    qualityDefectsTotal : 0,
    lostTime:{},
    downtime:{},
    qualityDefects:{}

  }
  hourObject["operator"]=cookie.load("operator")
  hourObject["partNumber"]=cookie.load("partNumber")
    hourObject["actual"]=null

hourObject["minutesRemaining"]=60

//  jobs.push(hourObject)

//Meteor.call('jobsSaveObject',jobs);

console.log("This is the jobs "+jobs+" typeof "+typeof jobs)

for (var property in jobs) {
  if (jobs.hasOwnProperty(property)) {
    console.log("This is the jobs property "+property)
    // Do things here
  }
}

console.log("This is the hour object operator "+hourObject.operator)
console.log("This is operator in slot 0 of jobs in new hour before adding "+jobs[0].operator)
if(jobs[0].operator=="" && jobs[0].partNumber=="")
{
  console.log("array has a blank job in it ")
jobs.pop()
console.log("This is the array length after remove blank job "+jobs.length)
}
else
{
//There is already a job in the jobs array
console.log("There is already a job in the jobs array ")



}
jobs.push(hourObject)
console.log("This is operator in slot 0 of jobs in new hour after adding"+jobs[0].operator)

//  jobs.shift();
for(var i=0;i<jobs.length;i++)
{
  console.log("This is jobs slot i "+jobs[i]+" and typeof "+typeof jobs[i])
  console.log("This is is the operator "+jobs[i].operator)
}

//var jobs=[]


//jobs.sort((a, b) => parseFloat(a.hourNumber) - parseFloat(b.hourNumber));
console.log("calling jobs save object in no operator")
//Meteor.call('jobsSaveObject',jobs);
return jobs





}
else {
  return null
}
}catch(error) {
  console.error("This is the error in add new hour" +error);
  return null
  // expected output: SyntaxError: unterminated string literal
  // Note - error messages will vary depending on browser
}

}













class KeyboardLoadPartNumberTest extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
//this.handleChangeOperator=this.handleChangeOperator.bind(this);
//this.handleKeyUp = this.handleKeyUp.bind(this);


}
  componentWillMount() {

//import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
console.log("component will mount in keyboard load part number")


  cookie.save('partNumber', null, { path: '/' });

this.setState({partNumber:""});



}


componentDidMount()
{
console.log("keyboard part number component did mount")
var store = require('amplify-store');
var myStoredValues=store()
$(".partNumber").autocomplete({
    source: function (request, response) {
      console.log("This is the request term "+request.term)

        axios.get('/partnumberRetrieve',{
        params: {
          department: myStoredValues.department,
           partNumber: request.term,
            }
      })
      .then(responseAxios => {
         response(responseAxios.data.slice(0, 5));
      //  response(responseAxios.data);
        console.log("part numbers are set here is the value "+responseAxios.data.slice(0, 5) )
      //console.log("here is operators in will mount"+this.state.operators)
        })
        .catch(  (error) => {
const response = error.response
console.log(response.data.errors)
})
     },
     SelectField: function( event, ui ) {
             $(this).val(ui.item.value)

             self.setState({partNumber:ui.item.value});
             var e = jQuery.Event("keyup");
               e.which = 13; // Enter
               $(":focus").trigger(e);
             //$(":focus").getkeyboard().accept()
           /*  $('#tagsname').text(function(){
                 return $(this).text() == '' ? 'You SelectFielded: ' + ui.item.value : $(this).text()+ ', '+ui.item.value;
             });*/


             return false;
         }
}).addAutocomplete({
})


  var self=this





}

partNumberInputChanged = (data) => {
  console.log("this is the input changed for part number"+data)
// this.setState({ operator: data });
var store = require('amplify-store');
var myStoredValues=store()


axios.get('/plannedRetrieve',{
params: {
  workcell: myStoredValues.workcell,
   partNumber: data,
    }
})
.then(responseAxios => {
 //response(responseAxios.data.slice(0, 5));
//  response(responseAxios.data);
console.log("here is the planned value in part number changed "+responseAxios.data)
cookie.save('planned', responseAxios.data, { path: '/' });
//console.log("here is operators in will mount"+this.state.operators)
})
.catch(  (error) => {
const response = error.response
console.log(response.data.errors)
})

this.setState({ partNumber: $(':focus').val() });

cookie.save('partNumber', data, { path: '/' });




}

partNumberInputAccepted = (data) => {

console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());
var store = require('amplify-store');
var myStoredValues=store()
axios.get('/plannedRetrieve',{
params: {
  workcell: myStoredValues.workcell,
   partNumber: data,
    }
})
.then(responseAxios => {
 //response(responseAxios.data.slice(0, 5));
//  response(responseAxios.data);
console.log("here is the planned value in part number accepted "+responseAxios.data)
cookie.save('planned', responseAxios.data, { path: '/' });
//console.log("here is operators in will mount"+this.state.operators)
})
.catch(  (error) => {
const response = error.response
console.log(response.data.errors)
})



cookie.save('partNumber', data, { path: '/' });

}


  render() {


    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }


    return (
<div >

  <Keyboard
    value={this.state.partNumber}
    name='keyboard'
    className="partNumber"
    options={{
      type:"input",
      layout: "qwerty",
      alwaysOpen: false,
      userClosed:false,
      useWheel: false,
      stickyShift: false,

      color: "light",
      updateOnChange: true,
      initialFocus: true,

      appendLocally:true,

      stayOpen:false,
      usePreview:true
    }}
  style={{ width:'10vw'}}
    onChange={this.partNumberInputChanged}
    onAccepted={this.partNumberInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}





class KeyboardLoadOperator extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
//this.handleChangeOperator=this.handleChangeOperator.bind(this);
//this.handleKeyUp = this.handleKeyUp.bind(this);


}
  componentWillMount() {

//import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
console.log("component will mount in graph menu")



  //cookie.save('operator', null, { path: '/' });
this.setState({operator:""});



}


componentDidMount()
{
  $(".operator").addAutocomplete({
  })

  $(".operator").autocomplete({
      source: function (request, response) {
        console.log("This is the request term "+request.term)


        axios.get('/operatorsRetrieve',{
          params: {
               name: request.term,
             }
        })
        .then(responseAxios => {
        response(responseAxios.data.slice(0, 5));
            console.log("operators was set")
              })
    },
    SelectField: function( event, ui ) {
            $(this).val(ui.item.value)

            self.setState({operator:ui.item.value});
            var e = jQuery.Event("keyup");
              e.which = 13; // Enter
              $(":focus").trigger(e);
            //$(":focus").getkeyboard().accept()
          /*  $('#tagsname').text(function(){
                return $(this).text() == '' ? 'You SelectFielded: ' + ui.item.value : $(this).text()+ ', '+ui.item.value;
            });*/


            return false;
        }
  })


  var self=this





}

operatorInputChanged = (data) => {
  console.log("this is the input changed "+data)
// this.setState({ operator: data });






this.setState({ operator: $(':focus').val() });
cookie.save('operator', $(':focus').val(), { path: '/' });
}

operatorInputAccepted = (data) => {

console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());
cookie.save('operator', data, { path: '/' });

//need to set operator in redux here


}


  render() {


    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }


    return (
<div >

  <Keyboard
    value={this.state.operator}
    name='keyboard'
    className="operator"
    options={{
      type:"input",
      layout: "qwerty",
      alwaysOpen: false,
      userClosed:false,
      useWheel: false,
      stickyShift: false,

      color: "light",
      updateOnChange: true,
      initialFocus: true,

      appendLocally:true,

      stayOpen:false,
      usePreview:true
    }}
  style={{ width:'10vw'}}
    onChange={this.operatorInputChanged}
    onAccepted={this.operatorInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}

function mapStateToProps(state){
  console.log("this is state "+state+" type of state "+typeof state+" keys "+Object.keys(state))
//  console.log("This is the employee "+state.get("hour"))
console.log("This is the server hour "+state.get("serverHour").serverHour)
//  console.log("This is the jobs slot 0 in map state to props"+state.get("jobs")[0].hourNumber)

    return {

      jobs:state.get("jobs"),
      serverHour: state.get("serverHour"),
      p2a:state.get("p2a")

    }

}


class NewJobNew extends Component {
  constructor(props) {

     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
this.state = { shift: "1"};
this.state = { count: 0};
     this.state = { data: false};
this.state = { minutesRemaining: 0};
this.state = { operator: null};
this.state ={partNumber: ""}



this.handleChangeOperator=this.handleChangeOperator.bind(this);
this.handleChangePartNumber=this.handleChangePartNumber.bind(this);

}


  componentWillMount() {
    if(this.props.jobs!=undefined)
    {
    console.log("This is the jobs object in new job shift "+this.props.jobs+" this is the id "+this.props.jobs[0].id)
    if(this.props.jobs[0].id!="test")
    {
      console.log("jobs props is loading ")
    }
    else
    {
      console.log("jobs props needs to be loaded")
    }

    }

import 'jquery-ui-bundle'

import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

const date = new Date();

   date.setFullYear(date.getFullYear());
//   date.setHours(0, 0, 0, 0);
   this.setState({date:date});
   cookie.save('date',date, { path: '/' });

axios.get('/currentShift',{})
  .then(response => {
    // console.log("This is the department before calling config "+this.state.value)
  this.setState({shift:response.data});
  //this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });

  axios.get('/shiftRetrieve',{
   params: { }
    })
   .then(response => {
     console.log("this is the shift retrieve data "+response.data)
    // that.setState({ jobs: response.data})
    cookie.save('shift', response.data, { path: '/' });

   })
   .catch(error => {
   console.log(error);
   });



//import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
//this.refreshPartNumber()

//need jquery ui before extension loads


//import "../../js/jquery.keyb

//jquery.keyboard.extension-all.js not working when page doesn't start


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
var store = require('amplify-store');
var myStoredValues=store()

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
var store = require('amplify-store');
var myStoredValues=store()

     if(myStoredValues.workcell!=undefined)
     {
       this.setState({workcell:myStoredValues.workcell});

     }
     else {


       this.setState({workcell:'1001'});


     }




     if(cookie.load("shift")!=undefined)
     {
       this.setState({shift:cookie.load("shift")});

     }
     else {


       this.setState({shift:'shift 1'});


     }







}

componentDidMount(){








console.log("component did mount")








var self=this





/*

$(".operator")
   .addAutocomplete({
})

 $(".partNumber")

    .addAutocomplete({


 })



   $(".partNumber").autocomplete({
       source: function (request, response) {
         console.log("This is the request term "+request.term)
           axios.get('/partnumberRetrieve',{
           params: {
             department: Session.get("department"),
              partNumber: request.term,
               }
         })
         .then(responseAxios => {
            response(responseAxios.data.slice(0, 5));
         //  response(responseAxios.data);
           console.log("operators was set")
         //console.log("here is operators in will mount"+this.state.operators)
           })
        },
        SelectField: function( event, ui ) {
                $(this).val(ui.item.value)

                self.setState({partNumber:ui.item.value});
                var e = jQuery.Event("keyup");
                  e.which = 13; // Enter
                  $(":focus").trigger(e);
                //$(":focus").getkeyboard().accept()


                return false;
            }
   })

var self=this
  $(".operator").autocomplete({
      source: function (request, response) {
        console.log("This is the request term "+request.term)


        axios.get('/operatorsRetrieve',{
          params: {
               name: request.term,
             }
        })
        .then(responseAxios => {
        response(responseAxios.data.slice(0, 5));
            console.log("operators was set")
              })
    },
    SelectField: function( event, ui ) {
            $(this).val(ui.item.value)

            self.setState({operator:ui.item.value});
            var e = jQuery.Event("keyup");
              e.which = 13; // Enter
              $(":focus").trigger(e);
            //$(":focus").getkeyboard().accept()



            return false;
        }
  })
*/




/*

this.setState({operator:"test new"});
*/



 var self=this



     setTimeout(function() {
     }, 1000)





}

handleChangeOperator(searchText, dataSource, params) {

  console.log("This is the searchText "+searchText)

  this.setState({operatorTyped:searchText});

  }



handleChangeShift = (event, index, value) =>{
  console.log("This is the value SelectFielded "+ value)
  console.log("This is the index "+index)
    this.setState({shift:value});
    cookie.save('shift', value, { path: '/' });

  console.log("This is the state value"+ this.state.shift)

  }

handleChangeDepartment = (event, index, value) =>{


//console.log("jquery SelectFielded text "+$(".department menuItem[value="+value+"]").text())
//console.log("This is the text "+event.target.name)
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


cookie.save('department',value, { path: '/' });


console.log("This is the department value"+ this.state.department)

}

handleChangeOperator(searchText, dataSource, params) {

console.log("This is the searchText "+searchText)

this.setState({operatorTyped:searchText});

}

handleChangePartNumber(searchText, dataSource, params) {

console.log("This is the searchText "+searchText)

this.setState({partNumberTyped:searchText});

}

handleSelectFieldPartNumber = (chosenRequest, index) =>{




  this.setState({partNumber:chosenRequest});

cookie.save('partNumber', chosenRequest, { path: '/' });



//console.log("This is the chosen request state "+this.state.operator)
}

handleSelectFieldOperator = (chosenRequest, index) =>{

console.log("This is the operator before changing "+this.state.operator)

this.setState({operator:chosenRequest});
cookie.save('operator', chosenRequest, { path: '/' });

console.log("This is the chosen request state "+this.state.operator)

}





     back = () => {
          //console.log('this is:', this);
console.log("trying out plan to actual")
          setTimeout(function() {
          context.router.history.push('/plantoactual')
          }, 500);


        /*  setTimeout(function() {
            window.location.href = '/plantoactualshift';

      }, 500);*/


        }



     jobInsert = () => {




       }

       operatorInputChanged = (data) => {
         console.log("this is the input changed "+data)
  // this.setState({ operator: data });

  this.setState({ operator: $(':focus').val() });


 }

 operatorInputAccepted = (data) => {

   console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());

//this.setState({ operator: $(':focus').val() });

 }

/*
 partNumberInputChanged = (data) => {
   console.log("this is the input changed in new job "+data)
// this.setState({ operator: data });
var store = require('amplify-store');
var myStoredValues=store()

this.setState({ partNumber: $(':focus').val() });



}
*/
partNumberInputAccepted = (data) => {

console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());

//this.setState({ operator: $(':focus').val() });

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
/*
 keyboard.interface.keyaction.enter = (base) => {
   // Enter button pressed
   // Accepting content, as an example:
   return this.keyboard.interface.keyaction.accept(base);
 };
*/




  render() {
const { classes } = this.props;
    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       width:'25vw'

    }

    const Back = (props, context) => (

  <RaisedButton label="Back"  primary={true} onClick={() => context.router.history.push('/plantoactual')} />

  );

  Back.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };

  function startJob(props) {
  console.log("calling the start job ")
console.log("This is the jobs "+props.jobs)
console.log("This is the jobs slot 0"+props.jobs[0])
console.log("This is the jobs slot 0 operator "+props.jobs[0].operator)
  console.log("This is the operator "+props.p2a.operator+" part number "+props.p2a.partNumber +" shift "+props.p2a.shift )


//update the operator, part number, and shift if cookie is different than redux variables
//and allow job to insert
//else bring up an alert
console.log("Cookie part number "+cookie.load("partNumber")+" cookie operator "+cookie.load("operator")+" shift "+cookie.load("shift"))
if(cookie.load("partNumber")==props.p2a.partNumber && cookie.load("operator")==props.p2a.operator&& cookie.load("shift")==props.p2a.shift)
{
  console.log("New job is the same as the last entered job ")
//bring up an alert
Swal({title:'Please select a different operator or part number.  The current job is the same as this job.',
animation: false})

}
else
{
  console.log("New job is different than the last entered job ")

  props.dispatch({
                  type: 'UPDATE_OPERATOR',
                  payload: cookie.load("operator")
              });
            props.dispatch({
                              type: 'UPDATE_PARTNUMBER',
                              payload: cookie.load("partNumber")
                          });
                          props.dispatch({
                                          type: 'UPDATE_SHIFT',
                                          payload: cookie.load("shift")
                                      });




    //  var jobs=  addNoOperator(props.jobs,cookie.load("shift"))

    /*  props.dispatch({
              type: 'UPDATE_JOBS_ARRAY',
              payload: jobs
          });
*/



const request = require('superagent/superagent')

request
   .get('/serverTimestamp')
   .type('json')

   .then(res => {
      // res.body, res.headers, res.status
//console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
//  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
//console.log("This is the response body "+ res.body)
console.log("This is the server hour retrieve result "+res.body+" and text "+res.text)
if(res.text!=undefined)
{

console.log("This is the server timestamp "+res.text )

/*
if(props.jobs[0].operator)
{
var store = require('amplify-store');
var myStoredValues=store()


axios.get('/jobInsertShift',{
    params: {
         partnumber: cookie.load("partNumber"),
         department: myStoredValues.department,
         workcell: myStoredValues.workcell,
         operator: cookie.load("operator"),
         shift: cookie.load("shift")


         }
     })
  .then(response => {

  })
  .catch(error => {
    console.log(error);
  })

}
else
{

}
*/




    var newJobs = addNewHour(props.jobs,cookie.load("shift"),res.text)
console.log("This is the new hour operator slot 0 "+newJobs[0].operator)

//Need to update the jobs

props.dispatch({
        type: 'UPDATE_JOBS_ARRAY',
        payload: newJobs
    });
    /*
    var store = require('amplify-store');
    var myStoredValues=store()

Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);
*/
//Meteor.call('jobsSaveObject',newJobs);

}


   })
   .catch(err => {
      // err.message, err.response
      console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
   });















      //update jobs

              // Meteor.call('jobsSaveObject',jobs);









}







     }


  const StartJob = (props, context) => (

  <RaisedButton label="Start"  primary={true} onClick={() =>{ startJob(props); console.log("This is the p2a part number "+props.p2a.partNumber)/*context.router.history.push('/plantoactual');*/ }} />
);

StartJob.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};
    return (

<MuiThemeProvider>
  <div >


<div
  className={classes.pageHeader}

>
  <div className={classes.container}>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form} style={{margin:"0 auto"}}>
            <CardHeader
              color="info"
              signup
              className={classes.cardHeader}
            >
              <h4 className={classes.cardTitle}>New Job</h4>

            </CardHeader>
            <p
              className={`${classes.description} ${classes.textCenter}`}
            >

            </p>
            <CardBody signup>
              <label>
                Operator:
                <KeyboardLoadOperator operator={this.operator}
                  className="operator"
                  onChange={this.operatorInputChanged}
                  onAccepted={this.operatorInputAccepted}
                  jobs={this.props.jobs}
                  dispatch={this.props.dispatch}
                   />

            </label>
              <br/>
            <label>
              Part Number:

              <KeyboardLoadPartNumberTest partNumber={this.partNumber}
                className="partNumber"

                onAccepted={this.partNumberInputAccepted}
                props={this.props}
                jobs={this.props.jobs}
                dispatch={this.props.dispatch}
                 />

              </label>
                      <br/>


                                    <SelectField
                                        floatingLabelText="Workcell"
                                          className="workcells"
                                          tabIndex="7"
                                          style={{ width:'10vw'}}


                                           value={this.state.workcell}
                                           onChange={this.handleChangeWorkcenter}

                                           floatingLabelStyle={{fontSize:"125%"}}
                                           name="workcenter"
                                           disabled={true}
                                         >
                                           {this.menuItems(this.state.workcells)}
                                         </SelectField>
                                         <br/>
                         <SelectField
                                 floatingLabelText="Shift"
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
                               <DatePicker floatingLabelText="Date"
                                 name="date" id="date"
                                 className="datepicker firstdate "  tabIndex="1"
                                 floatingLabelStyle={{fontSize:"125%"}}
                                 onChange={this.handleChangeDate}
                                 defaultDate={this.state.date}

                                 disabled={true}
                                 />

            </CardBody>
            <div className={classes.textCenter}>
              <Back/>
              <StartJob
                props={this.props}
                jobs={this.props.jobs}
                p2a={this.props.p2a}
                dispatch={this.props.dispatch}

                />

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

import { compose } from 'recompose';

//export default connect(mapStateToProps)(NewJobNew) ;
//export default withStyles(loginPageStyle)(NewJobNew);

export default compose(
  connect(mapStateToProps),
  withStyles(loginPageStyle)
)(NewJobNew);
