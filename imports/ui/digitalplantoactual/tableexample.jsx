import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';
 import DatePicker from 'material-ui/DatePicker';
 import TextField from 'material-ui/TextField';

import "../../css/mdb.css"
import "../../css/digitalplantoactual.css"
//import "../../css/materialize.css"

import {
  TableHeader,
  TableHeaderColumn,

  TableRowColumn,
} from 'material-ui/Table';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
//import Modal from '@material-ui/core/Modal';

import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'
import FlatButton from 'material-ui/FlatButton';
import ContentSort from 'material-ui/SvgIcon';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { browserHistory } from 'react-router';
import {browserHistory,withRouter} from "react-router-dom"

import {Redirect, router } from 'react-router'
import PropTypes from 'prop-types';
import Keyboard from 'react-virtual-keyboard';
import { connect } from 'react-redux'
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames'
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Tooltip from '@material-ui/core/Tooltip';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "/imports/components/Grid/GridContainer.jsx";
import GridItem from "/imports/components/Grid/GridItem.jsx";
import NavPills from "/imports/components/NavPills/NavPills.jsx";
import pillsStyle from "/imports/assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import cookie from 'react-cookies'
  import moment from "moment";


  function addNoOperator(jobs,shift)
  {
  console.log("Calling the add no operator, here are the jobs "+jobs)
  console.log("This is the shift selected "+shift)
  //shift is the selected shift




  //console.log("This is the hour "+jobs[jobs.length - 1].hourNumber+" does next hour exist "+jobs[jobs.length - 1].hasOwnProperty(newHour))



  console.log("This is jobs.length "+jobs.length+" this is the id "+jobs[0].id)


        if(jobs.length>=1 && jobs[0].id!="test")
          {
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
            newHour=newHour.toString()
            var count=jobs[jobs.length - 1].count
          //  console.log("This is the server hour inside the add a new hour if statement "+hour)
            console.log("after hour pop up is true and hour is lte current hour "+jobs[jobs.length - 1].hourNumber )
            //Therefore I should go ahead and insert a new hour into the database
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
        count=count+1
                  console.log("This is the new hour about to insert "+newHour)
          //  jobInsertNewHour(jobs[jobs.length - 1].partNumber,jobs[jobs.length - 1].department,jobs[jobs.length - 1].workcell,jobs[jobs.length - 1].operator,jobs[jobs.length - 1].shift,newHour)

      //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
            //go head and push a new object to the array
    //grab the most recent job
    var priorObject=jobs[jobs.length - 1]


    var hourObject={
      fieldName:newHour.toString(),
      id:Math.random().toString(36).substr(2, 16),
      hour:Number(priorObject.hour)+1,
      hourEnd:Number(priorObject.hourEnd)+1,
      hourNumber:newHour,
      count:priorObject.count+1,
      operator:"No Operator",
      partNumber:priorObject.partNumber,
      department:priorObject.department,
      workcell:priorObject.workcell,
      shiftId:priorObject.shiftId,
      shiftSelected:priorObject.shiftSelected,
      shift:priorObject.shift,
      date:priorObject.date,
      timestamp:priorObject.timestamp,
      actual:null,
      planned:priorObject.planned,
      plannedCumulative:null,
      actualCumulative:null,
      earnedHour:null,
      cycletime:priorObject.cycletime,
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
    Object.assign(hourObject["lostTime"],{"NO OPERATOR":"60"})
    Object.assign(hourObject,{"calculatedMinutesLost":"60"})
    Object.assign(hourObject,{"minutesRemaining":0})
    jobs.push(hourObject)

  }
  else
  {

  if(shift=="shift 1")
  {
    var newHour="1"
    var hour=7
    var hourEnd=8
  }
  else if(shift=="shift 2")
  {
    var newHour="9"
    var hour=15
    var hourEnd=16
  }
  else if(shift=="shift 3")
  {
    var newHour="17"
    var hour=23
    var hourEnd=24
  }
  console.log(" this is the new hour in empty array"+newHour)

  var store = require('amplify-store');
  var myStoredValues=store()




      var hourObject={
        fieldName:newHour.toString(),
        id:Math.random().toString(36).substr(2, 16),

        hourNumber:newHour,
        hour:hour,
        hourEnd:hourEnd,
        count:null,
        operator:"No Operator",
        partNumber:"",
        department: myStoredValues.department,
        workcell: myStoredValues.workcell,
          shiftId:Math.random().toString(36).substr(2, 16),
        shiftSelected:shift,
        shift:shift,
        date:null,
        timestamp:null,
        actual:null,
        planned:null,
        plannedCumulative:null,
        actualCumulative:null,
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

      Object.assign(hourObject["lostTime"],{"NO OPERATOR":"60"})
      Object.assign(hourObject,{"calculatedMinutesLost":"60"})
      Object.assign(hourObject,{"minutesRemaining":0})
      jobs.push(hourObject)
        jobs.shift();

  }
  //var jobs=[]


      jobs.sort((a, b) => parseFloat(a.hourNumber) - parseFloat(b.hourNumber));
      console.log("calling jobs save object in no operator")


      var store = require('amplify-store');
      var myStoredValues=store()

  Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);


  return jobs


  }

  function addNotScheduled(jobs,shift)
  {
  console.log("Calling the add not scheduled, here are the jobs "+jobs)
  console.log("This is the shift selected "+shift)
  //shift is the selected shift




  //console.log("This is the hour "+jobs[jobs.length - 1].hourNumber+" does next hour exist "+jobs[jobs.length - 1].hasOwnProperty(newHour))





        if(jobs.length>=1 && jobs[0].id!="test")
          {
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
            newHour=newHour.toString()
            var count=jobs[jobs.length - 1].count
          //  console.log("This is the server hour inside the add a new hour if statement "+hour)
            console.log("after hour pop up is true and hour is lte current hour "+jobs[jobs.length - 1].hourNumber )
            //Therefore I should go ahead and insert a new hour into the database
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
        count=count+1
                  console.log("This is the new hour about to insert "+newHour)
          //  jobInsertNewHour(jobs[jobs.length - 1].partNumber,jobs[jobs.length - 1].department,jobs[jobs.length - 1].workcell,jobs[jobs.length - 1].operator,jobs[jobs.length - 1].shift,newHour)

      //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
            //go head and push a new object to the array
    //grab the most recent job
    var priorObject=jobs[jobs.length - 1]


    var hourObject={
      fieldName:newHour.toString(),
      id:Math.random().toString(36).substr(2, 16),
      hour:Number(priorObject.hour)+1,
      hourEnd:Number(priorObject.hourEnd)+1,
      hourNumber:newHour,
      count:priorObject.count+1,
      operator:"Not Scheduled",
      partNumber:priorObject.partNumber,
      department:priorObject.department,
      workcell:priorObject.workcell,
      shiftId:priorObject.shiftId,
      shiftSelected:priorObject.shiftSelected,
      shift:priorObject.shift,
      date:priorObject.date,
      timestamp:priorObject.timestamp,
      actual:null,
      planned:priorObject.planned,
      plannedCumulative:null,
      actualCumulative:null,
      earnedHour:null,
      cycletime:priorObject.cycletime,
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
    Object.assign(hourObject["lostTime"],{"NOT SCHEDULED":"60"})
    Object.assign(hourObject,{"calculatedMinutesLost":"60"})
    Object.assign(hourObject,{"minutesRemaining":0})
    jobs.push(hourObject)

  }
  else
  {

    if(shift=="shift 1")
    {
      var newHour="1"
      var hour=7
      var hourEnd=8
    }
    else if(shift=="shift 2")
    {
      var newHour="9"
      var hour=15
      var hourEnd=16
    }
    else if(shift=="shift 3")
    {
      var newHour="17"
      var hour=23
      var hourEnd=24
    }
    console.log(" this is the new hour in empty array"+newHour)
    var store = require('amplify-store');
    var myStoredValues=store()

        var hourObject={
          fieldName:newHour.toString(),
          id:Math.random().toString(36).substr(2, 16),

          hourNumber:newHour,
          hour:hour,
          hourEnd:hourEnd,
        count:null,
        operator:"Not Scheduled",
        partNumber:"",
        department: myStoredValues.department,
        workcell: myStoredValues.workcell,
        shiftId:Math.random().toString(36).substr(2, 16),
        shiftSelected:shift,
        shift:shift,
        date:null,
        timestamp:null,
        actual:null,
        planned:null,
        plannedCumulative:null,
        actualCumulative:null,
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

      Object.assign(hourObject["lostTime"],{"NOT SCHEDULED":"60"})
      Object.assign(hourObject,{"calculatedMinutesLost":"60"})
      Object.assign(hourObject,{"minutesRemaining":0})
      jobs.push(hourObject)
        jobs.shift();

  }
  //var jobs=[]

      jobs.sort((a, b) => parseFloat(a.hourNumber) - parseFloat(b.hourNumber));
      console.log("calling jobs save object in no operator")

      var store = require('amplify-store');
      var myStoredValues=store()

  Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);

  return jobs


  }

  function addMaintenance(jobs,shift)
  {
  console.log("Calling the add maintenance, here are the jobs "+jobs)
  console.log("This is the shift selected "+shift)
  //shift is the selected shift




  //console.log("This is the hour "+jobs[jobs.length - 1].hourNumber+" does next hour exist "+jobs[jobs.length - 1].hasOwnProperty(newHour))





        if(jobs.length>=1&& jobs[0].id!="test" )
          {
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
            newHour=newHour.toString()
            var count=jobs[jobs.length - 1].count
          //  console.log("This is the server hour inside the add a new hour if statement "+hour)
            console.log("after hour pop up is true and hour is lte current hour "+jobs[jobs.length - 1].hourNumber )
            //Therefore I should go ahead and insert a new hour into the database
            var newHour=Number(jobs[jobs.length - 1].hourNumber)+1
        count=count+1
                  console.log("This is the new hour about to insert "+newHour)
          //  jobInsertNewHour(jobs[jobs.length - 1].partNumber,jobs[jobs.length - 1].department,jobs[jobs.length - 1].workcell,jobs[jobs.length - 1].operator,jobs[jobs.length - 1].shift,newHour)

      //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
            //go head and push a new object to the array
    //grab the most recent job
    var priorObject=jobs[jobs.length - 1]


    var hourObject={
      fieldName:newHour.toString(),
      id:Math.random().toString(36).substr(2, 16),
      hour:Number(priorObject.hour)+1,
      hourEnd:Number(priorObject.hourEnd)+1,
      hourNumber:newHour,
      count:priorObject.count+1,
      operator:"Maintenance",
      partNumber:priorObject.partNumber,
      department:priorObject.department,
      workcell:priorObject.workcell,
      shiftId:priorObject.shiftId,
      shiftSelected:priorObject.shiftSelected,
      shift:priorObject.shift,
      date:priorObject.date,
      timestamp:priorObject.timestamp,
      actual:null,
      planned:priorObject.planned,
      plannedCumulative:null,
      actualCumulative:null,
      earnedHour:null,
      cycletime:priorObject.cycletime,
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
    Object.assign(hourObject["lostTime"],{"PLANNED DOWNTIME":"60"})
    Object.assign(hourObject,{"calculatedMinutesLost":"60"})
    Object.assign(hourObject,{"minutesRemaining":0})
    jobs.push(hourObject)

  }
  else
  {

    if(shift=="shift 1")
    {
      var newHour="1"
      var hour=7
      var hourEnd=8
    }
    else if(shift=="shift 2")
    {
      var newHour="9"
      var hour=15
      var hourEnd=16
    }
    else if(shift=="shift 3")
    {
      var newHour="17"
      var hour=23
      var hourEnd=24
    }
    console.log(" this is the new hour in empty array"+newHour)
    var store = require('amplify-store');
    var myStoredValues=store()



        var hourObject={
          fieldName:newHour.toString(),
          id:Math.random().toString(36).substr(2, 16),

          hourNumber:newHour,
          hour:hour,
          hourEnd:hourEnd,
        count:null,
        operator:"Maintenance",
        partNumber:"",
        department: myStoredValues.department,
        workcell: myStoredValues.workcell,
            shiftId:Math.random().toString(36).substr(2, 16),
        shiftSelected:shift,
        shift:shift,
        date:null,
        timestamp:null,
        actual:null,
        planned:null,
        plannedCumulative:null,
        actualCumulative:null,
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

      Object.assign(hourObject["lostTime"],{"PLANNED DOWNTIME":"60"})
      Object.assign(hourObject,{"calculatedMinutesLost":"60"})
      Object.assign(hourObject,{"minutesRemaining":0})

      jobs.push(hourObject)
        jobs.shift();
  }
  //var jobs=[]

      jobs.sort((a, b) => parseFloat(a.hourNumber) - parseFloat(b.hourNumber));
      console.log("calling jobs save object in no operator")

      var store = require('amplify-store');
      var myStoredValues=store()

  Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);

  return jobs


  }

  function addNewHour(jobs,shift,serverHour)
  {
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

  if(jobs[jobs.length -1].hourNumber!=undefined)
  {
    console.log("found hour number from last element of array")

    var hourObject=jobs[jobs.length -1]
    if(serverHour!=null)
    {
      hourObject["serverHour"]=serverHour
    }
  }
  else if(jobs[0]!=undefined)
  {
    console.log("found hour number from first element of array")

    var hourObject=jobs[0]
    if(serverHour!=null)
    {
      hourObject["serverHour"]=serverHour
    }
  }


  if (hourObject.actual==null)
  {
    console.log("jobs actual was null ")
    var earnedHour=0.00
  }
  else if(Number(hourObject.actual>0)&&Number(hourObject.planned>0) )
  {
    var earnedHour=Number(hourObject.actual)/Number(hourObject.planned)
    earnedHour=earnedHour.toFixed(2)
    console.log("This is the earned hour "+earnedHour)

  }
  else
  {
    console.log("earned hour is set to 0 ")
    var earnedHour=0.00
  }
  var newHour=Number(hourObject.hourNumber)+1
  newHour=newHour.toString()
  console.log("This is the hour "+hourObject.hourNumber+" does next hour exist "+hourObject.hasOwnProperty(newHour))


  if ((earnedHour>=1 &&hourObject.hasOwnProperty(newHour)==false ) || (Number(hourObject.minutesRemaining)<=0 && hourObject.minutesRemaining!=null&&hourObject.hasOwnProperty(newHour)==false)||hourObject.operator.trim().toLowerCase().includes("no operator"))
  {
    //only do this if the hour after this doesn't exist

    console.log("this hour is complete and ready to be updated, here is the hour "+hourObject.hourNumber)
    var nextHourReady=true

  }
  else if(Number(hourObject.serverHour)==Number(hourObject.hourNumber))
  {
    var nextHourReady="currentHour"
    return null
  }
  else
  {
    var nextHourReady=false
    return null
  }



    if((shift=="shift 1" && Number(hourObject.hourNumber )<=7)||(shift=="shift 2" && Number(hourObject.hourNumber)<=15)||(shift=="shift 3" && Number(hourObject.hourNumber)<=23))
    {
      console.log("shift is "+shift+" and hour is "+hourObject.hourNumber)
      var go=true
    }
    else if(hourObject.operator.trim().toLowerCase().includes("no operator"))
    {
      console.log("shift is "+shift+" and go is true because it's no operator")
      var go=true
    }
    else
    {
      console.log("shift is "+shift+" and go is false")
      var go=false
      return null
    }


    console.log("This is the value of go "+go )
    //console.log(" checking if hour number is less than server hour "+Number(hourObject.hourNumber)<Number(hour))
    console.log("this is the next hour ready "+nextHourReady)

    //Only do a check if the hour number is less than the curren hour if the shift of the current job is the same as the current shift
    //console.log("This is the latest hour number "+hourObject.hourNumber+" this is the last hour for shift selected "+lastHourShiftSelected )
    /*if( Number(hourObject.hourNumber)<lastHourShiftSelected)
    {
      console.log("current shift is equal to shift selected and hour number is less than current hour")
      var correctHour=true
    }
    else
    {
      console.log("current shift is equal to shift selected and hour number isn't less than current hour")
      var correctHour=false
    }*/

  var count=hourObject.count

        if(Number(hourObject.hourNumber)<Number(hourObject.serverHour) &&nextHourReady==true && go==true )
          {
          //  console.log("This is the server hour inside the add a new hour if statement "+hour)
            console.log("after hour pop up is true and hour is lte current hour "+hourObject.hourNumber )
            //Therefore I should go ahead and insert a new hour into the database
            var newHour=Number(hourObject.hourNumber)+1
        count=count+1
                  console.log("This is the new hour about to insert "+newHour)

  if(newHour==9||newHour==17||newHour==1)
  {
    return null
  }

          //  jobInsertNewHour(hourObject.partNumber,hourObject.department,hourObject.workcell,hourObject.operator,hourObject.shift,newHour)

      //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
            //go head and push a new object to the array
    //grab the most recent job
    var priorObject=hourObject


    var hourObject={
      fieldName:newHour.toString(),
      id:Math.random().toString(36).substr(2, 16),
      hour:Number(priorObject.hour)+1,
      hourEnd:Number(priorObject.hourEnd)+1,
      hourNumber:newHour,
      count:priorObject.count+1,
      operator:priorObject.operator,
      partNumber:priorObject.partNumber,
      department:priorObject.department,
      workcell:priorObject.workcell,
      shiftId:priorObject.shiftId,
      shiftSelected:priorObject.shiftSelected,
      shift:priorObject.shift,
      date:priorObject.date,
      timestamp:priorObject.timestamp,
      actual:null,
      planned:priorObject.planned,
      plannedCumulative:null,
      actualCumulative:null,
      earnedHour:null,
      cycletime:priorObject.cycletime,
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
    if(hourObject.operator.trim().toLowerCase().includes("no operator"))
    {
      //make losttime no operator set to 60
      Object.assign(hourObject["lostTime"],{"NO OPERATOR":"60"})
      Object.assign(hourObject,{"calculatedMinutesLost":"60"})
      Object.assign(hourObject,{"minutesRemaining":0})
    }

  //  jobs.push(hourObject)

  var store = require('amplify-store');
  var myStoredValues=store()

  Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);



  return hourObject
  }



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



export default class TableExampleControlled extends React.Component  {


  constructor(props, context) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  //this.state = { department: "datacom"};
  this.handleActualKeyUp = this.keyUpHandler.bind(this, 'actual');
        this.handlePlannedKeyUp = this.keyUpHandler.bind(this, 'planned');



this.getData= this.getData.bind(this)
var savedTimestamp=moment().format("YYYY-MM-DD HH:mm:ss.SSS")
/*this.state = { hourObject: props.hourObject};
this.state = { jobs: props.jobs};
this.state = { selected: [1]};*/
//this.state={history:props.history}

//this.state={jobs:props.jobs}

//  console.log("this is the jobs object in table example  "+props.jobs)


}
 //static contextTypes = { history: PropTypes.object.isRequired };
 static contextTypes = { history: PropTypes.object };

 removeLastJob = () => {

console.log(" calling the remove job function ")

//Need to iterate through the jobs array

var id=null
var hourNumber=null
var jobsArray=this.props.jobs
for (var i in this.props.jobs) {
  if(jobsArray[i]==undefined)
  {
  jobsArray.splice(i, 1)
  }
  //console.log("This is the hour number "+this.props.jobs[i].hourNumber)
  //id=this.props.jobs[i].id
  //hourNumber=this.props.jobs[i].hourNumber
}
//console.log("this is the jobs array "+jobsArray)

var index=-1
console.log("This is the last item hour number "+jobsArray[jobsArray.length - 1].hourNumber)
if(jobsArray.length>1)
{
  console.log("inside the jobs array remove last job "+jobsArray[jobsArray.length - 1].hourNumber)
  var id=jobsArray[jobsArray.length - 1].id
  var hour=jobsArray[jobsArray.length - 1].hourNumber
for (var i in jobsArray) {
  if (jobsArray[i].id == id) {
console.log("id is the same and hour number is the same ")


    //  console.log("type is part number, here is the value "+value)
   //   var actual=value
   //   var planned=projects[i].planned
  // console.log("This is the actual before changing the partnumber "+jobsArray[i].actual)

var fieldName=jobsArray[i].fieldName
console.log("This is the field name to delete "+fieldName)
    // projects[i].partNumber = value
      //   console.log("This is the actual after changing the partnumber "+jobsArray[i].actual)

index=i




 //  projects[i].calculatedMinutesLost = data;
     break; //Stop this loop, we found it!
  }
}
console.log("This is the discovered index "+index)
//console.log("This is the projects at the removed index before "this.props.jobs[index].hourNumber)
//var fieldName=jobsArray[index].fieldName
if (index > -1) {
  this.props.dispatch({
          type: 'REMOVE_HOUR',
          payload: index
      });
  jobsArray.splice(index, 1);
}

//this.setState({jobs:jobsArray})
//immediately save the job here


Meteor.call('jobsDeleteHour',jobsArray,fieldName);
console.log("This is the last operator now "+jobsArray[jobsArray.length - 1].operator)
this.props.dispatch({
                type: 'UPDATE_OPERATOR',
                payload: jobsArray[jobsArray.length - 1].operator
            });

//console.log("This is the hour number at the removed index after"+jobsArray[index].hourNumber)
}
else if(jobsArray.length==1)
{


  this.props.dispatch({
          type: 'UPDATE_JOBS_ARRAY',
          payload: []
      });
  //this.setState({jobs:[]})

  jobsArray[0].partNumber=""

Meteor.call('jobsDeleteHour',jobsArray,fieldName);
}





/*
axios.get('/latestJobRemove',{
params: {
 department: Session.get("department"),
 workcell: Session.get("workcell"),
 id:Session.get("id"),
 hour:Session.get("hour"),
 fieldName:Session.get("fieldName")

}

})
.then(response => {


//this.setState({ operatorSelected: response.data.operator})
})
.catch(error => {
console.log(error);
});







var that=this
   setTimeout(function() {

     axios.get('/jobsRetrieveObject',{
     params: {
          department: Session.get("department"),
          workcell:Session.get("workcell"),
          shift:that.state.shift

        }

     })
     .then(response => {

      that.setState({ jobs: response.data})

     })
     .catch(error => {
       console.log(error);
     });



  }, 2000);

*/



    }

    noOperator = () => {

      var jobs=this.props.jobs

            console.log("Calling the no operator ")
            var jobs = addNoOperator(this.props.jobs,this.state.shiftSelected)

        //  this.setState({ jobs: jobs})
        this.props.dispatch({
                        type: 'UPDATE_OPERATOR',
                        payload: "No Operator"
                    });

       }


       notScheduled = () => {

         var jobs=this.props.jobs

               console.log("Calling not scheduled ")
               var jobs = addNotScheduled(this.props.jobs,this.state.shiftSelected)

           //  this.setState({ jobs: jobs})
           this.props.dispatch({
                           type: 'UPDATE_OPERATOR',
                           payload: "Not Scheduled"
                       });
    //   this.setState({ operatorSelected: "Not Scheduled"})
          }

          maintenance = () => {

            var jobs=this.props.jobs

                  console.log("Calling maintenance ")
                  var jobs = addMaintenance(this.props.jobs,this.state.shiftSelected)

              //  this.setState({ jobs: jobs})
              this.props.dispatch({
                              type: 'UPDATE_OPERATOR',
                              payload: "Maintenance"
                          });
        //  this.setState({ operatorSelected: "Maintenance"})
             }
    showPreviousHour = () => {

var jobs=this.props.jobs

      console.log("Calling the show previous hour, here are the jobs "+jobs)
    //  console.log("This is the shift selected "+shift)
      //shift is the selected shift
      console.log("This is the first hour in the array of jobs "+jobs[0].hourNumber )




            if(jobs[0].fieldName!="1"&&jobs[0].fieldName!="9"&&jobs[0].fieldName!="17")
              {
                var priorHour=Number(jobs[0].hourNumber)-1
                priorHour=priorHour.toString()


                var count=jobs[0].count
              //  console.log("This is the server hour inside the add a new hour if statement "+hour)

                //Therefore I should go ahead and insert a new hour into the database

            count=count-1
                      console.log("This is the new hour about to insert "+priorHour)
              //  jobInsertNewHour(hourObject.partNumber,hourObject.department,hourObject.workcell,hourObject.operator,hourObject.shift,newHour)

          //  var object= Shifts.find({department:department,workcell:workcell, shift:shift}).fetch().pop()
                //go head and push a new object to the array
        //grab the most recent job

        var priorObject=jobs[0]

//I need to set the timestamp equal to the hour number

        var hourObject={
          fieldName:priorHour,
          id:Math.random().toString(36).substr(2, 16),
          hourNumber:priorHour,
          firstHour:true,
          count:priorObject.count-1,
          operator:priorObject.operator,
          partNumber:priorObject.partNumber,
          department:priorObject.department,
          workcell:priorObject.workcell,
          shiftId:priorObject.shiftId,
          shiftSelected:priorObject.shiftSelected,
          shift:priorObject.shift,
          date:priorObject.date,
          timestamp:priorObject.timestamp,
          actual:null,
          planned:priorObject.planned,
          plannedCumulative:null,
          actualCumulative:null,
          earnedHour:null,
          cycletime:priorObject.cycletime,
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


        jobs.push(hourObject)

      jobs.sort((a, b) => parseFloat(a.hourNumber) - parseFloat(b.hourNumber));
      this.setState({jobs:jobs})
    //  return jobs
    var store = require('amplify-store');
    var myStoredValues=store()

Meteor.call('jobsSaveObject',jobs,myStoredValues.department,myStoredValues.workcell);


}



}














  componentWillMount= () =>  {
  var that=this
  this.setState({shiftSelected:"shift 1" });




this.interval =setInterval(function hello() {


    try {
  console.log("about to try the add new hour fxn interval ")
  const request = require('superagent/superagent')

  request
     .get('/serverHourRetrieve')
     .type('json')

     .then(res => {
        // res.body, res.headers, res.status
  //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
  //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
  //console.log("This is the response body "+ res.body)
  console.log("This is the server hour retrieve result "+res.body+" and text "+res.text)
  if(res.text!=undefined)
  {


    this.props.dispatch({
            type: 'UPDATE_SERVER_HOUR',
            payload: res.text
        });


        //Do a check and see if the hour is 7 9 11 13 15 17 19 21 23 1 3 5
        console.log("This is the server hour "+res.text)
        console.log("This is the latest scan hour "+Session.get("scanHour"))
        if((Number(res.text)% 2 != 0) && Number(res.text)!=Session.get("scanHour"))
        {
          console.log("The sever hour is odd")
//Need to set a session variable that holds the most recent scanned hour
//if the user completes a scan then I need to grab the server hour and save it to a session cookie

          window.location.href = "/husky";
        }
        else {
          console.log("The server hour is even or the scan has already been done for this hour")
        }


      var newHour = addNewHour(this.props.jobs,that.state.shiftSelected,res.text)

  if(newHour!=null)
  {
  this.props.dispatch({
          type: 'ADD_HOUR',
          payload: newHour
      });
  }






  }


     })
     .catch(err => {
        // err.message, err.response
        console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
     });


    }
    catch(err) {
      console.log("error in add new hour fxn interval "+err)
    }






  return hello;
}.bind(this), 60000);

this.shiftInterval =setInterval(function hello() {
console.log("calling shift retrieve to change the shift")
console.log("Calling retrieve data")
const request = require('superagent/superagent')


request
   .get('/shiftRetrieve')
   .type('json')

   .then(res => {
      // res.body, res.headers, res.status
       that.setState({ shiftSelected:res.text})

       this.props.dispatch({
                       type: 'UPDATE_SHIFT',
                       payload: res.text
                   });



console.log("This is the result in shift "+res.body+" this is the text "+res.text)



   })
   .catch(err => {
      // err.message, err.response
      console.log("This is the error message in shift select"+err.message+" this is the error response "+err.response)
   });




if(  this.props.jobs[0].id!="test")
{
var jobs=this.props.jobs
console.log("This is the jobs object in table example that was found "+this.props.jobs)
console.log("gabbing the server hour and trying to add an hour")
//  var jobs = addNewHour(res.body,that.state.shiftSelected)
//that.setState({ jobs: jobs})

const request = require('superagent/superagent')

request
.get('/serverHourRetrieve')
.type('json')

.then(res => {
// res.body, res.headers, res.status
//console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
//  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
//console.log("This is the response body "+ res.body)
console.log("This is the server hour retrieve result "+res.body+" and text "+res.text)
if(res.text!=undefined)
{



var newHour = addNewHour(this.props.jobs,that.state.shiftSelected,res.text)


this.props.dispatch({
type: 'ADD_HOUR',
payload: newHour
});


}


})
.catch(err => {
// err.message, err.response
console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
});





}
else {
console.log("first id of jobs array is test")


var date=moment().format("YYYY-MM-DD HH:mm:ss.SSS")
this.setState({savedTimestamp:date})

var store = require('amplify-store');
var myStoredValues=store()

this.setState({workcellSelected: myStoredValues.workcell});



//  this.setState({ jobs: []})
console.log("about to try server hour retrieve ")
try {
console.log("about to try the shift retrieve on component will mount ")
const request = require('superagent/superagent')

request
.get('/serverHourRetrieve')
.type('json')

.then(res => {
  // res.body, res.headers, res.status
//console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
//  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
//console.log("This is the response body "+ res.body)
console.log("This is the server hour retrieve result "+res.body+" and text "+res.text)
if(res.text!=undefined)
{


this.props.dispatch({
      type: 'UPDATE_SERVER_HOUR',
      payload: res.text
  });

}


})
.catch(err => {
  // err.message, err.response
  console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
});


request
.get('/shiftRetrieve')
.type('json')

.then(res => {
// res.body, res.headers, res.status
 that.setState({ shiftSelected:res.text})
 this.props.dispatch({
                 type: 'UPDATE_SHIFT',
                 payload: res.text
             });

//  console.log("This is the result in shift of component will mount "+res.body+" this is the text "+res.text)
console.log("trying the shift retrieve function ")
var store = require('amplify-store');
var myStoredValues=store()

if(  this.props.jobs[0].id=="test")
{

const request = require('superagent/superagent')

request
.get('/jobsRetrieveObject')
.type('json')
.query({ department: myStoredValues.department, workcell: myStoredValues.workcell,shift:res.text })
.then(res => {
// res.body, res.headers, res.status
//console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
//  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
//console.log("This is the response body "+ res.body)
if(res.body!=undefined)
{


console.log("This is the last hour number discovered "+res.body[res.body.length-1].hourNumber)





this.props.dispatch({
type: 'INITIALIZE_JOBS_ARRAY',
payload: res.body
});

var newHour= addNewHour(res.body,this.state.shiftSelected,this.props.serverHour)
//that.setState({ jobs: jobs})

that.props.dispatch({
type: 'ADD_HOUR',
payload: newHour
});


if(res.body[res.body.length - 1]!=undefined)
{
that.setState({ operatorSelected: res.body[res.body.length - 1].operator})

this.props.dispatch({
              type: 'UPDATE_OPERATOR',
              payload: res.body[res.body.length - 1].operator
          });
          this.props.dispatch({
                          type: 'UPDATE_PARTNUMBER',
                          payload: res.body[res.body.length - 1].partNumber
                      });
}

else if(res.body.length==1 &&res.body[0]!=undefined)
{
this.props.dispatch({
            type: 'UPDATE_OPERATOR',
            payload: res.body[0].operator
        });
        this.props.dispatch({
                        type: 'UPDATE_PARTNUMBER',
                        payload: res.body[0].partNumber
                    });


that.setState({ operatorSelected: res.body[0].operator})
}

}
})
.catch(err => {
// err.message, err.response
console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
});


}



})
.catch(err => {
// err.message, err.response
console.log("This is the error message in shift retrieve"+err.message+" this is the error response "+err.response)
});

}
catch(err) {
console.log("error in the shift retrieve")
}

}


    return hello
}.bind(this), 480000);

this.alertInterval =setInterval(function hello() {
  console.log("trying the alert interval ")

    try {
      console.log("This is the jobs in alert interval "+this.props.jobs)

      if (this.props.jobs!=undefined)
      {

        console.log("This.props.jobs is not undefined ")
        var store = require('amplify-store');
        var myStoredValues=store()

    Meteor.call('jobsSaveObject',this.props.jobs,myStoredValues.department,myStoredValues.workcell);

    if(this.props.jobs[this.props.jobs.length - 1]!=undefined)
    {
      var hourObject=this.props.jobs[this.props.jobs.length - 1]
    }
    else if(this.props.jobs[0]!=undefined)
    {
      var hourObject=this.props.jobs[0]
    }




        if(hourObject.shift=="shift 1")
        {
          console.log("found shift 1")
        if (Number(hourObject.hourNumber)>=1 && Number(hourObject.hourNumber) <=5)
        {
        var actualHour=Number(hourObject.hourNumber)+6
        var endHour=actualHour+1

        }
        else if(Number(hourObject.hourNumber)==6)
        {
        var actualHour=Number(hourObject.hourNumber)+6
        var endHour=actualHour-11
        }
        else if(Number(hourObject.hourNumber)>=7)
        {
        var actualHour=Number(hourObject.hourNumber)-6
        var endHour=actualHour+1
        }
        }
        else if(hourObject.shift=="shift 2")
        {
    console.log("found shift 2")
        if (Number(hourObject.hourNumber)>=9)
        {
        var actualHour=Number(hourObject.hourNumber)-6
        var endHour=actualHour+1

        }

        }
        else if(hourObject.shift=="shift 3")
        {
    console.log("found shift 3")
        if (Number(hourObject.hourNumber)==17)
        {
        var actualHour=Number(hourObject.hourNumber)-6
        var endHour=actualHour+1

        }
        else if (Number(hourObject.hourNumber)==18)
        {
        var actualHour=Number(hourObject.hourNumber)-6
        var endHour=1

        }
        else if (Number(hourObject.hourNumber)>=19)
        {
        var actualHour=Number(hourObject.hourNumber)-18
        var endHour=actualHour+1

        }
        }


        //console.log("This should iterate through the jobs object and show alert box if necessary, this is the latest hour  "+this.props.jobs[jobs.length - 1].hourNumber)
        var earnedHour=Number(hourObject.actual)/Number(hourObject.planned)
        if ((hourObject.minutesRemaining>0 && earnedHour<1) && Number(hourObject.hourNumber)>=1 && hourObject.partNumber.trim()!=""&&hourObject.afterHourPopUp==true&& hourObject.nextHourReady!="currentHour" )
        {


              if(hourObject.minutesRemaining!=null)
              {
                var stringMinutesRemaining=" There are "+hourObject.minutesRemaining+" minutes remaining to account for."

              }
              else
              {
                var stringMinutesRemaining=""

              }

          Swal({title:'Please enter the minutes lost for hour '+ actualHour+" to "+endHour+"."+stringMinutesRemaining,
          animation: false})
    /*
    var latestAlert=this.props.jobs[jobs.length - 1].afterHourPopUp
    console.log("This is the latest alert "+latestAlert+ "hour "+this.props.jobs[jobs.length - 1].hourNumber )
    */

    }


      }//end of if jobs check


    }
    catch(err) {
        console.log("error in alert interval "+err)
    }



//console.log("This is prop jobs "+this.props.jobs+" type of "+typeof this.props.jobs)

return hello;
}.bind(this), 360000);





  }

  componentWillUnmount() {

    clearInterval(this.interval);
    clearInterval(this.alertInterval);
      clearInterval(this.shiftInterval);

  }

  componentDidMount() {




    console.log("table example component did mount")
     loadCSS(
       'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
       document.querySelector('#insertion-point-jss'),
     );
   }

   shift1 = () => {
 console.log("clicked shift 1")

        this.setState({
            shiftSelected:"shift 1"
          });

var that=this
//event.preventDefault()
var store = require('amplify-store');
var myStoredValues=store()
const request = require('superagent/superagent')

request
   .get('/jobsRetrieveObject')
   .type('json')
   .query({ department: myStoredValues.department, workcell: myStoredValues.workcell,shift:"shift 1" })
   .then(res => {
      // res.body, res.headers, res.status
//console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
//  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
//console.log("This is the response body "+ res.body)
console.log("This is the jobs after shift 1 button press"+res.body)
if(res.body!=undefined)
{

  this.props.dispatch({
          type: 'INITIALIZE_JOBS_ARRAY',
          payload: res.body
      });


     if(res.body[0].partNumber!="")
      {
                      var newHour= addNewHour(res.body,"shift 1",this.props.serverHour)
                  //that.setState({ jobs: jobs})

                  this.props.dispatch({
                          type: 'ADD_HOUR',
                          payload: newHour
                      });
      }


}
if(res.body[res.body.length - 1]!=undefined)
{
    that.setState({ operatorSelected: res.body[res.body.length - 1].operator})


    that.props.dispatch({
                    type: 'UPDATE_OPERATOR',
                    payload: res.body[res.body.length - 1].operator
                });
}

else if(res.body.length==1 &&res.body[0]!=undefined)
{

  that.props.dispatch({
                  type: 'UPDATE_OPERATOR',
                  payload: res.body[0].operator
              });

    that.setState({ operatorSelected: res.body[0].operator})
}


   })
   .catch(err => {
      // err.message, err.response
      console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
   });



      }
      shift2 = () => {
        var that=this
       this.setState({
               shiftSelected:"shift 2"
             });
            // event.preventDefault()
            var store = require('amplify-store');
            var myStoredValues=store()
            const request = require('superagent/superagent')

            request
               .get('/jobsRetrieveObject')
               .type('json')
               .query({ department: myStoredValues.department, workcell:myStoredValues.workcell,shift:"shift 2" })
               .then(res => {
                  // res.body, res.headers, res.status
            //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
            //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
            //console.log("This is the response body "+ res.body)
            console.log("This is the jobs after shift 2 button press"+res.body+" part number "+res.body[0].partNumber)
            if(res.body!=undefined)
            {

              this.props.dispatch({
                      type: 'INITIALIZE_JOBS_ARRAY',
                      payload: res.body
                  });

if(res.body[0].partNumber!="")
{
                var newHour= addNewHour(res.body,"shift 2",this.props.serverHour)
            //that.setState({ jobs: jobs})

            this.props.dispatch({
                    type: 'ADD_HOUR',
                    payload: newHour
                });
}

            }
            if(res.body[res.body.length - 1]!=undefined)
            {
              that.props.dispatch({
                              type: 'UPDATE_OPERATOR',
                              payload: res.body[res.body.length - 1].operator
                          });

                that.setState({ operatorSelected: res.body[res.body.length - 1].operator})
            }

            else if(res.body.length==1 &&res.body[0]!=undefined)
            {
              that.props.dispatch({
                              type: 'UPDATE_OPERATOR',
                              payload: res.body[0].operator
                          });
                that.setState({ operatorSelected: res.body[0].operator})
            }


               })
               .catch(err => {
                  // err.message, err.response
                  console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
               });


         }

         shift3 = () => {

var that=this
               this.setState({
                  shiftSelected:"shift 3"
                });
               // event.preventDefault()
               var store = require('amplify-store');
               var myStoredValues=store()
               const request = require('superagent/superagent')

               request
                  .get('/jobsRetrieveObject')
                  .type('json')
                  .query({ department:  myStoredValues.department, workcell:myStoredValues.workcell,shift:"shift 3" })
                  .then(res => {
                     // res.body, res.headers, res.status
               //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
               //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
               //console.log("This is the response body "+ res.body)
               console.log("This is the jobs after shift 3 button press"+res.body)
               if(res.body!=undefined)
               {

                 this.props.dispatch({
                         type: 'INITIALIZE_JOBS_ARRAY',
                         payload: res.body
                     });


                     if(res.body[0].partNumber!="")
                     {
                                     var newHour= addNewHour(res.body,"shift 2",this.props.serverHour)
                                 //that.setState({ jobs: jobs})

                                 this.props.dispatch({
                                         type: 'ADD_HOUR',
                                         payload: newHour
                                     });
                     }

               }
               if(res.body[res.body.length - 1]!=undefined)
               {
                 that.props.dispatch({
                                 type: 'UPDATE_OPERATOR',
                                 payload: res.body[res.body.length - 1].operator
                             });
                   that.setState({ operatorSelected: res.body[res.body.length - 1].operator})
               }

               else if(res.body.length==1 &&res.body[0]!=undefined)
               {
                 that.props.dispatch({
                                 type: 'UPDATE_OPERATOR',
                                 payload: res.body[0].operator
                             });
                   that.setState({ operatorSelected: res.body[0].operator})
               }


                  })
                  .catch(err => {
                     // err.message, err.response
                     console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
                  });



            }




  getData(val){
    // do not forget to bind getData in constructor
  //  console.log("this is the value in getData "+val);
    //set the minutes remaining here

    //send the job object to the



//console.log("calling get data in table example, here is the val "+val+" here is typeof "+typeof val)
//console.log("this is the")

var that=this

    setTimeout(function() {
    that.setState({jobs:val})
},1000)

    //this.setState({color: "rgba(0, 255, 0, 0.3)"});


    //
    //Session.set("minutesRemaining",minutesRemaining)


  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  state = {
    selected: [1],
  };





  handleRowSelection = (selectedRows) => {




    this.setState({
      selected: selectedRows,
    });


//console.log("This is the selectedRows to string "+selectedRows.toString()+" this is the type of "+ typeof selectedRows.toString()+" here is the length "+selectedRows.toString().length)
var selectedRow=selectedRows.toString()
if (selectedRow.length>0)
{
const columns = this.props.jobs

//console.log("This is columns selected "+ columns[selectedRow].partNumber)
var partNumber=columns[selectedRow].partNumber
//Session.set("partNumberSelected",partNumber)
cookie.save('partNumberSelected', partNumber, { path: '/' });
/*
setTimeout(function() {
FlowRouter.go('/dataentry');


FlowRouter.reload();
}, 500);
*/

}

  }

//isSelectedNew = id => this.state.selected.indexOf(id) !== -1;
isSelected = (index) => {
//console.log("This is the is selected index "+index)

  return this.state.selected.indexOf(index) !== -1;
};


handleRowClickSelect = (event, id) => {




//$(':focus').attr('class');






var that=this

/*
const rows = this.props.jobs

     var partNumber=rows[selectedRow].partNumber
     Session.set("partNumberSelected",partNumber)
*/

  var partNumber=id.split("*")[2]


if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
{

const { selected } = this.state;
   const selectedIndex = selected.indexOf(id);
   let newSelected = [];

   if (selectedIndex === -1) {
     newSelected = newSelected.concat(selected, id);
   } else if (selectedIndex === 0) {
     newSelected = newSelected.concat(selected.slice(1));
   } else if (selectedIndex === selected.length - 1) {
     newSelected = newSelected.concat(selected.slice(0, -1));
   } else if (selectedIndex > 0) {
     newSelected = newSelected.concat(
       selected.slice(0, selectedIndex),
       selected.slice(selectedIndex + 1),
     );
   }


     this.setState({ selected: newSelected });
     if(newSelected.toString().includes(","))
     {
var idAndHour=newSelected.toString().split(",")[1]
}
else
{
  var idAndHour=newSelected.toString()
}

  var fieldName=idAndHour.split("*")[3]
  var partNumber=idAndHour.split("*")[2]
  var id=idAndHour.split("*")[1]
  var hour=idAndHour.split("*")[0]


/*
Session.set("hour",hour)
Session.set("id",id)
Session.set("fieldName",fieldName)
*/
cookie.save('hour', hour, { path: '/' });
cookie.save('id', id, { path: '/' });
cookie.save('fieldName', fieldName, { path: '/' });
//call comment retrieve here


//this.setState({ comment: ""})

/*axios.get('/commentRetrieve',{
  params: {
      id:id,
       hour:hour

     }

  })
  .then(response => {

     this.setState({ comment: response.data})

  })
  .catch(error => {
    console.log(error);
  });*/


   if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
   {


  }

}

 //this.setState({ selected: [] });


  }

  handleRowClickMinutesLost = (event, id) => {





      var partNumber=id.split("*")[2]

    if (partNumber.length>2 && partNumber=='null'&& partNumber==null&& partNumber==undefined )
    {
    return false
    }
    else if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
    {

    const { selected } = this.state;
       const selectedIndex = selected.indexOf(id);
       let newSelected = [];

       if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, id);
       } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(selected.slice(1));
       } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(selected.slice(0, -1));
       } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
           selected.slice(0, selectedIndex),
           selected.slice(selectedIndex + 1),
         );
       }


         this.setState({ selected: newSelected });
    var idAndHour=newSelected.toString().split(",")[1]

      var partNumber=idAndHour.split("*")[2]
      var id=idAndHour.split("*")[1]
      var hour=idAndHour.split("*")[0]
/*
      Session.setPersistent("id",id)
      Session.setPersistent("hour",hour)
      Session.set("partNumberSelected",partNumber)
      */


      cookie.save('hour', hour, { path: '/' });
      cookie.save('id', id, { path: '/' });
      cookie.save('partNumberSelected', partNumber, { path: '/' });



       if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
       {


      }

    }

     //this.setState({ selected: [] });


      }

  handleRowClick = (event, id) => {




//$(':focus').attr('class');


//this.setState({ selected:[] });







/*
const rows = this.props.jobs

       var partNumber=rows[selectedRow].partNumber
       Session.set("partNumberSelected",partNumber)
*/

    var partNumber=id.split("*")[2]

if (partNumber.length>2 && partNumber=='null'&& partNumber==null&& partNumber==undefined )
{
return false
}
else if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
{
  const { selected } = this.state;
     const selectedIndex = selected.indexOf(id);
     let newSelected = [];

     if (selectedIndex === -1) {
       newSelected = newSelected.concat(selected, id);
     } else if (selectedIndex === 0) {
       newSelected = newSelected.concat(selected.slice(1));
     } else if (selectedIndex === selected.length - 1) {
       newSelected = newSelected.concat(selected.slice(0, -1));
     } else if (selectedIndex > 0) {
       newSelected = newSelected.concat(
         selected.slice(0, selectedIndex),
         selected.slice(selectedIndex + 1),
       );
     }


       this.setState({ selected: newSelected });
var idAndHour=id.toString()

    var fieldName=idAndHour.split("*")[3]
    var partNumber=idAndHour.split("*")[2]
    var id=idAndHour.split("*")[1]
    var hour=idAndHour.split("*")[0]
/*
    Session.setPersistent("id",id)
    Session.setPersistent("hour",hour)
    Session.setPersistent("fieldName",fieldName)
    Session.set("partNumberSelected",partNumber)
*/

    cookie.save('hour', hour, { path: '/' });
    cookie.save('id', id, { path: '/' });
    cookie.save('fieldName',fieldName, { path: '/' });
    cookie.save('partNumberSelected', partNumber, { path: '/' });

    try {
      /*const request = require('superagent/superagent')
      event.preventDefault()
      request
        .post('/jobsSaveObject')
        .send({ jobsArray: this.props.jobs}) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            console.log("this is the error in jobs save "+err+" and result "+res)
          // Calling the end function will send the request
        });*/


        var store = require('amplify-store');
        var myStoredValues=store()

    Meteor.call('jobsSaveObject',this.props.jobs,myStoredValues.department,myStoredValues.workcell);
    }
    catch(err) {
        console.log("This is the error in jobs save method "+err.message)
    }

     if (partNumber.length>2 && partNumber!='null'&& partNumber!=null&& partNumber!=undefined &&typeof partNumber=="string")
     {
            setTimeout(function() {


          //  context.router.history.push('/dataentry')
 //this.props.history.push('/dataentry');


        //  window.location.href = '/dataentry';
          //this.props.history.push('/dataentry')
            //  FlowRouter.go('/dataentry');


             // FlowRouter.reload();

              }, 500)

    }

}

   //this.setState({ selected: [] });


    }

    handleCheckboxClick = (event, id) => {



    //const { selected } = this.state;
    //   const selectedIndex = selected.indexOf(id);


//if(selected!="1")
//{

  /*setTimeout(function() {
    FlowRouter.go('/dataentry');


    FlowRouter.reload();
    }, 500)*/


//}

/*
       setTimeout(function() {
         FlowRouter.go('/dataentry');


         FlowRouter.reload();
         }, 500)
*/



      }

//onClick={event => this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber)}
handleOpen = () => {

  this.setState({ show: true })
};

handleClose = () => {
  this.setState({ show: false })
};

handleOpenModal()
 {

 // that.setState({ show: true })

 }

keyUpHandler(refName, e) {

         // prints either LoginInput or PwdInput
     }
     handlePillClick() {
         /*this.setState(state => ({
           isToggleOn: !state.isToggleOn
         }));*/
         console.log("THis is the pill active "+this.state.active)
         alert("clicked pill")
       }
render() {
//console.log("This is the jobs at start of render "+this.props.jobs+" this is the jobs state "+this.state.jobs)
//const {router,history} = this.context;
/*
$("tr.tablerow1 td").each(function() {
        var quantity1 = $(this).find("input.name").val(),
            quantity2 = $(this).find("input.id").val();

console.log( "this is the text "+$(this).text())
console.log( "this is the part number  "+$(".partNumber").val())
//console.log("This is the class "+$(this).attr('class'))

});
*/



  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });
 const { classes } = this.props;
   const { history: { push } } = this.props;

const {  selected } = this.state;
 var row=0
 var plannedTotal=0
 var actualTotal=0
 var actualCumulativeNew=0
 var plannedCumulativeNew=0
 var minutesLostTotal=0
 var qualityDefectsTotal=0
var earnedHoursTotal=0
var earnedHoursCumulative=0
var id=0
console.log("This is the props jobs at this point "+this.props.jobs)
if(this.props.jobs[this.props.jobs.length - 1]!=undefined)
{
  console.log("last id is length - 1")
var lastId=this.props.jobs[this.props.jobs.length - 1].id
}

else if(this.props.jobs[0]!=undefined)
{
  console.log("last id is slot 0")
  var lastId=this.props.jobs[0].id
}
else {
    console.log("last id is null")
  var lastId=null
}
 const isSelected = this.isSelected(0);
 var that=this

 try {

 if (typeof this.props.jobs[0]!="undefined")
 {
 var firstOperator=this.props.jobs[0].operator
 var firstPartNumber=this.props.jobs[0].partNumber

 }
 var earnedHoursTotalColor="";


var currentTimestamp=moment().format("YYYY-MM-DD HH:mm:ss.SSS")

 //var minutesDifferent=moment(currentTimestamp).diff(savedTimestamp, 'minutes')


var originalCount=1



if(this.state.go == true)
{ partial = <Redirect to="/dataentry" />}

 else
 { partial = <div></div> }


}catch(err) {
 console.log("error in render before table example is returned "+err)
}

var planMadeCount=0

/*NavPills.defaultProps = {
  active: 0

};*/
//this.setState({active:1})
var store = require('amplify-store');
var myStoredValues=store()
  return (
    <div className="biggerfont" key={this.props.jobs}>
      <AppBar position="static" color="default" style={{margin:"0",padding:"0"}}>
             <Toolbar disableGutters={true} style={{margin:"0",padding:"0"}}>
               <div className="wrapper center">
               <div style={{width:"30vw"}} className="">

                   <Typography variant="title" color="inherit">
                          Operator:{' '}{this.props.p2a.operator}{' '}
                    </Typography>






               </div>
               <div style={{width:"30vw"}} className="">
    <Typography variant="title" color="inherit">
                          Workcell:{' '}{myStoredValues.workcell}
    </Typography>
               </div>

               <div style={{width:"30vw"}} className="">
    <Typography variant="title" color="inherit">
                        Shift:{' '}{this.state.shiftSelected.split(" ")[1]}
                      </Typography>

               </div>
               </div>

             </Toolbar>
           </AppBar>
    <Table  multiSelectable={false}  >



               <TableBody style={{width: "100%"}} bodyStyle={{overflowY:'auto', height:"60vh"}}>
                 <TableRow style={{padding:"0", margin:"0"}}>



                   <TableCell padding="checkbox">
                     <Checkbox checked={isSelected} />
                   </TableCell>
                    <TableCell padding="none">
<Typography variant="title"  align='center'>
                      Hour
</Typography >
                    </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Part #
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Planned
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Hour Type
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Actual
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Planned Cum.
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Actual Cum.
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Earned Hours
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Minutes Lost
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Quality Defects
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Plan Made
</Typography >
                     </TableCell>

                 </TableRow>

{this.props.jobs.map((column, index) =>{





function actualHourAndEndHour(shift,hourNumber)
{
  if(shift=="shift 1")
  {
  if (Number(hourNumber)>=1 && Number(hourNumber) <=5)
  {
  var actualHour=Number(hourNumber)+6
  var endHour=actualHour+1

  }
  else if(Number(hourNumber)==6)
  {
  var actualHour=Number(hourNumber)+6
  var endHour=actualHour-11
  }
  else if(Number(hourNumber)>=7)
  {
  var actualHour=Number(hourNumber)-6
  var endHour=actualHour+1
  }
  }
  else if(shift=="shift 2")
  {

  if (Number(hourNumber)>=9)
  {
  var actualHour=Number(hourNumber)-6
  var endHour=actualHour+1

  }

  }
  else if(shift=="shift 3")
  {

  if (Number(hourNumber)==17)
  {
  var actualHour=Number(hourNumber)-6
  var endHour=actualHour+1

  }
  else if (Number(hourNumber)==18)
  {
  var actualHour=Number(hourNumber)-6
  var endHour=1

  }
  else if (Number(hourNumber)>=19)
  {
  var actualHour=Number(hourNumber)-18
  var endHour=actualHour+1

  }
  }

var hourArray=[]
hourArray.push(actualHour)
hourArray.push(endHour)
  return hourArray


}
console.log("This is the column "+column)

console.log("This is the original planned "+column.planned)
if(column.timestamp!=undefined)
{
var columnTimestamp=column.timestamp.split(":")[0]
}
else {
  var columnTimestamp=moment().format("HH:mm:ss.SSS")
}
var timestampHour=actualHourAndEndHour(column.shift,columnTimestamp)[0]
console.log("This is the timestamp hour "+timestampHour)


var actualHour=actualHourAndEndHour(column.shift,column.hourNumber)[0]
var endHour=actualHourAndEndHour(column.shift,column.hourNumber)[1]

console.log("This is the actual hour "+actualHour+" this is the end hour "+endHour)

  row=row+1




console.log("This is the index of the jobs array "+index)
  //jobs.splice(i, 0, {minutesRemaining:minutesRemaining,earnedHour:earnedHour,hourNumber:hourNumber,partNumber:partNumber,planned:doc[hourNumber].planned,actual:doc[hourNumber].actual,plannedcumulative:doc[hourNumber].plannedcumulative,actualcumulative:doc[hourNumber].actualcumulative,calculatedMinutesLost:calculatedMinutesLost,qualityDefects:qualityDefects,minutesRemaining:minutesRemaining, id:doc._id})
  //var count=column.jobCount




//need to get the previous job TS and next job TS if they exist

//if the timestamp hour isn't equal to the actual hour then I need to set the timestamp to the actual hour
console.log("This is the timestamp "+column.timestamp)


console.log("This is the timestamp hour "+timestampHour+" actual hour "+actualHour)
/*
if(timestampHour!=actualHour)
{
  console.log("timestamp hour is not equal to the actual hour, therefore planned is not altered by time job started ")
  console.log("This is the actual hour "+actualHour)
  //need to set the timestamp to actual hour
  var columnTimestamp=moment(actualHour).format("hh:00:00")

}
else
{
  var columnTimestamp=column.timestamp
}
*/
  var columnTimestamp=column.timestamp


  if(column.timestamp!=undefined)
  {
var columnMinutes=columnTimestamp.split(":")[1]
  }
  else {
  var columnMinutes="00"
  }


  console.log("This is the column timestamp "+columnTimestamp+" part number "+column.partNumber)

console.log("This is type of column minutes "+typeof columnMinutes)
console.log("This is the column minutes "+ columnMinutes)
if(columnMinutes=="Invalid date")
{
var columnMinutes=0
console.log("This is an invalid date")

}


var minutesRemaining=60-Number(columnMinutes)


console.log("This is the column minutes "+columnMinutes)
console.log("This is the minutes remaining "+minutesRemaining )

if(column.id==this.props.jobs[0].id && this.props.jobs.length==1)
{
  console.log("This is the first item in the array")
  var plannedFraction=1
}
else if(minutesRemaining==null)
{
  minutesRemaining=60
}
else
{
  var plannedFraction=minutesRemaining/60
}

console.log("This is the planned fraction "+plannedFraction+" and the planned "+planned)

if(index>0)
{
  console.log("The index is greater than 0")
//var previousHourObject=this.props.jobs[index-1]

//console.log("This is the previous hour hour number "+previousHourObject.hourNumber+" and timestamp "+previousHourObject.timestamp)

if(index!=this.props.jobs.length-1)
{

var nextHourObject=this.props.jobs[index+1]
console.log("This is the after hour hour number "+nextHourObject.hourNumber+" and timestamp "+nextHourObject.timestamp)
if(nextHourObject.hourNumber==column.hourNumber)
{
  console.log("There is another hour object this hour ")
var columnMinutesNext=Number(moment(nextHourObject.timestamp).format("m"))
console.log("This is the column minutes next "+columnMinutesNext)
var minutesToSubtract=60-columnMinutesNext
console.log("This is the minutes to subtract "+minutesToSubtract)
//get minutes from end of hour to start of job after the current job
minutesRemaining=minutesRemaining-minutesToSubtract



}
//if there is a job after this job and it's in the same hour




}
else if(index==this.props.length)
{
console.log("This is the last item in the array ")
//determine if there is a previous job in this hour
/*
var minutesToSubtract=60-columnMinutes
console.log("This is the minutes to subtract "+minutesToSubtract)
//get minutes from end of hour to start of job after the current job
minutesRemaining=minutesRemaining-minutesToSubtract
*/




}


}
else
{
  console.log("index is equal to 0 ")
//if the timestamp hour is not equal to the actual hour then show the total planned




  if(index!=this.props.jobs.length-1)
  {

  var nextHourObject=this.props.jobs[index+1]
  if(nextHourObject!=undefined)
  {
      console.log("This is the after hour hour number "+nextHourObject.hourNumber+" and timestamp "+nextHourObject.timestamp)
  }

  }

}

if(column.id==this.props.jobs[0].id && this.props.jobs.length==1)
{
  console.log("This is the first item in the array")
  var plannedFraction=1
}

else
{
  var plannedFraction=minutesRemaining/60
}


console.log("This is the planned fraction "+plannedFraction+" and the planned "+column.planned)
if(column.planned==null)
{
console.log("The planned is null in this hour")
}
/*else if(column.id==this.props.jobs[0].id && this.props.jobs.length==1)
{
  var planned=column.planned
  //this is the first column in the jobs array therefore I don't alter the planned

}*/
else {
  var planned=column.planned*plannedFraction
  planned=Math.round(planned)
}

column.plannedFraction=planned
column.proRatedPlanned=planned

var store = require('amplify-store');

store( "plannedSelected", planned );




//column.planned=planned
/*
  if(count!=originalCount)
  {

    plannedCumulative=0
    actualCumulative=0

    originalCount=count
  }*/
if(column!=undefined)
{
  var currentOperator=column.operator
  var currentPartNumber=column.partNumber


if(currentOperator!=firstOperator || currentPartNumber!=firstPartNumber)
{

  firstOperator=column.operator
   firstPartNumber=column.partNumber

//zero out planned cum. and actual cum.
plannedCumulativeNew=0
actualCumulativeNew=0

}
if(planned==null)
{

}
else
{
plannedCumulativeNew=plannedCumulativeNew+Number(planned)

}

if(column.actual==null)
{
actualCumulativeNew=actualCumulativeNew+0
}
else {
  actualCumulativeNew=actualCumulativeNew+Number(column.actual)
}





   const isSelected = this.isSelected(column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);

if (Number(column.actual)>0&&Number(planned)>0)
{
    var earnedHour=Number(column.actual)/Number(planned)
      earnedHour=Number(earnedHour.toFixed(2))

  }
else
{
  var earnedHour = 0.00
}

if (column.partNumber.length>0)
{
  var hourType="Full"
}
else {
  var hourType=null

}

if(column.hourNumber==this.props.serverHour)
{

earnedHour=earnedHour.toFixed(2);
var earnedHourColor="";
//exclamation point color should be null
}
else if (Number(earnedHour)>=0 &&earnedHour!=null )
{

earnedHour=earnedHour.toFixed(2);

if(earnedHour<1)
{
  var earnedHourColor="red";
}
else if(earnedHour>=1)
{
  var earnedHourColor="green";
}

}
else if(column.partNumber.trim()=="" && planned==0 &&column.actual==0)
{

  var earnedHour=" "
  var earnedHourColor="green";
}
else {
  var earnedHour=" "
  var earnedHourColor="";
}





if(earnedHourColor=="")
{
console.log("earned hour color is empty, hour "+column.hourNumber)
var exclamationColor="transparent";
}
else if (column.minutesRemaining>0 && earnedHour<1 && column.partNumber.trim()!="")
{
  console.log("minutes remaining is 0, eh ls 1, hour number gt 1, hour "+column.hourNumber)
var exclamationColor="white";
}
else
{
//console.log("else for exclamation color, hour "+column.hourNumber)
  var exclamationColor='transparent'
}
//hourObject["calculatedMinutesLost"]= calculatedMinutesLost
//hourObject["minutesRemaining"]= calculatedMinutesLost-aObjectOriginal[hour]["totalMinutesLost"]



//need to determine if the current column is the last item in the jobs array
//
//console.log("this is the id number "+column.id+" this is the hour number "+column.hourNumber)
//console.log("this is the id for last entry in jobs array "+this.props.jobs[this.props.jobs - 1].id+" this is the hour number"+this.props.jobs[this.props.jobs - 1].hourNumber )

var currentId=column.id

if(lastId!=currentId)
{
  planMadeCount=planMadeCount+1
plannedTotal=plannedTotal+Number(planned)
actualTotal=actualTotal+Number(column.actual)
}


  minutesLostTotal=minutesLostTotal+Number(column.calculatedMinutesLost)


if(column.qualityDefectsTotal==null)
{

}
else
{
  qualityDefectsTotal=qualityDefectsTotal+Number(column.qualityDefectsTotal)
}

earnedHoursTotal=earnedHoursTotal+Number(earnedHour)
earnedHoursCumulative=actualTotal/plannedTotal

planMadeColor=earnedHoursTotal/planMadeCount



if(planMadeColor<1)
{

  earnedHoursTotalColor="red";

}
else if(planMadeColor>=1)
{

  earnedHoursTotalColor="green";

}

var qualityDefects=0



var id=column.id

                 return (

                     <TableRow
                       className="tablerow1"
                       hover
                       style={{margin:"0", padding:"0"}}
                       role="checkbox"
                       aria-checked={isSelected}
                       tabIndex={-1}
                      key={column.hourNumber+" "+column.id}
                       selected={isSelected}
                     >

                       <TableCell padding="checkbox" name={column.partNumber} onClick={event => this.handleRowClickSelect(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName)} >
                         <Checkbox checked={isSelected} />
                       </TableCell>

                       <TableCell  padding="none" onClick={event =>{this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true }); this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>

                         <Typography variant="title" align='center' >
                         {actualHour} to {endHour}

                         </Typography >

                       </TableCell>


                       <TableCell padding="none" id={column.id} >
                         <Typography variant="title" align='center'>
                         <KeyboardLoadPartNumberTest partNumber={column.partNumber}
                           serverHour={this.props.serverHour}
                           className="partNumber"
                           name="partNumber"
                           onChange={this.operatorInputChanged}
                           onAccepted={this.operatorInputAccepted}
                           shift={column.shift}
                           id={column.id}
                           hour={column.hourNumber}
                           jobs={this.props.jobs}
                           dispatch={this.props.dispatch}
                           ref="partNumber" sendData={this.getData}
                           fieldName={column.fieldName}

                            />

                         </Typography >
                       </TableCell>

                         <TableCell padding="none" id={column.id}>
                           <Typography variant="title" align='center'>
                             <KeyboardLoad dispatch={this.props.dispatch}
                               shiftSelected={this.state.shiftSelected}
                               name="planned"
                               fieldName={column.fieldName}
                               shift={column.shift}
                               data={planned}
                               id={column.id}
                               hour={column.hourNumber}
                               jobs={this.props.jobs}
                               serverHour={this.props.serverHour}
                               ref="planned"
                               sendData={this.getData}/>

                             </Typography >
                         </TableCell>

                          <TableCell id={column.id} padding="none" onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                            <Typography variant="title" align='center'>
                                      {hourType}

                              </Typography >
                          </TableCell>

                          <TableCell padding="none" id={column.id}>
                            <Typography variant="title" align='center'>
                            <KeyboardLoad dispatch={this.props.dispatch}
                              shiftSelected={this.state.shiftSelected}
                              name="actual"
                              fieldName={column.fieldName}
                              shift={column.shift}
                              data={column.actual}
                              id={column.id}
                              hour={column.hourNumber}
                              jobs={this.props.jobs}
                              serverHour={this.props.serverHour}
                              ref="actual"
                              sendData={this.getData} />
                            </Typography >
                        </TableCell>

                          <TableCell id={column.id} padding="none" onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>

                            <Typography variant="title" align='center'>
                            {plannedCumulativeNew}

                            </Typography >
                          </TableCell>

                          <TableCell id={column.id} padding="none" onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                            <Typography variant="title" align='center'>

                            {actualCumulativeNew}
                            </Typography >
                          </TableCell>

                          <TableCell id={column.id} onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                            <Typography variant="title" align='center'>

                           {earnedHour}
                            </Typography >
                            </TableCell>


                            <TableCell id={column.id} padding="none" onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                              <Typography variant="title" align='center'>

                               {column.calculatedMinutesLost}
                                </Typography >

                              </TableCell>


                            <TableCell id={column.id} padding="none" onClick={event => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true });this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                                <Typography variant="title" align='center'>

                            {column.qualityDefectsTotal}
                          </Typography >
                              </TableCell>


                         <TableCell  padding="none" onClick={event => {this.handleRowClick(event, column.hourNumber+"*"+column.id+"*"+column.partNumber+"*"+column.fieldName);}}>
                         <Typography variant="title" align='center'>
                         <Button  variant="fab"  mini={true} style={{backgroundColor: earnedHourColor, margin:"0 auto", height:"70%"}}  className="center" onClick={() => {this.props.dispatch({type: 'UPDATE_HOUR_OBJECT',payload: column });this.setState({ go: true }); setTimeout(function() {/*context.router.history.push('/dataentry')*/ }, 750); console.log("clicked the div");}}>
                                  <Icon style={{color:exclamationColor}} className='fas fa-exclamation' />
     </Button>




       </Typography >
        </TableCell>
                 {partial}
                     </TableRow>

                   );

}

       })}
       <TableRow
         hover
         className="tablerow1"
         role="checkbox"
         aria-checked={isSelected}
         tabIndex={-1}
        key="total"
         selected={isSelected}
       >
         <TableCell padding="checkbox" name="total" >
           <Checkbox checked={isSelected} />
         </TableCell>

         <TableCell  padding="none">
           <Typography variant="title" align='center'>
           Total
           </Typography >
         </TableCell>
         <TableCell padding="none">
           <Typography variant="title" align='center'>

           </Typography >
         </TableCell>
           <TableCell padding="none">
             <Typography variant="title" align='center'>


               </Typography >
           </TableCell>
            <TableCell padding="none">
              <Typography variant="title" align='center'>

                </Typography >
            </TableCell>
            <TableCell padding="none">
              <Typography variant="title" align='center'>

              </Typography >
          </TableCell>
            <TableCell padding="none" id={id}>

              <Typography variant="title" align='center'>
                  {plannedTotal}
              </Typography >
            </TableCell>
            <TableCell padding="none" id={id}>
              <Typography variant="title" align='center'>
              {actualTotal}
              </Typography >
            </TableCell>
            <TableCell id={id} >
              <Typography variant="title" align='center'>
                  {earnedHoursTotal.toFixed(2)}
              </Typography >
              </TableCell>
              <TableCell padding="none" id={id}>
                <Typography variant="title" align='center'>
                    {minutesLostTotal}
                  </Typography >

                </TableCell>
              <TableCell padding="none" id={id}>
                  <Typography variant="title" align='center'>
                    {qualityDefectsTotal}
            </Typography >
                </TableCell>

           <TableCell padding="none" >
           <Typography variant="title" align='center'>
            <Button variant="fab" mini style={{backgroundColor: earnedHoursTotalColor, height:"70%"}}  className="" >

</Button>
</Typography>
</TableCell>



       </TableRow>



               </TableBody>
             </Table>



<Button color="info" round onClick={this.shift1}>Shift 1</Button>
<Button color="info" round onClick={this.shift2}>Shift 2</Button>
<Button color="info" round onClick={this.shift3}>Shift 3</Button>



</div>

    );

}

}

TableExampleControlled.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  })
}


class KeyboardLoadPartNumberTest extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
//this.handleChangeOperator=this.handleChangeOperator.bind(this);
//this.handleKeyUp = this.handleKeyUp.bind(this);
this.state={ partNumber:props.partNumber}

}
  componentWillMount() {

//import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

/*
if(Session.get("partNumber")!=undefined)
{
  this.setState({partNumber:Session.get("partNumber")});

}
else {
  Session.set("partNumber",null)
this.setState({partNumber:""});
}
*/

}


componentDidMount()
{

  var store = require('amplify-store');
  var myStoredValues=store()
$(".partNumber").autocomplete({
    source: function (request, response) {

        axios.get('/partnumberRetrieve',{
        params: {
          department: myStoredValues.department,
           partNumber: request.term,
            }
      })
      .then(responseAxios => {
         response(responseAxios.data.slice(0, 5));
      //  response(responseAxios.data);


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

operatorInputChanged = (data) => {
var that=this
console.log("Part number has been changed, here is the data "+data)

//Need to change the part number for this row / id in the jobs array
//this will be similar to what happens when the actual or plan changes



// this.setState({ operator: data });
//this.setState({ input: data });
this.setState({ partNumber: data});

var focused = $(':focus').val()

function changeValue( id, value,hour ) {
  var projects=that.props.jobs
 //console.log("calling change value here is the id, value, hour, and type "+id+","+value+","+hour+","+type)
   for (var i in projects) {
     if (projects[i].id == id ) {
console.log("id is the same and hour number is the same ")


         console.log("type is part number, here is the value "+value)
      //   var actual=value
      //   var planned=projects[i].planned
      console.log("This is the part number before changing the partnumber "+projects[i].partNumber)
        projects[i].partNumber = value
            console.log("This is the part number after changing the partnumber "+projects[i].partNumber)





    //  projects[i].calculatedMinutesLost = data;
        break; //Stop this loop, we found it!
     }
   }


   that.props.dispatch({
           type: 'UPDATE_JOBS_ARRAY',
           payload: projects
       });




}




    changeValue(this.props.id,data,this.props.hour,)
    //now update the jobs state or send it to the controlled table
    //this.props.sendData(projects)

  /*  this.props.dispatch({
            type: 'UPDATE_JOBS_ARRAY',
            payload: projects
        });*/




//Session.setPersistent("partNumber",data)
}

operatorInputAccepted = (data) => {


//Session.setPersistent("partNumber",data)
}


  render() {


    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }


    return (
<div style={{ display: 'inline-block', padding:"0", margin:"0"}}>

  <Keyboard
    value={this.state.partNumber}
    name='keyboard'
    className="partNumber biggerfont"
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
    style={{ width:'10vw', padding:"0", margin:"0",color:"black"}}

    onChange={this.operatorInputChanged}
    onAccepted={this.operatorInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}

class KeyboardLoad extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);

  //this.handleChangeOperator=this.handleChangeOperator.bind(this);
  //this.handleKeyUp = this.handleKeyUp.bind(this);
  this.state={data:props.data}
}
  componentWillMount() {

    import 'jquery-ui-bundle'
    import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
    import "../../css/formAlign.css"
console.log("component will mount in graph menu")







}

componentWillReceiveProps(nextProps){
  //console.log("This is the next props "+nextProps.data)
        if(nextProps.data !== this.props.data){
          //  console.log("props aren't equal, here is the value updating "+ nextProps.data)
            this.setState({data:nextProps.data});
            this.setState({input:nextProps.data});
        }
    }


componentDidMount()
{
  //console.log("keyboard component did mount")

//console.log("this is props minuts remaining "+this.props.hourObject.minutesRemaining)



  var self=this
  $.keyboard.keyaction.enter = function(base){
    //console.log("enter key was pressed")
    if (base.el.tagName === "INPUT") {
      base.accept();      // accept the content
      $('form').submit(); // submit form on enter
    } else {
      base.insertText('\r\n'); // textarea
    }
  };



}




operatorInputChanged = (data) => {
console.log("inputting into keyboardload")
// this.setState({ operator: data });
this.setState({ input: data });

var numbers = /^[0-9]+$/;

      if(!data.match(numbers)&&data!="")
      {
      alert('Please input numeric characters only');
    //  document.form1.text1.focus();
      //remove the last character inputted
      data= data.slice(0, -1);
      console.log("This is the data with last character removed "+data)
      $(':focus').val(data)
      }

var focused = $(':focus').val()
var that=this
function changeValue( id, value,type,shiftSelected ) {
  var projects=that.props.jobs
//  console.log("calling change value ")
   for (var i in projects) {
     if (projects[i].id == id) {

//make actual 0 if it's null or empty string
if(projects[i].actual==null||projects[i].actual=="")
{
  projects[i].actual=0
}
if(projects[i].planned==null||projects[i].planned=="")
{
  projects[i].planned=0
}


       if(type=="actual")
       {
         var actual=value
         var planned=projects[i].proRatedPlanned
        projects[i].actual = value
        }
        else
        {

          var actual=projects[i].actual
          var planned=value
          projects[i].planned = value
        }

        if (Number(actual)>0&&Number(planned)>0)
        {
            var earnedHour=Number(actual)/Number(planned)
              earnedHour=Number(earnedHour.toFixed(2))

              projects[i].earnedHour = earnedHour
              if(earnedHour<1)
              {
                projects[i].earnedHourColor="red";
              }
              else if(earnedHour>=1)
              {
                projects[i].earnedHourColor="green";
              }

        }
        else
        {
          projects[i].earnedHour = 0.00
        }

console.log("This is the planned "+planned+" the actual "+actual)
console.log("This is the minutes remaining before changing it"+projects[i].minutesRemaining)
       if(planned-actual>0)
       {
       var calculatedMinutesLost= (1 - (actual/planned)) * 60
       calculatedMinutesLost=Math.round(calculatedMinutesLost)
       projects[i].calculatedMinutesLost = calculatedMinutesLost
       if(projects[i].minutesRemaining==null)
{
  console.log("Minutes remaining is null")
}
else if(projects[i].minutesRemaining>calculatedMinutesLost)
{
console.log("Minutes remaining is greater than minutes lost therefore I'm resetting it.")
projects[i].minutesRemaining=calculatedMinutesLost
}

        console.log("this is the calculated minutes lost "+calculatedMinutesLost+" and projects calculated minutes lost "+projects[i].calculatedMinutesLost)
       }
       else if(planned-actual==0)
       {
console.log("planned - actual is 0")
projects[i].calculatedMinutesLost = 0
         if(projects[i].minutesRemaining> projects[i].calculatedMinutesLost)
         {
         console.log("Minutes remaining is greater than minutes lost therefore I'm resetting it.")
         projects[i].minutesRemaining= projects[i].calculatedMinutesLost
         }

       }
       else if(actual==0)
       {

       projects[i].calculatedMinutesLost =60


       // console.log("this is the calculated minutes lost "+calculatedMinutesLost)
       }
       else
       {
         projects[i].calculatedMinutesLost = 0

      // calculatedMinutesLost=0
       }
console.log("This is the minutes remaining after"+projects[i].minutesRemaining)
    //  projects[i].calculatedMinutesLost = data;
        break; //Stop this loop, we found it!
     }
   }//end of for loop

   that.props.dispatch({
           type: 'UPDATE_JOBS_ARRAY',
           payload: projects
       });

       if(projects[0].partNumber!="")
        {
          //need to send in the server hour here

                        var newHour= addNewHour(projects,shiftSelected,that.props.serverHour)
                    //that.setState({ jobs: jobs})

                    that.props.dispatch({
                            type: 'ADD_HOUR',
                            payload: newHour
                        });
        }


}




changeValue(this.props.id,data,this.props.name,this.props.shiftSelected)
//now update the jobs state or send it to the controlled table
 //this.props.sendData(projects)
//set the calculated minutes lost


console.log("About to update the jobs object in keyboardload")



//this.setState({ operator: $(':focus').val() });


}


operatorInputAccepted = (data) => {

console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());



}


  render() {
//console.log("rendering the keyboard")
if (this.state.data!=undefined)
{
//  console.log("This is state of data "+ this.state.data +" this is state of input "+this.state.input+ " this is the name "+this.props.name+" this is the props data "+this.props.data+" this is data test "+this.state.dataTest)

}

import Keyboard from 'react-virtual-keyboard';



    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }
var self=this
//console.log("This is the props id "+this.props.id)

    return (
<div style={{ width:'4vw',  display: 'inline-block', padding:"0", margin:"0"}}>

  <Keyboard
      className="keyboard biggerfont"

  value={this.state.data}
    name={this.props.name}
    options={{
      type:"input",
      layout: 'num',
      alwaysOpen: false,
      userClosed:false,
      useWheel: false,
      stickyShift: false,
      id:"keyboard",
      color: "light",
      updateOnChange: true,
      initialFocus: true,
      position: {
          of: $(window), // null = attach to input/textarea; use $(sel) to attach elsewhere
          my: 'center center',
          at: 'center bottom',
          at2: 'center center' // used when "usePreview" is false
      },
      appendLocally:true,

      stayOpen:false,
      usePreview:true
    }}
style={{ width:'4vw', padding:"0", margin:"0",color:"black"}}
    onChange={this.operatorInputChanged}
    onAccepted={this.operatorInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}
