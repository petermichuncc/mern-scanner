import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import AutoComplete from 'material-ui/AutoComplete';
 import DatePicker from 'material-ui/DatePicker';
 import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { browserHistory } from 'react-router';
import {browserHistory,withRouter} from "react-router-dom"
import PropTypes from 'prop-types';
import {Redirect, router } from 'react-router'
import "../../css/mdb.css"
import "../../css/keyboard.css"
 import "../../css/jquery-ui.css"
import "../../css/digitalplantoactual.css"
import request from 'superagent/superagent';
import { connect } from "react-redux";
 //import KeyboardLoadComments from './plantoactualshift.jsx';

import 'typeface-roboto'

import Keyboard from 'react-virtual-keyboard';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import cookie from 'react-cookies'
  import moment from "moment";
//import 'virtual-keyboard/dist/js/jquery.keyboard.js'
//import "../../js/jquery.keyboard.extension-all.js"
//import Keyboard from 'react-virtual-keyboard';

//import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
if (Meteor.isClient) {

//  require('./client-only-file.js');
}






const styles = {
  headline: {
    fontSize: 24,
  //  paddingTop: 16,
    //marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
  //  padding: 10,
  },
};



























function mapStateToProps(state){
  console.log("this is state "+state+" type of state "+typeof state+" keys "+Object.keys(state))
  console.log("This is the employee "+state.get("hour"))
  console.log("This is the jobs slot 0 in map state to props"+state.get("jobs")[0].hourNumber)
    return {
        minutesRemaining: state.get("hour").minutesRemaining,
        hourObject:state.get("hour"),
        color:state.get("hour").color,
        jobs:state.get("jobs")

    }
}

function mapDispatchToProps(dispatch) { return { dispatch, someActions:bindActionCreators(someActions, dispatch) } }


function Downtime(props) {
  const isLoggedIn = props.isLoggedIn;
  //console.log("This is the isloggedin for downtime"+isLoggedIn)
//const totalAmount=props.totalAmount
  console.log("this is the hour object in downtime "+props.hourObject)



  var jobObject=props.hourObject
  var hour=cookie.load("hour")
  console.log("This is the planned for this hour "+jobObject.planned)
  //console.log("This is the selected part number "+response.data.partNumber)
  //this.setState({ partNumber: jobObject.partNumber})
 var losttime=jobObject.lostTime
 var downtime=jobObject.downtime
 var qualityDefects=jobObject.qualityDefects

 for (var key in downtime) {
    if (downtime.hasOwnProperty(key)) {

      //var keyLocation="[name=losttime,"+key+"]"
 //the key will be all the names of the sub-categories
 //the value will be the name of the downtime

 //console.log(key, downtime[key])
 var subCategory=key
 var subCategoryObject=downtime[key]
 Object.keys(subCategoryObject)
   .forEach(function eachKey(keyNew) {
   //  alert(key); // alerts key
     //alert(foo[key]); // alerts value

   //console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

     $("[name='downtime,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

 //var name="downtime,"+subCategory+","+keyNew
 //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
 //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



   });



  //$("[name='downtime,"+key+"']").val(downtime[key])

    }
 }













/*if(typeof props.houbObject!=undefined)
{
console.log("This is the mr in function downtime "+props.hourObject.minutesRemaining)
}*/
  if (isLoggedIn =="datacom") {

        return <DowntimeDatacom dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="packing") {

        return <DowntimePacking dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="manual") {

        return <DowntimeManual dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="scd") {

        return <DowntimeScd dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="manualboxes") {

        return <DowntimeManualBoxes dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="metals") {

        return <DowntimeMetals dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="raceway") {

        return <DowntimeRaceway dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="wiu") {

        return <DowntimeWiu dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="autoboxes") {

        return <DowntimeAutoboxes dispatch={props.dispatch}/>;
  }
  else if (isLoggedIn =="husky") {

        return <DowntimeHusky  dispatch={props.dispatch} sendData={props.sendData} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="injection") {

        return <DowntimeInjection dispatch={props.dispatch}/>;
  }
  else{

    return null
  }

}

function Defects(props) {
  const isLoggedIn = props.isLoggedIn;
  //console.log("This is the isloggedin for downtime"+isLoggedIn)
//console.log("this is the hour object in defects"+props.hourObject)



  var jobObject=props.hourObject
  //var hour=Session.get("hour")
  console.log("This is the planned for this hour "+jobObject.planned)

//  this.setState({ partNumber: response.data.partNumber})
 var losttime=jobObject.lostTime
 var downtime=jobObject.downtime
 var qualityDefects=jobObject.qualityDefects

 for (var key in qualityDefects) {
    if (qualityDefects.hasOwnProperty(key)) {

 //console.log(key, qualityDefects[key])
      //var keyLocation="[name=losttime,"+key+"]"
      var subCategory=key
      var subCategoryObject=qualityDefects[key]
      Object.keys(subCategoryObject)
        .forEach(function eachKey(keyNew) {
        //  alert(key); // alerts key
          //alert(foo[key]); // alerts value

        //console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

          $("[name='qualitydefects,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

      //var name="downtime,"+subCategory+","+keyNew
      //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
      //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



        });

  //$("[name='qualitydefects,"+key+"']").val(qualityDefects[key])

    }
 }






  if (isLoggedIn =="datacom") {

        return <DefectsDatacom dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="packing") {

        return <DefectsPacking dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="manual") {

        return <DefectsManual dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="scd") {

        return <DefectsScd dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="manualboxes") {

        return <DefectsManualBoxes dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="metals") {

        return <DefectsMetals dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="raceway") {

        return <DefectsRaceway dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="wiu") {

        return <DefectsWiu dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="autoboxes") {

        return <DefectsAutoboxes dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="husky") {

        return <DefectsHusky  dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else if (isLoggedIn =="injection") {

        return <DefectsInjection dispatch={props.dispatch} hourObject={props.hourObject}/>;
  }
  else{

    return null
  }

}


/*
function HuskyDowntime(props) {


const isLoggedIn = props.isLoggedIn;



      if (isLoggedIn =="moldingMachine") {

          <HuskyMoldingMachine downtimeClick={this.downtimeClick}/>
      }
      else if (isLoggedIn =="robot") {

        <HuskyRobot downtimeClick={this.downtimeClick}/>
      }
}
*/

// App component - represents the whole app
class KeyboardLoad extends Component {
  constructor(props) {
     super(props);
     //keyboardload component
     //this.handleChange = this.handleChange.bind(this);

//this.handleChangeOperator=this.handleChangeOperator.bind(this);
//this.handleKeyUp = this.handleKeyUp.bind(this);
this.state={data:props.data}
this.state={hourObject:props.hourObject}

}
  componentWillMount() {

    import 'jquery-ui-bundle'
    import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
    import "../../css/formAlign.css"
console.log("component will mount in graph menu")

if(cookie.load("operator")!=undefined)
{
  this.setState({operator:cookie.load("operator")});

}
else {

}






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


  if (this.props.name =="actual")
  {




}
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
/*
  $('input').bind('beforeClose', function(e, keyboard, el, accepted){
    console.log( "This is the className "+el.className)
    var txt = "Virtual Keyboard for id" + el.id +" class "+el.className+ " is about to close, and it's contents were ";

    txt += (accepted ? 'accepted' : 'ignored');
    txt += '. Current content = ' + el.value;
    txt += '. Original content = ' + keyboard.originalContent;
  console.log("This is the first class name slot "+el.className.split(" ")[0])
    console.log(txt);
  if (el.className.split(" ")[0]=="operator")
  {

    console.log("setting the operator state")
    Session.setPersistent("operator",el.value)
    self.setState({
  operator: el.value
  });
  console.log("This is the operator state after it changed "+self.state.operator)
  }
  else if (el.className.split(" ")[0]=="partNumber")
  {
    Session.setPersistent("partnumber",el.value)


  }
  //
  //$('#keyboard').getkeyboard();
  console.log("trying to accept keyboard")
  });
*/

/*
  $(".operator")
     .addAutocomplete({
  })*/


}


jobUpdateShift = (aObject,category,subCategory,aObjectOriginal) => {
  try{

    //Need to send all the variables associated with this job

    console.log("calling the jobUpdate,"+ aObject +"category "+ category + "subcategory"+ subCategory+" this is the aObjectOriginal minutes remaining "+aObjectOriginal.minutesRemaining)



//console.log("These are the keys in the job object "+Object.keys(aObjectOriginal["lostTime"]))

console.log("These are the keys in aObject "+Object.keys(aObject))


//aObjectOriginal[hour]
if(category=="comment")
{



console.log("The category is comments")


console.log("This is the aObject object sent "+aObject)
$.extend(true, aObjectOriginal, aObject);







}

else if(category=="losttime")
{
console.log("category is lost time")
  console.log("This is the minutes remaining of the object sent to lost time before "+aObjectOriginal.minutesRemaining)
console.log("this is the category "+category+" the contents "+aObject)
console.log("this is the aObject sent "+Object.keys(aObject))



//    var aObjectOriginal=Shifts.find(object).fetch().pop()
//  var aObjectOriginal=jobObject[hour]
var aObjectNew={}

//aObjectNew["lostTime"]=aObject

Object.assign(aObjectOriginal["lostTime"],aObject)
//Need to take object and add a name to it from the category
//  console.log("this is the object copied "+aObjectNew["losttime"])

//$.extend(true, aObjectOriginal[fieldName], aObjectNew);

//$.extend(aObjectOriginal,aObjectNew)

var lostTimeTotal=0
for (var key in aObjectOriginal["lostTime"]) {
lostTimeTotal=lostTimeTotal+Number(aObjectOriginal["lostTime"][key])
//console.log("This is the aObject contents "+aObject[key])
//  console.log(key, aObject[key]);

}
console.log("This is the lost time total "+lostTimeTotal)
aObjectNew["lostTimeTotal"]=lostTimeTotal
var downtimeTotal=0
var downtime=aObjectOriginal["downtime"]
for (var key in downtime) {
// lostTimeTotal=lostTimeTotal+Number(aObject[key])
// console.log("This is the aObject contents "+downtimeOrDefects[key])
var categoryValue=downtime[key]

console.log("this is the category value "+categoryValue)
for (var key in categoryValue) {
  downtimeTotal=downtimeTotal+Number(categoryValue[key])
// lostTimeTotal=lostTimeTotal+Number(aObject[key])
// console.log("This is the aObject contents "+downtimeOrDefects[key])

}




}
console.log("This is the downtime total "+downtimeTotal)
aObjectNew["totalMinutesLost"]=lostTimeTotal+downtimeTotal
aObjectNew["minutesRemaining"]= aObjectOriginal["calculatedMinutesLost"]-aObjectNew["totalMinutesLost"]
//console.log("These are the keys of aobjectnew  "+Object.keys(aObjectNew["lostTime"]))


//$.extend(aObjectOriginal,aObjectNew)
//let merged = {...aObjectOriginal, ...aObjectNew};
Object.assign(aObjectOriginal,aObjectNew)
//console.log("There are keys of merge "+Object.keys(merged["lostTime"]))
//Session.set("hourObject",aObjectOriginal)
//console.log("This is minutes remaining in object "+aObjectNew.minutesRemaining)
//console.log("This is hour object session minutes remaining  "+Session.get("hourObject").minutesRemaining)
//$.extend(true, aObjectOriginal[fieldName], aObjectNew);

console.log("These are the keys of aobject original with aObjectnew added "+Object.keys(aObjectOriginal["lostTime"]))

return aObjectOriginal
/*
Shifts.update(
object,

//object here
aObjectOriginal

,
{ upsert: true }
)
*/

}
else if (category=="downtime")
{


  console.log("This is the minutes remaining of the object sent to downtime before "+aObjectOriginal.minutesRemaining)
console.log("category is downtime or quality defects")

console.log("this is the category "+category+" subCategory"+subCategory +" the contents "+aObject)
/*var hourAndId=fieldName+".id"
console.log("This is the hour and id "+hourAndId)
var object={}
object[hourAndId]=id*/

//   var aObjectOriginal=Shifts.find(object).fetch().pop()

var downtimeTotal=0



var aObjectSubCategory={}
aObjectSubCategory[subCategory]=aObject
console.log("This is the aobject sent to downtime "+Object.keys(aObject))
//console.log("Keys in aobjectoriginal downtime sub category"+Object.keys(aObjectOriginal[category][subCategory]))
//now I have the subcategory holding the object with the downtime or defect code
//I need to add this to the current category in the aObjectOriginal
console.log("This is the category "+category+" is there subcategory "+subCategory)
//console.log("here are the keys of aobject sub category"+Object.keys(aObjectSubCategory[subCategory]))
//console.log("here are the keys of downtime before adding"+Object.keys(aObjectOriginal[category][subCategory]))
if(aObjectOriginal[category][subCategory]==undefined)
{
  aObjectOriginal[category][subCategory]={}
}
Object.assign(aObjectOriginal[category][subCategory], aObject);
//console.log("Keys in aobjectoriginal downtime sub category after adding new sub"+Object.keys(aObjectOriginal[category][subCategory]))

console.log("here are the keys of downtime after adding"+Object.keys(aObjectOriginal[category]))

//let aObjectOriginal = {...aObjectOriginal, ...aObjectNew};

//$.extend(aObjectOriginal[category],aObject)
//$.extend(true, aObjectOriginal[fieldName][category], aObjectSubCategory);

var downtimeOrDefects=aObjectOriginal[category]
var categoryTotal=0
for (var key in downtimeOrDefects) {
// lostTimeTotal=lostTimeTotal+Number(aObject[key])
// console.log("This is the aObject contents "+downtimeOrDefects[key])
var categoryValue=downtimeOrDefects[key]

console.log("this is the category value "+categoryValue)
for (var key in categoryValue) {
  categoryTotal=categoryTotal+Number(categoryValue[key])
// lostTimeTotal=lostTimeTotal+Number(aObject[key])
// console.log("This is the aObject contents "+downtimeOrDefects[key])

}
// console.log("string before removing non numeric "+categoryValue)

/*
for (var key in categoryValue) {
    if (categoryValue.hasOwnProperty(key)) {
        console.log(key + " -> " + categoryValue[key]);
        categoryTotal=categoryTotal+Number(categoryValue[key])
    }
}
*/
console.log("This is the categoryTotal "+categoryTotal)
// categoryValue=categoryValue.replace(/\D/g,'');

// console.log("This is the number after removing "+number)

}
var lostTimeTotal=0
for (var key in aObjectOriginal["lostTime"]) {
lostTimeTotal=lostTimeTotal+Number(aObjectOriginal["lostTime"][key])
//console.log("This is the aObject contents "+aObject[key])
//  console.log(key, aObject[key]);

}
console.log("This is the lost time total "+lostTimeTotal)


var totalObject={}
totalObject["downtimeTotal"]=categoryTotal
console.log("This is the lost time total in downtime entry "+lostTimeTotal+" this is the category total "+categoryTotal)
totalObject["totalMinutesLost"]=lostTimeTotal+categoryTotal
totalObject["minutesRemaining"]= aObjectOriginal["calculatedMinutesLost"]-totalObject["totalMinutesLost"]
//let merged = {...aObjectOriginal, ...totalObject};
Object.assign(aObjectOriginal,totalObject)
//console.log("There are keys of merge "+Object.keys(merged["downtime"]))
//Session.set("hourObject",aObjectOriginal)
//console.log("This is minutes remaining in object "+aObjectNew.minutesRemaining)
//console.log("This is hour object session minutes remaining  "+Session.get("hourObject").minutesRemaining)
//$.extend(true, aObjectOriginal[fieldName], aObjectNew);

console.log("These are the keys of aobject original with aObjectnew added "+Object.keys(aObjectOriginal["lostTime"]))

return aObjectOriginal

//  aObjectNew[category]=


//new object should be added to category

//Need to take object and add a name to it from the category
//  console.log("this is the object copied "+aObjectNew["losttime"])
//$.extend(true, aObjectOriginal[hour], aObjectNew);


}
else if (category=="qualityDefects")
{


  var downtimeTotal=0



  console.log("This is the aobject sent to downtime "+Object.keys(aObject))
  //now I have the subcategory holding the object with the downtime or defect code
  //I need to add this to the current category in the aObjectOriginal
  console.log("This is the minutes remaining of the object sent to quality defects before "+aObjectOriginal.minutesRemaining)
  console.log("This is the category "+category+" is there subcategory "+subCategory)

  //console.log("here are the keys of defects before adding"+Object.keys(aObjectOriginal[category][subCategory]))
  if(aObjectOriginal[category][subCategory]==undefined)
  {
    aObjectOriginal[category][subCategory]={}
  }
Object.assign(aObjectOriginal[category][subCategory], aObject);
//  console.log("here are the keys of defects after adding"+Object.keys(aObjectOriginal[category][subCategory]))


  //ar downtime=aObjectOriginal["downtime"]
  var downtimeTotal=0
  var downtime=aObjectOriginal["downtime"]
  for (var key in downtime) {
  // lostTimeTotal=lostTimeTotal+Number(aObject[key])
  // console.log("This is the aObject contents "+downtimeOrDefects[key])
  var categoryValue=downtime[key]

  console.log("this is the category value "+categoryValue)
  for (var key in categoryValue) {
    downtimeTotal=downtimeTotal+Number(categoryValue[key])
  // lostTimeTotal=lostTimeTotal+Number(aObject[key])
  // console.log("This is the aObject contents "+downtimeOrDefects[key])

  }




  }
  console.log("This is the downtime total in quality defects "+downtimeTotal)
  var lostTimeTotal=0
  for (var key in aObjectOriginal["lostTime"]) {
  lostTimeTotal=lostTimeTotal+Number(aObjectOriginal["lostTime"][key])
  //console.log("This is the aObject contents "+aObject[key])
  //  console.log(key, aObject[key]);

  }





  //let aObjectOriginal = {...aObjectOriginal, ...aObjectNew};

  //$.extend(aObjectOriginal[category],aObject)
  //$.extend(true, aObjectOriginal[fieldName][category], aObjectSubCategory);

  var downtimeOrDefects=aObjectOriginal[category]
  var categoryTotal=0
  for (var key in downtimeOrDefects) {
  // lostTimeTotal=lostTimeTotal+Number(aObject[key])
  // console.log("This is the aObject contents "+downtimeOrDefects[key])
  var categoryValue=downtimeOrDefects[key]

  console.log("this is the category value "+categoryValue)
  for (var key in categoryValue) {
    categoryTotal=categoryTotal+Number(categoryValue[key])
  // lostTimeTotal=lostTimeTotal+Number(aObject[key])
  // console.log("This is the aObject contents "+downtimeOrDefects[key])

  }
  // console.log("string before removing non numeric "+categoryValue)

  /*
  for (var key in categoryValue) {
      if (categoryValue.hasOwnProperty(key)) {
          console.log(key + " -> " + categoryValue[key]);
          categoryTotal=categoryTotal+Number(categoryValue[key])
      }
  }
  */
  console.log("This is the categoryTotal "+categoryTotal)
  // categoryValue=categoryValue.replace(/\D/g,'');

  // console.log("This is the number after removing "+number)

  }


var totalObject={}
totalObject["qualityDefectsTotal"]=categoryTotal
totalObject["totalMinutesLost"]=lostTimeTotal+downtimeTotal
totalObject["minutesRemaining"]= aObjectOriginal["calculatedMinutesLost"]-totalObject["totalMinutesLost"]
  console.log(" this is the category total "+categoryTotal)

//  let merged = {...aObjectOriginal, ...totalObject};
Object.assign(aObjectOriginal,totalObject)
  //console.log("There are keys of merge "+Object.keys(merged["qualityDefects"]))
//  console.log("This is the minutes remaining of merged in quality defects "+merged.minutesRemaining)

  return aObjectOriginal

//console.log("This is minutes remaining in object "+aObjectNew.minutesRemaining)
//console.log("This is hour object session minutes remaining  "+Session.get("hourObject").minutesRemaining)

//return totalObject.minutesRemaining
//  var aObjectNew={}

//  aObjectNew[category]=


//new object should be added to category

//Need to take object and add a name to it from the category
//  console.log("this is the object copied "+aObjectNew["losttime"])
//$.extend(true, aObjectOriginal[hour], aObjectNew);

}



  }catch(err)
  {
  console.log("this is the error in new job update shift"+err)
  }
}



operatorInputChanged = (data) => {
  console.log("this is the input changed "+data)
// this.setState({ operator: data });

var focused = $(':focus').val()
//console.log("This is the focused element "+focused)

//console.log("This is the name "+this.props.name)

try {


console.log("the is a lost time downtime or quality defect and here is the name "+this.props.name.split(",")[1])

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



//console.log("this is the minutes remaining in emp number "+this.props.Empnumber)
//console.log("this is the minutes remaining in hour object in keyboardload "+this.props.hourObject.minutesRemaining)


if(this.props.name.includes("losttime"))
{
  if (Number(data)>60)
  {
    alert('Lost time cannot exceed 60 minutes');
    data= data.slice(0, -1);
    $(':focus').val(data)
  }
  var name=this.props.name.split(",")[1]
  //var subCategory=this.props.name.split(",")[1]
  var aObject={}
  aObject[name]=data
  var category="losttime"
}
else if(this.props.name.includes("downtime"))
{
  if (Number(data)>60)
  {
    alert('Downtime cannot exceed 60 minutes');
    data= data.slice(0, -1);
    $(':focus').val(data)
  }
  var name=this.props.name.split(",")[2]
  var subCategory=this.props.name.split(",")[1]
  var aObject={}
  aObject[name]=data

  var category="downtime"
}
else if(this.props.name.includes("qualitydefects"))
{
  var name=this.props.name.split(",")[2]
  var subCategory=this.props.name.split(",")[1]
  var aObject={}
  aObject[name]=data
  var category="qualityDefects"
}

console.log("About to call the job update here is the data  "+data)
this.setState({ input: data });
//$(".keyboard").val(data)
try {


//Meteor.call('jobUpdateShift',Session.get("id"),Session.get("fieldName"),aObject,category,subCategory);
var jobObject=this.props.hourObject
console.log("This is the hour object minutes remaining before being sent to the job update shift "+this.props.hourObject.minutesRemaining)
if (jobObject!=undefined)
{
console.log("job object is not undefined ")
var updatedJobObject=this.jobUpdateShift (aObject,category,subCategory,jobObject)

//this.props.sendData(updatedJobObject)
var earnedHour=Number(jobObject.actual)/Number(jobObject.planned)
console.log("this is the earned hour in operator input "+earnedHour+" updated job object minutes remaining "+updatedJobObject.minutesRemaining+" props job object "+jobObject.minutesRemaining)

var earnedHour=Number(jobObject.actual)/Number(jobObject.planned)

if (earnedHour>=1 ||updatedJobObject.minutesRemaining<=0 )
{
  //this is green
    console.log("color is green")
  var color="rgba(0, 255, 0, 0.3)"
//this.setState({color: "rgba(0, 255, 0, 0.3)"});
}
else
{
  //this is red
  console.log("color is red")
  var color="rgba(255, 0, 0, 0.3)"
//this.setState({color: "rgba(255, 0, 0, 0.3)"});
}


this.props.dispatch({
                type: 'UPDATE_COLOR',
                payload: color
            });




/*
this.props.dispatch({
                type: 'UPDATE_EMP_NUMBER',
                payload: updatedJobObject.minutesRemaining
            });
*/
this.props.dispatch({
                type: 'UPDATE_HOUR_OBJECT',
                payload: updatedJobObject
            });




}else
{
console.log("job object is undefined")

}

}
catch(err) {
    console.log("This is the error in jobs save method "+err.message)
}






//this.setState({ operator: $(':focus').val() });
}catch(err) {
console.log("this is the error in keyboard input changed "+err)
}

}

operatorInputAccepted = (data) => {

console.log("Input submitted:"+ data+" this is the value of focused input "+$(':focus').val());



}
 updateEmpNumber(e) {
        // No need to set state here as you are now passing this data to Redux store
        // this.setState({Empnumber: e.target.value});

        // Instead we will dispatch an action and send the empNumber to the reducer
        console.log("Updating the emp number, here it is "+e.target.value)
        this.props.dispatch({
                type: 'UPDATE_EMP_NUMBER',
                payload: e.target.value
            });
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
<div style={{ width:'5vw',  display: 'inline-block'}}>

  <Keyboard
    className="keyboard"
    id={this.props.id}
    value={this.state.input}
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
style={{ width:'8vw', borderBottomColor:"black" }}
    onChange={this.operatorInputChanged}
    onAccepted={this.operatorInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}
//connect(mapStateToProps)(KeyboardLoad);


class Dataentry extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
this.state = { shift: "1"};
this.state = { count: 0};
     this.state = { data: false};
this.state = { minutesRemaining: 0};
this.state = { operator: null};
this.state = {
      slideIndex: 0,
    };
    this.state = {
          downtime: null,
        };
this.handleKeyUp = this.handleKeyUp.bind(this);
this.state = { minutesRemaining: 0};
this.state = { actual: ""};
this.state = { planned: ""};
this.state = { go: false};
this.getData= this.getData.bind(this)
//this.downtimeClick = this.downtimeClick.bind(this);
//onClick
this.props.dispatch({
        type: 'UPDATE_EMP_NUMBER',
        payload: 0
    });


}
  componentWillMount() {
import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
if(this.props.hourObject!=undefined)
{
console.log("This is the hour object in dataentry will mount"+this.props.hourObject)

}
var labelID;

$('label').click(function() {
       labelID = $(this).attr('for');
       $('#'+labelID).trigger('click');
});
this.setState({ go: false })
this.interval =setInterval(function(){


  //FlowRouter.go('/plantoactual');
  //window.location.href = '/plantoactual';

 // FlowRouter.reload();





}, 900000)



//console.log("component will mount in graph menu")
//import 'jquery-ui-bundle'
var store = require('amplify-store');
var myStoredValues=store()
this.setState({workcellSelected: myStoredValues.workcell});



//This needs to be the p2a operator


this.setState({
  downtime: "moldingMachine"
})



if(myStoredValues.department!=undefined)
{

  //console.log("department session is defined, it is "+cookie.load("department") )
  this.setState({
    department: myStoredValues.department
  });




}
else {
  console.log("department session is not defined")
  this.setState({
    department: "datacom"
  });




}


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




if(cookie.load("partNumberSelected")!=undefined)
{
  this.setState({partNumberSelected:cookie.load("partNumberSelected")});

}
else {

  this.setState({partNumberSelected:"Not Selected"});

}


var that=this




/*
axios.get('/dataEntryJobRetrieveShift',{
params: {
     id: Session.get("id"),
     fieldName:Session.get("fieldName")

   }

})
.then(response => {




})
.catch(error => {
  console.log(error);
});
*/



} //end of component will mount

componentDidMount()
{
if(this.props.hourObject!=undefined)
{
console.log("This is the hour object in dataentry did mount"+this.props.hourObject)
console.log("This is the hour object calculated minutes lost "+this.props.hourObject.calculatedMinutesLost+" hour number "+this.props.hourObject.hourNumber)
}
  var jobObject=this.props.hourObject


  this.setState({operatorSelected: jobObject.operator});




  if (jobObject!=undefined)
  {
  var hour=jobObject.hourNumber
  console.log("This is the planned for this hour "+jobObject.planned)
  if(jobObject.planned==null||jobObject.planned=="")
  {
    jobObject.planned=0
  }
  console.log("this is the actual "+jobObject.actual)
  if(jobObject.actual==null||jobObject.actual=="")
  {
    console.log("the actul is null or empty string")
    jobObject.actual=0
  }

  var store = require('amplify-store');
  var myStoredValues=store()
  if(myStoredValues.plannedSelected!=undefined)
  {
    var planned=myStoredValues.plannedSelected
    this.setState({planned:myStoredValues.plannedSelected});

  }

   this.setState({ actual: jobObject.actual})
  this.setState({ partNumber: jobObject.partNumber})
  if(jobObject.actual==0 &&jobObject.minutesRemaining==null)
  {
    jobObject.minutesRemaining=60
    jobObject.calculatedMinutesLost=60
  }
  if(planned==0)
  {
    jobObject.minutesRemaining=0
    jobObject.calculatedMinutesLost=0
  }
  //update the redux hourobject here
  this.setState({ minutesRemaining: jobObject.minutesRemaining})
  this.props.dispatch({
                  type: 'UPDATE_EMP_NUMBER',
                  payload: jobObject.minutesRemaining
              });
  this.props.dispatch({
                  type: 'UPDATE_HOUR_OBJECT',
                  payload: jobObject
              });
  //this.setState({ hourObject: jobObject })
//  this.getData(jobObject)
  //Session.set("minutesRemaining",jobObject.minutesRemaining)
    cookie.save('minutesRemaining', jobObject.minutesRemaining, { path: '/' });
  var losttime=jobObject.lostTime
  var downtime=jobObject.downtime
  var qualityDefects=jobObject.qualityDefects
  for (var key in losttime) {
    if (losttime.hasOwnProperty(key)) {
  console.log(key, losttime[key])
      //var keyLocation="[name=losttime,"+key+"]"
  $("[name='losttime,"+key+"']").val(losttime[key])

    }
  }

  for (var key in downtime) {
    if (downtime.hasOwnProperty(key)) {

      //var keyLocation="[name=losttime,"+key+"]"
  //the key will be all the names of the sub-categories
  //the value will be the name of the downtime

  //console.log(key, downtime[key])
  var total=0

  var subCategory=key
  var subCategoryObject=downtime[key]
  Object.keys(subCategoryObject)
   .forEach(function eachKey(keyNew) {
     $("[name='downtime,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

  //Need to add all of the data for a particular downtime
  //this is iterating through each subCategory

  total=total+Number(subCategoryObject[keyNew])

  //var name="downtime,"+subCategory+","+keyNew
  //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
  //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")

  //this.setState({ slideIndex: value})
   })
  console.log("This is the total "+total+" for this sub category "+subCategory)
  this.setState({ subCategory: total})

  this.setState({ moldingMachine: "100"})
  //$("[name='downtime,"+key+"']").val(downtime[key])

    }
  }
  for (var key in qualityDefects) {
    if (qualityDefects.hasOwnProperty(key)) {

  //console.log(key, qualityDefects[key])
      //var keyLocation="[name=losttime,"+key+"]"
      var subCategory=key
      var subCategoryObject=qualityDefects[key]
      Object.keys(subCategoryObject)
        .forEach(function eachKey(keyNew) {
        //  alert(key); // alerts key
          //alert(foo[key]); // alerts value

     //   console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

          $("[name='qualitydefects,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

      //var name="downtime,"+subCategory+","+keyNew
      //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
      //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



        });

  //$("[name='qualitydefects,"+key+"']").val(qualityDefects[key])

    }
  }
    //$("[name='losttime,NOT SCHEDULED']").val("111")
  if (jobObject.actual!=null)
  {
   $("[name=actual]").val(jobObject.actual.toString())
   //console.log("This is the hour "+hour+" this is the actual "+jobObject.actual.toString())
   }
   if (jobObject.planned!=null)
   {
     $("[name=planned]").val(jobObject.planned.toString())
    // console.log("This is the hour "+hour+" this is the planned "+jobObject.planned.toString())
     }
     if (jobObject.calculatedMinutesLost!=null)
     {

      // $("[name=planned]").val(jobObject[hour].planned.toString())
      this.setState({calculatedMinutesLost:jobObject.calculatedMinutesLost})
      // console.log("This is the hour "+hour+" this is the minutes lost "+jobObject.calculatedMinutesLost.toString())
       }
       if (jobObject.cycletime!=null)
     {

      // $("[name=planned]").val(jobObject[hour].planned.toString())
      this.setState({cycleTime:jobObject.cycletime})
      // console.log("This is the hour "+hour+" this is the cycletime "+jobObject.cycletime.toString())
       }

       this.setState({ earnedHour: earnedHour})
    /*   if (earnedHour>=1 ||jobObject.minutesRemaining==0 )
       {
         //this is green
       this.setState({color: "rgba(0, 255, 0, 0.3)"});
       }
       else
       {
         //this is red
       this.setState({color: "rgba(255, 0, 0, 0.3)"});
       }*/


       var earnedHour=Number(jobObject.actual)/Number(jobObject.planned)

       if (earnedHour>=1 ||jobObject.minutesRemaining<=0 )
       {
         //this is green
           console.log("color is green")
         var color="rgba(0, 255, 0, 0.3)"
       //this.setState({color: "rgba(0, 255, 0, 0.3)"});
       }
       else
       {
         //this is red
         console.log("color is red")
         var color="rgba(255, 0, 0, 0.3)"
       //this.setState({color: "rgba(255, 0, 0, 0.3)"});
       }
this.setState({colorNew: color});

       this.props.dispatch({
                       type: 'UPDATE_COLOR',
                       payload: color
                   });




  }//if job object exists


}

componentWillUnmount() {
  console.log(" dataentry component unmounted")
  clearInterval(this.interval);
}


getData(val){
  // do not forget to bind getData in constructor
  console.log("this is the value "+val);

  var minutesRemaining=val.minutesRemaining
  //set the minutes remaining here
  try {
  //  Session.set("hourObject",val)
    cookie.save('hourObject', val, { path: '/' });
      this.setState({ hourObject: val })
    //this.setState({minutesRemaining:minutesRemaining})

  this.setState({minutesRemaining:minutesRemaining})
/*
  this.props.dispatch({
                type: 'UPDATE_EMP_NUMBER',
                payload: minutesRemaining
            });
*/
  var earnedHour=this.state.earnedHour
  /*if (earnedHour>=1 ||val==0 )
       {
         //this is green
       this.setState({color: "rgba(0, 255, 0, 0.3)"});
       }
  else if (val==0)
  {
  this.setState({color: "rgba(0, 255, 0, 0.3)"});
  }
  else
  {
  this.setState({color: "rgba(255, 0, 0, 0.3)"});
  }*/

  //
  //Session.set("minutesRemaining",minutesRemaining)
}catch(err) {
  consol.elog("This is the error in get data "+err)
}

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





  newJob = () => {
       //console.log('this is:', this);
       setTimeout(function() {
        window.location.href = '/newjob';
    // FlowRouter.go('/newjob');


     //FlowRouter.reload();
   }, 500);
     }

     back = () => {
          //console.log('this is:', this);
          setTimeout(function() {
            window.location.href = '/plantoactual';
       // FlowRouter.go('/plantoactual');


       // FlowRouter.reload();
      }, 500);
        }





     handleStartSelection = (selectedRows) => {


        console.log("this is the select rows "+selectedRows)
 if (selectedRows.toString()=="0")
 {
      /*  setTimeout(function() {
        FlowRouter.go('/start');


        FlowRouter.reload();
        }, 500);*/

}

       };

       handleSlideChange = (value) => {
           this.setState({
             slideIndex: value,
           });
         };

         handleKeyUp(event) {
         //  if (event.keyCode == 13) return this.sendData()


      //        var plantoactual={date:$('[name=date]').val()  ,planned:$('[name=planned]').val() ,actual:$('[name=actual]').val()  ,minutesLost: $('[name=minuteslost]').val(),unitsmissed:$('[name=unitsmissed]').val(),calculatedminuteslost:  $('[name=calculatedminuteslost]').val()}







       console.log("user inputted into losttime,downtime or minutes lost, this is the name "+event.target.name+ " this is the class "+event.target.value)

       var total=0
        $(".losttime input,.downtime input").each(function() {
         //This iterates through all the
           if(!isNaN(this.value)) {
             total=total+Number(this.value)
              // alert(this.value + " is a valid number");
              //I need to total this value

           }


       });
       console.log("This is the total "+total)
       var minuteslost=Number($('.minuteslost').val())
       console.log("This is the minutes lost "+minuteslost)

       if (total>0 && minuteslost>=0)
       { console.log("tthi is the total "+total)
       console.log("This is the minutes lost "+minuteslost )

       var minutesRemaining=minuteslost-total
       console.log("this is the minutes remaining "+minutesRemaining)
       this.setState({
       minutesRemaining: minutesRemaining
       });
      // Session.set("minutesRemaining",minutesRemaining)
         cookie.save('minutesRemaining', minutesRemaining, { path: '/' });
       var earnedHour=this.state.earnedHour
       /*if (earnedHour>=1 || minutesRemaining==0)
       {
         //this is green
       this.setState({color: "rgba(0, 255, 0, 0.3)"});
       }
       else if (minutesRemaining==0)
       {
         //this is green
       this.setState({color: "rgba(0, 255, 0, 0.3)"});
       }
       else
       {
         //this is red
       this.setState({color: "rgba(255, 0, 0, 0.3)"});
       }*/

       //
       //Session.set("minutesRemaining",minutesRemaining)
       }
       else
       {
       //  this.setState({color: "green"});
       this.setState({
       minutesRemaining: minuteslost
       });
//Session.set("minutesRemaining",minuteslost)
cookie.save('minutesRemaining', minuteslost, { path: '/' });
       //Session.set("minutesRemaining",minuteslost)
       }


     } //handle key up event

     handleChangeActual(event) {

       console.log("This is the actual "+event)
        // this.setState({value: event.target.value});
       }

 updateEmpNumber(e) {
        // No need to set state here as you are now passing this data to Redux store
        // this.setState({Empnumber: e.target.value});

        // Instead we will dispatch an action and send the empNumber to the reducer
        console.log("Updating the emp number, here it is "+e.target.value)
        this.props.dispatch({
                type: 'UPDATE_EMP_NUMBER',
                payload: e.target.value
            });
    }

  render() {

    if(this.props.hourObject!=undefined)
    {
    console.log("This is the hour object in dataentry render "+this.props.hourObject)
    console.log("This is the color in hourObject in dataentry render "+this.props.hourObject.color)
    //  console.log("This is the color "+this.props.color)


      var earnedHour=Number(this.props.hourObject.actual)/Number(this.props.hourObject.planned)

      if (earnedHour>=1 ||this.props.hourObject.minutesRemaining<=0 )
      {
        //this is green
          console.log("color is green")
        var color="rgba(0, 255, 0, 0.3)"
      //this.setState({color: "rgba(0, 255, 0, 0.3)"});
      }
      else
      {
        //this is red
        console.log("color is red")
        var color="rgba(255, 0, 0, 0.3)"
      //this.setState({color: "rgba(255, 0, 0, 0.3)"});
      }
   //this.setState({colorNew: color});






    }
/*
    if(typeof this.props.color=="string")
    {
      var color=this.props.hourObject.color
        this.setState({colorNew,color})
    }
*/


    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }

const planned=this.state.planned
const actual=this.state.actual

const BackButton = (props, context) => (
  //
<RaisedButton label="Back" className="topright" primary={true}  onClick={() =>{this.setState({ go: true });}} />
);

BackButton.contextTypes = {
router: PropTypes.shape({
  history: PropTypes.object.isRequired,
}),
};

var that=this
if(this.state.go == true)
{
//save the object and send it to the server
console.log("calling the back button")
//console.log("This is the minutes remaining of hour object sent to the serverr "+this.props.hourObject.minutesRemaining+" this is the object "+this.props.hourObject )
 //Meteor.call('jobSaveDataEntry',Session.get("id"),Session.get("fieldName"),this.props.hourObject);
 console.log("This is the hour object "+this.props.hourObject)
 console.log("This is the minutes remaining of the hour object "+this.props.hourObject.minutesRemaining)


if(this.props.hourObject.minutesRemaining >60)
{
  alert("Please fix the minutes remaining.  Minutes remaining is greater than 60")
  this.setState({go:false})
  partial = <div></div>
}
else {

//put hour object back into the jobs

console.log("This is the jobs slot 0 hour number "+this.props.jobs[0].hourNumber)
console.log("This is the field name of the hour object "+this.props.hourObject.fieldName)

var jobsArray=this.props.jobs
var hourObject=this.props.hourObject
var fieldName=this.props.hourObject.fieldName

//console.log("This is the minutes Remaining of the hour object inside the job object before"+jobObject[fieldName].minutesRemaining)

console.log("This is jobsarray length "+jobsArray.length)

 for(var i = 0; i < jobsArray.length; i++)
 {
   console.log("This is the i in for loop "+i)
   if( jobsArray[i].hasOwnProperty('id'))
   {
console.log("This is id of jobs array "+jobsArray[i].id+" this is the id of hour object "+hourObject.id)
if(jobsArray[i].id==hourObject.id)
{
console.log("found the correct object in the array")
Object.assign(jobsArray[i],hourObject)
console.log("this is the minutes remaining of hour object in jobs array "+jobsArray[i].minutesRemaining)
}
}
 }
//Now I need to save the object or attach a header



   //

//console.log("This is the minutes Remaining of the hour object inside the job object after"+jobObject[fieldName].minutesRemaining)
var store = require('amplify-store');
var myStoredValues=store()

Meteor.call('jobsSaveObject',jobsArray,myStoredValues.department,myStoredValues.workcell);



  //Meteor.call('jobSaveDataEntry',Session.get("id"),Session.get("fieldName"),this.props.hourObject);

  //partial = <div></div>
  partial = <Redirect to="/plantoactual" />
}

//partial = <div></div>


}

 else
 { partial = <div></div> }

    return (

<MuiThemeProvider>
<div className="biggerfont" style={centerDiv} >





  <div className="z-depth-2" style={{height:"97.5vh",width:"97.5vw",background: color}}>
  {partial}
    <AppBar position="static" color="default">
           <Toolbar>
             <div className="wrapper center">
             <div style={{width:"30vw"}} className="">

                <Typography variant="title" color="inherit">
                        Name: {' '} {this.state.operatorSelected}<br/>
                        Workcell:{' '}  {this.state.workcellSelected}<br/>
                        Part Number:{' '} {this.state.partNumber}

                 </Typography>




             </div>
             <div style={{width:"30vw"}} className="">
                <Typography variant="title" color="inherit">
                         Planned: {' '} {this.state.planned}<br/>
                       Actual:{' '} {this.state.actual}<br/>
                          Units Missed:{' '}
                  </Typography>
             </div>

             <div style={{width:"30vw"}} className="">
                <Typography variant="title" color="inherit">
                        Minutes Worked:{' '}<RaisedButton label="Back" className="topright" primary={true}  onClick={() =>{this.setState({ go: true })}} /><br/>
                     Minutes Lost:{' '}{this.state.calculatedMinutesLost}<br/>
                   Minutes Remaining To Account For: {' '}{this.props.hourObject.minutesRemaining}
                 </Typography>
             </div>
             </div>

           </Toolbar>
         </AppBar>





         <Tabs
           onChange={this.handleSlideChange}
           value={this.state.slideIndex}
         >
           <Tab label="Lost Time" value={0} />
           <Tab label="Downtime" value={1} />
           <Tab label="Quality Defects" value={2} />


         </Tabs>




                  <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    style={{height:"80vh"}}>
                    <div>
                    <br/>

                        <form className="losttime center" onKeyUp={this.handleKeyUp} >
                     <div className="container">
         <div className="div1" style={{display:"inline-block"}} >




                              <label for="losttime,NOT SCHEDULED" className="losttime" > Not Scheduled:</label>
                              <KeyboardLoad hourObject={this.props.hourObject} id="losttime,NOT SCHEDULED"  dispatch={this.props.dispatch}  name="losttime,NOT SCHEDULED" tabIndex="10"  />
                              <br/>
                              <label for="losttime,TRAINING" className="losttime"> Training/Meeting: </label>
                                <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,TRAINING"   name="losttime,TRAINING" tabIndex="21" dispatch={this.props.dispatch}/>

                              <br/>
                             <label for="losttime,PLANNED DOWNTIME" className="losttime"> Planned Downtime:</label>
                               <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,PLANNED DOWNTIME"   name="losttime,PLANNED DOWNTIME" tabIndex="12" dispatch={this.props.dispatch}/>
                    <br/>
                    <label for="losttime,MANUAL ENTRY KEY" className="losttime">  Manual Entry Key:</label>
                                 <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,MANUAL ENTRY KEY"   name="losttime,MANUAL ENTRY KEY" tabIndex="20" dispatch={this.props.dispatch}/>



                               </div>
         <div className="div2  " >
                      <label for="losttime,PART SHORTAGE" className="losttime"> Part Shortage:</label>
                        <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,PART SHORTAGE"   name="losttime,PART SHORTAGE" tabIndex="15" dispatch={this.props.dispatch}/>
                              <br/>

                             <label for="losttime,GETTING PARTS" className="losttime">Getting Parts:</label>
                               <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,GETTING PARTS"   name="losttime,GETTING PARTS" tabIndex="16" dispatch={this.props.dispatch}/>
                          <br/>
                             <label for="losttime,QUALITY ISSUES" className="losttime">Quality Issues:</label>
                               <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,QUALITY ISSUES"   name="losttime,QUALITY ISSUES" tabIndex="17" dispatch={this.props.dispatch}/>
                               <br/>


                            </div>

         <div className="div3  " >

                              <label for="losttime,CHANGEOVER" className="losttime"> Changeover:</label>
                                <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,CHANGEOVER"   name="losttime,CHANGEOVER" tabIndex="18" dispatch={this.props.dispatch}/>
                            <br/>
                               <label for="losttime,LOST TIME OTHER" className="losttime">Other:</label>
                                 <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,LOST TIME OTHER"   name="losttime,LOST TIME OTHER" tabIndex="19" dispatch={this.props.dispatch}/>
                               <br/>

                                <label for="losttime,STARTUP" className="losttime">Start-up:</label>
                               <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,STARTUP"   name="losttime,STARTUP" tabIndex="13" dispatch={this.props.dispatch}/>
                                   <br/>
                                <label for="losttime,NO OPERATOR" className="losttime"> No Operator:</label>
                                  <KeyboardLoad hourObject={this.props.hourObject}  id="losttime,NO OPERATOR"   name="losttime,NO OPERATOR"  tabIndex="11" dispatch={this.props.dispatch}/>



                            </div>

         </div>

                      </form>



                    </div>
                    <div style={styles.slide}>


                      <div >
                        <Downtime isLoggedIn={this.state.department}  hourObject={this.props.hourObject} dispatch={this.props.dispatch}/>


                        {/*<HuskyDowntime isLoggedIn={this.state.downtime}/>*/}
                          </div>

                    </div>
                    <div style={styles.slide}>


                      <div >
                        <Defects isLoggedIn={this.state.department}  hourObject={this.props.hourObject} dispatch={this.props.dispatch} />


                        {/*<HuskyDowntime isLoggedIn={this.state.downtime}/>*/}
                          </div>

                    </div>
<div className="testkeyboard" style={{margin:"0 auto", position:"absolute", top:"40vh", width: "50%"}}></div>

                  </SwipeableViews>





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
  connect(mapStateToProps)

)(Dataentry);

//export default connect(mapStateToProps)(Dataentry);

class KeyboardLoadComments extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);

//this.handleChangeOperator=this.handleChangeOperator.bind(this);
//this.handleKeyUp = this.handleKeyUp.bind(this);
//this.state={data:props.data}
this.state={comment:props.comment}

}
  componentWillMount() {

    import 'jquery-ui-bundle'
    import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"

console.log("component will mount in graph menu")

if(this.state.comment!=undefined)
{


}
else {
  this.setState({comment:""});
}

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




  if (this.props.name =="actual")
  {




}
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
  console.log("this is the input changed "+data)
// this.setState({ operator: data });
this.setState({ input: data });
var focused = $(':focus').val()
//console.log("This is the focused element "+focused)

//console.log("This is the name "+this.props.name)

if (this.props.name =="actual")
{
console.log("This is the id "+this.props.id+" this is the hour "+this.props.hour)
console.log("user is inputting into actual")




//set the calculated minutes lost

}
else if (this.props.name =="comments")
{
//need to send this data tot he job update
var store = require('amplify-store');
var myStoredValues=store()

axios.get('/jobUpdateObject',{
  params: {
       id: cookie.load("id"),
       department: myStoredValues.department,
     workcell: myStoredValues.workcell,
     shift: cookie.load("shift"),
       fieldName: cookie.load("fieldName"),
       aObject: {
         comment:data

       },
       category:"comment"



       }
   })
  .then(response => {

  })
  .catch(error => {
  console.log(error);
  });


  console.log("here is the comment "+data)




}



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


    return (
<div style={{  display: 'inline-block',   padding:"0", margin:"0"}}>

  <Keyboard
    className="keyboard"
    value={this.state.comment}
    name={this.props.name}
    options={{
      type:"input",
      layout: "qwerty",
      alwaysOpen: false,
      userClosed:false,
      useWheel: false,
      stickyShift: false,
      id:"keyboard",
      color: "light",
      updateOnChange: true,
      initialFocus: true,
      position: {
          of: null, // null = attach to input/textarea; use $(sel) to attach elsewhere
          my: 'center center',
          at: 'center center',
          at2: 'center center' // used when "usePreview" is false
      },
      appendLocally:true,

      stayOpen:false,
      usePreview:true
    }}
    style={{display: "block",
               margin : "0 auto", width:"90vw"}}
    onChange={this.operatorInputChanged}
    onAccepted={this.operatorInputAccepted}
    ref={k => this.keyboard = k}
  />


</div>
)}

}

function DowntimeDatacom(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DowntimePacking(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DowntimeManual(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DowntimeScd(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DowntimeManualBoxes(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DowntimeMetals(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DowntimeRaceway(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DowntimeWiu(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DowntimeAutoboxes(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

class DowntimeHusky extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
this.state = { minutesRemaining: 0};
this.downtimeClick = this.downtimeClick.bind(this);
//this.sendData= this.props.sendData.bind(this)
/*if(typeof props.houbObject!=undefined)
{
console.log("This is the mr in downtime husky "+props.hourObject.minutesRemaining)
}*/
this.state = { hourObject: props.hourObject};
//this.hourObject= this.props.hourObject
//onClick
}
componentWillMount(){

this.setState({
  downtime: "moldingMachine",
});
console.log("downtime husky component will mount ")

console.log("This is the props hour object in downtime husky "+this.props.hourObject+" this is the state "+this.state.hourObject)

  // this.setState({ job: response.data})
   var jobObject=this.props.hourObject
   var hour=cookie.load("hour")
   console.log("This is the planned for this hour "+jobObject.planned)
   //console.log("This is the selected part number "+response.data.partNumber)
   this.setState({ partNumber: jobObject.partNumber})
  var losttime=jobObject.lostTime
  var downtime=jobObject.downtime
  var qualityDefects=jobObject.qualityDefects

  for (var key in downtime) {
     if (downtime.hasOwnProperty(key)) {

       //var keyLocation="[name=losttime,"+key+"]"
  //the key will be all the names of the sub-categories
  //the value will be the name of the downtime

  //console.log(key, downtime[key])
  var subCategory=key
  var subCategoryObject=downtime[key]
  Object.keys(subCategoryObject)
    .forEach(function eachKey(keyNew) {
    //  alert(key); // alerts key
      //alert(foo[key]); // alerts value

    //console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

      $("[name='downtime,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

  //var name="downtime,"+subCategory+","+keyNew
  //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
  //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



    });



   //$("[name='downtime,"+key+"']").val(downtime[key])

     }
  }






















}


componentDidMount()
{

  console.log("downtime husky component did mount ")
}


downtimeClick = (selection) =>{
 console.log("downtime click, here is the selection "+selection)
 this.setState({
   downtime: selection,
 });





 setTimeout(
     function() {

       var jobObject=this.props.hourObject
       var hour=cookie.load("hour")
       console.log("This is the planned for this hour "+jobObject.planned)
       //console.log("This is the selected part number "+response.data.partNumber)
       this.setState({ partNumber: jobObject.partNumber})
       var losttime=jobObject.lostTime
       var downtime=jobObject.downtime
       var qualityDefects=jobObject.qualityDefects

       for (var key in downtime) {
         if (downtime.hasOwnProperty(key)) {

           //var keyLocation="[name=losttime,"+key+"]"
       //the key will be all the names of the sub-categories
       //the value will be the name of the downtime

       //console.log(key, downtime[key])
       var subCategory=key
       var subCategoryObject=downtime[key]
       Object.keys(subCategoryObject)
        .forEach(function eachKey(keyNew) {
        //  alert(key); // alerts key
          //alert(foo[key]); // alerts value

        //console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

          $("[name='downtime,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

       //var name="downtime,"+subCategory+","+keyNew
       //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
       //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



        });



       //$("[name='downtime,"+key+"']").val(downtime[key])

         }
       }




     }
     .bind(this),
     3000
 );








}

renderButton() {
  //console.log("This is the downtime state "+this.state.downtime )
  try {
  if(this.state.downtime === "moldingMachine") {
    return (
      <div>
<HuskyDowntimeMoldingMachine hourObject={this.props.hourObject}  sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  } else if( this.state.downtime === "robot") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDowntimeRobot hourObject={this.props.hourObject} sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  }
  else if( this.state.downtime === "conveyors") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDowntimeConveyors hourObject={this.props.hourObject} sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  }
  else if( this.state.downtime === "screwInsertion") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDowntimeScrewInsertion hourObject={this.props.hourObject} sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  }
  else if( this.state.downtime === "doboy") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDowntimeDoboy hourObject={this.props.hourObject} sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  }
  else if( this.state.downtime === "packBench") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDowntimePackBench hourObject={this.props.hourObject} sendData={this.props.sendData} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}
catch(err) {
console.log("This is the error in husky downtime "+err)
}
}


render() {
return(
  <div className="center mainDataentry">
  <div className="left" style={{width:"20vw", margin:"1vw"}}>
      <br/>
      {/*
      <RaisedButton label="Molding Machine" className="Molding Machine" primary={true} onClick={this.downtimeClick.bind(this, "moldingMachine")} /> <br/><br/>
       <RaisedButton label="Robot" className="Robot" primary={true} onClick={this.downtimeClick.bind(this, "robot")} /><br/><br/>
         <RaisedButton label="Conveyors" className="Conveyors" primary={true} onClick={this.downtimeClick()}/> <br/><br/>
          <RaisedButton label="Screw Insertion/Drop" className="Screw Insertion/Drop" primary={true} onClick={this.downtimeClick()}/><br/><br/>
            <RaisedButton label="Doboy" className="Doboy" primary={true} onClick={this.downtimeClick()}/> <br/><br/>
             <RaisedButton label="Pack Bench" className="Pack Bench" primary={true} onClick={this.downtimeClick()}/>
             */}
             <RaisedButton label="Molding Machine" className="Molding Machine" primary={true}  onClick={this.downtimeClick.bind(this, "moldingMachine")} />{this.props.moldingMachine} <br/><br/>
              <RaisedButton label="Robot" className="Robot" primary={true}  onClick={this.downtimeClick.bind(this, "robot")} /><br/><br/>
                <RaisedButton label="Conveyors" className="Conveyors" primary={true} onClick={this.downtimeClick.bind(this, "conveyors")}/> <br/><br/>
                 <RaisedButton label="Screw Insertion/Drop" className="Screw Insertion/Drop" primary={true} onClick={this.downtimeClick.bind(this, "screwInsertion")}/><br/><br/>
                   <RaisedButton label="Doboy" className="Doboy" primary={true} onClick={this.downtimeClick.bind(this, "doboy")}/> <br/><br/>
                    <RaisedButton label="Pack Bench" className="Pack Bench" primary={true} onClick={this.downtimeClick.bind(this, "packBench")}/>
                      </div>

<div className="right" style={{width:"65vw"}} >
<form className="downtime" onKeyUp={this.handleKeyUp}>
{this.renderButton()}
</form>
</div>
</div>

)

}


}





function HuskyDowntimeMoldingMachine(props) {

/*if(typeof props.houbObject!=undefined)
{
console.log("this is mr in husky downtime molding machine "+props.hourObject.minutesRemaining)
}*/

    return(
      <div className="downtime" onKeyUp={this.handleKeyUp}>

  <br/><br/>
         <label for="downtime,MOLDING MACHINE,WRONG CYCLE TIME" > WRONG CYCLE TIME:</label>
          <KeyboardLoad   id="downtime,MOLDING MACHINE,WRONG CYCLE TIME"   name="downtime,MOLDING MACHINE,WRONG CYCLE TIME" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
           <label for="downtime,MOLDING MACHINE,METAL IN TIPS"> METAL IN TIPS:</label>
          <KeyboardLoad   id="downtime,MOLDING MACHINE,METAL IN TIPS"   name="downtime,MOLDING MACHINE,METAL IN TIPS" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
           <label for="downtime,MOLDING MACHINE,INSULATOR BURNING"> INSULATOR BURNING:</label>
          <KeyboardLoad  id="downtime,MOLDING MACHINE,INSULATOR BURNING"   name="downtime,MOLDING MACHINE,INSULATOR BURNING" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
           <label for="downtime,MOLDING MACHINE,MOLD ISSUES"> MOLD ISSUES:</label>
          <KeyboardLoad   id="downtime,MOLDING MACHINE,MOLD ISSUES"   name="downtime,MOLDING MACHINE,MOLD ISSUES" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
           <label for="downtime,MOLDING MACHINE,OTHER"> OTHER:</label>
         <KeyboardLoad   id="downtime,MOLDING MACHINE,OTHER"   name="downtime,MOLDING MACHINE,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/>

      </div>
)
}
function HuskyDowntimeRobot(props) {
    return(
      <div className="downtime" onKeyUp={this.handleKeyUp}>
        <br/><br/>
        <div style={{display:"inline-block", width:"25vw", margin:"1vw"}}>
         <label for="downtime,ROBOT,ROBOT - NOT WORKING"> ROBOT - NOT WORKING:</label>
       <KeyboardLoad  id="downtime,ROBOT,ROBOT - NOT WORKING"   name="downtime,ROBOT,ROBOT - NOT WORKING" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        <label for="downtime,ROBOT,ROBOT - DROPPING PLATES"> ROBOT - DROPPING PLATES:</label>
        <KeyboardLoad  id="downtime,ROBOT,ROBOT - DROPPING PLATES"   name="downtime,ROBOT,ROBOT - DROPPING PLATES" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
         <label for="downtime,ROBOT,BUFFER - NOT PICKING"> BUFFER - NOT PICKING:</label>
        <KeyboardLoad   id="downtime,ROBOT,BUFFER - NOT PICKING"   name="downtime,ROBOT,BUFFER - NOT PICKING" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        </div>
          <div style={{display:"inline-block", width:"25vw"}}>
         <label for="downtime,ROBOT,BUFFER - CRASH"> BUFFER - CRASH:</label>
        <KeyboardLoad   id="downtime,ROBOT,BUFFER - CRASH"   name="downtime,ROBOT,BUFFER - CRASH" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/><br/>
         <label for="downtime,ROBOT,BUFFER NOT PRESENT"> BUFFER NOT PRESENT:</label>
        <KeyboardLoad  id="downtime,ROBOT,BUFFER NOT PRESENT"   name="downtime,ROBOT,BUFFER NOT PRESENT" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
         <label for="downtime,ROBOT,OTHER"> OTHER:</label>
        <KeyboardLoad id="downtime,ROBOT,OTHER"   name="downtime,ROBOT,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/>
        </div>
      </div>
)
}


function HuskyDowntimeConveyors(props) {

    return(
      <div className="downtime" onKeyUp={this.handleKeyUp} >
        <br/><br/>

        <label for="downtime,CONVEYORS,JAM AT WATERFALL"> JAM AT WATERFALL:</label>
        <KeyboardLoad id="downtime,CONVEYORS,JAM AT WATERFALL"   name="downtime,CONVEYORS,JAM AT WATERFALL" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        <label for="downtime,CONVEYORS,JAM ON COOLING FLAT BELT"> JAM ON COOLING FLAT BELT:</label>
          <KeyboardLoad  id="downtime,CONVEYORS,JAM ON COOLING FLAT BELT"   name="downtime,CONVEYORS,JAM ON COOLING FLAT BELT" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,CONVEYORS,JAM ON REJECTION STATION"> JAM ON REJECTION STATION:</label>
              <KeyboardLoad   id="downtime,CONVEYORS,JAM ON REJECTION STATION"   name="downtime,CONVEYORS,JAM ON REJECTION STATION" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
              <label for="downtime,CONVEYORS,JAM AT DOBOY ENTRY"> JAM AT DOBOY ENTRY:</label>
            <KeyboardLoad  id="downtime,CONVEYORS,JAM AT DOBOY ENTRY"   name="downtime,CONVEYORS,JAM AT DOBOY ENTRY" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
            <label for="downtime,CONVEYORS,JAM AT SCREW INSERTION STATION"> JAM AT SCREW INSERTION STATION:</label>
          <KeyboardLoad  id="downtime,CONVEYORS,JAM AT SCREW INSERTION STATION"   name="downtime,CONVEYORS,JAM AT SCREW INSERTION STATION" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,CONVEYORS,OTHER"> OTHER:</label>
            <KeyboardLoad  id="downtime,CONVEYORS,OTHER"   name="downtime,CONVEYORS,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/>
      </div>
)
}

function HuskyDowntimeScrewInsertion(props) {

    return(
      <div className="downtime" onKeyUp={this.handleKeyUp}>
        <br/><br/>
    <div style={{display:"inline-block", width:"30vw", margin:"1vw"}}>
        <label for="downtime,SCREW INSERTION,JAM IN BOWL OR STEP FEEDER"> JAM IN BOWL OR STEP FEEDER:</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,JAM IN BOWL OR STEP FEEDER"   name="downtime,SCREW INSERTION,JAM IN BOWL OR STEP FEEDER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,SCREW INSERTION,JAM AT BOWL ESCAPEMENT (TIC TOC)"> JAM AT BOWL ESCAPEMENT (TIC TOC):</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,JAM AT BOWL ESCAPEMENT (TIC TOC)"   name="downtime,SCREW INSERTION,JAM AT BOWL ESCAPEMENT (TIC TOC)" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,SCREW INSERTION,JAM IN SCREW GUN"> JAM IN SCREW GUN:</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,JAM IN SCREW GUN"   name="downtime,SCREW INSERTION,JAM IN SCREW GUN" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,SCREW INSERTION,BOWL NOT FEEDING FAST ENOUGH"> BOWL NOT FEEDING FAST ENOUGH:</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,BOWL NOT FEEDING FAST ENOUGH"   name="downtime,SCREW INSERTION,BOWL NOT FEEDING FAST ENOUGH" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          </div>
            <div style={{display:"inline-block", width:"30vw"}}>
          <label for="downtime,SCREW INSERTION,BREAKING PLATES DURING INSERTION"> BREAKING PLATES DURING INSERTION:</label>
        <KeyboardLoad  id="downtime,SCREW INSERTION,BREAKING PLATES DURING INSERTION"   name="downtime,SCREW INSERTION,BREAKING PLATES DURING INSERTION" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        <label for="downtime,SCREW INSERTION,MIS-INSERTED SCREW (MISSING)"> MIS-INSERTED SCREW (MISSING):</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,MIS-INSERTED SCREW (MISSING)"   name="downtime,SCREW INSERTION,MIS-INSERTED SCREW (MISSING)" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          <label for="downtime,SCREW INSERTION,OTHER"> OTHER:</label>
          <KeyboardLoad  id="downtime,SCREW INSERTION,OTHER"   name="downtime,SCREW INSERTION,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/>
        </div>
          </div>
)
}
function HuskyDowntimeDoboy(props) {


    return(
      <div className="downtime" onKeyUp={this.handleKeyUp}>
        <br/><br/>
        <div style={{display:"inline-block", width:"30vw", margin:"1vw"}}>
            <label for="downtime,DOBOY,BAD END SEAL"> BAD END SEAL:</label>
            <KeyboardLoad  id="downtime,DOBOY,BAD END SEAL"   name="downtime,DOBOY,BAD END SEAL" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
              <label for="downtime,DOBOY,BAD FIN SEAL"> BAD FIN SEAL:</label>
          <KeyboardLoad   id="downtime,DOBOY,BAD FIN SEAL"   name="downtime,DOBOY,BAD FIN SEAL" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
            <label for="downtime,DOBOY,BARCODE PRINTING BAD/WRONG"> BARCODE PRINTING BAD/WRONG:</label>
          <KeyboardLoad  id="downtime,DOBOY,BARCODE PRINTING BAD/WRONG"   name="downtime,DOBOY,BARCODE PRINTING BAD/WRONG" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
            <label for="downtime,DOBOY,RIBBON BREAKAGE"> RIBBON BREAKAGE:</label>
          <KeyboardLoad  id="downtime,DOBOY,RIBBON BREAKAGE"   name="downtime,DOBOY,RIBBON BREAKAGE" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
          </div>
          <div style={{display:"inline-block", width:"30vw"}}>
            <label for="downtime,DOBOY,JAM AT DOUGHBOY INFEED"> JAM AT DOUGHBOY INFEED:</label>
          <KeyboardLoad  id="downtime,DOBOY,JAM AT DOUGHBOY INFEED"   name="downtime,DOBOY,JAM AT DOUGHBOY INFEED" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
            <label for="downtime,DOBOY,JAM AT DOUGHBOY FORMER"> JAM AT DOUGHBOY FORMER:</label>
            <KeyboardLoad  id="downtime,DOBOY,JAM AT DOUGHBOY FORMER"   name="downtime,DOBOY,JAM AT DOUGHBOY FORMER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
              <label for="downtime,DOBOY,JAM IN DOUGHBOY SEALING AREA"> JAM IN DOUGHBOY SEALING AREA:</label>
            <KeyboardLoad  id="downtime,DOBOY,JAM IN DOUGHBOY SEALING AREA"   name="downtime,DOBOY,JAM IN DOUGHBOY SEALING AREA" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
              <label for="downtime,DOBOY,OTHER"> OTHER:</label>
            <KeyboardLoad  id="downtime,DOBOY,OTHER"   name="downtime,DOBOY,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/>
              </div>
      </div>
)
}

function HuskyDowntimePackBench(props) {
  return(
      <div className="downtime" onKeyUp={this.handleKeyUp}>
        <br/><br/>
        <label for="downtime,packbench,BAGS NOT SEALING"> BAGS NOT SEALING:</label>
        <KeyboardLoad  id="downtime,packbench,BAGS NOT SEALING"   name="downtime,packbench,BAGS NOT SEALING" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        <label for="downtime,packbench,DEFECTIVE MATERIALS"> DEFECTIVE MATERIALS:</label>
        <KeyboardLoad  id="downtime,packbench,DEFECTIVE MATERIALS"   name="downtime,packbench,DEFECTIVE MATERIALS" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
        <label for="downtime,packbench,OTHER"> OTHER:</label>
        <KeyboardLoad  id="downtime,packbench,OTHER"   name="downtime,packbench,OTHER" tabIndex="10" hourObject={props.hourObject} sendData={props.sendData} dispatch={props.dispatch}/><br/>
      </div>
)
}

function DefectsDatacom(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DefectsPacking(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DefectsManual(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DefectsScd(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DefectsManualBoxes(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DefectsMetals(props) {
    return(
      <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}
function DefectsRaceway(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DefectsWiu(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

function DefectsAutoboxes(props) {
    return(
    <div className="left" >
        <br/><br/>
          <RaisedButton label="Molding Machine" className="" primary={true} onClick={this.dataentry}/> <br/><br/>

      </div>
)
}

class DefectsHusky extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
this.state = { minutesRemaining: 0};
this.defectsClick = this.defectsClick.bind(this);

//onClick
}
componentWillMount(){

  console.log("this is the hour object in defects husky "+this.props.hourObject)




this.setState({
  defects: "cosmetic",
});

}
defectsClick = (selection) =>{
 console.log("defects click, here is the selection "+selection)
 this.setState({
   defects: selection,
 });

 setTimeout(
     function() {

       var jobObject=this.props.hourObject
       //var hour=Session.get("hour")
       console.log("This is the planned for this hour "+jobObject.planned)

       //  this.setState({ partNumber: response.data.partNumber})
       var losttime=jobObject.lostTime
       var downtime=jobObject.downtime
       var qualityDefects=jobObject.qualityDefects

       for (var key in qualityDefects) {
         if (qualityDefects.hasOwnProperty(key)) {

       //console.log(key, qualityDefects[key])
           //var keyLocation="[name=losttime,"+key+"]"
           var subCategory=key
           var subCategoryObject=qualityDefects[key]
           Object.keys(subCategoryObject)
             .forEach(function eachKey(keyNew) {
             //  alert(key); // alerts key
               //alert(foo[key]); // alerts value

             //console.log("this is the downtime sub-category value for "+keyNew+" here is the value "+ subCategoryObject[keyNew])

               $("[name='qualitydefects,"+subCategory+","+keyNew+"']").val(subCategoryObject[keyNew])

           //var name="downtime,"+subCategory+","+keyNew
           //console.log(" check if name is same as string name "+ name==="downtime,ROBOT,ROBOT - NOT WORKING"+" this is the name "+name)
           //console.log(" this is the name "+name+" and string "+ "downtime,ROBOT,ROBOT - NOT WORKING")



             });

       //$("[name='qualitydefects,"+key+"']").val(qualityDefects[key])

         }
       }





     }
     .bind(this),
     1000
 );







}

renderButton() {
  //console.log("This is the defects state "+this.state.defects )
  if(this.state.defects === "cosmetic") {
    return (
      <div>
<HuskyDefectsCosmetic dispatch={this.props.dispatch} hourObject={this.props.hourObject}/>
      </div>
    );
  } else if( this.state.defects === "molding") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDefectsMolding dispatch={this.props.dispatch} hourObject={this.props.hourObject}/>
      </div>
    );
  }
  else if( this.state.defects === "damage") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDefectsDamage dispatch={this.props.dispatch} hourObject={this.props.hourObject}/>
      </div>
    );
  }
  else if( this.state.defects === "machine") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDefectsMachine dispatch={this.props.dispatch} hourObject={this.props.hourObject}/>
      </div>
    );
  }
  else if( this.state.defects === "vendor") {
  //  console.log("showing the robot sub category")
    return (
      <div>
<HuskyDefectsVendor dispatch={this.props.dispatch} hourObject={this.props.hourObject}/>
      </div>
    );
  }

}


render() {
return(
  <div className="center mainDataentry">
  <div className="left"                 style={{width:"20vw", margin:"1vw"}}>
      <br/>
      {/*
      <RaisedButton label="Molding Machine" className="Molding Machine" primary={true} onClick={this.downtimeClick.bind(this, "moldingMachine")} /> <br/><br/>
       <RaisedButton label="Robot" className="Robot" primary={true} onClick={this.downtimeClick.bind(this, "robot")} /><br/><br/>
         <RaisedButton label="Conveyors" className="Conveyors" primary={true} onClick={this.downtimeClick()}/> <br/><br/>
          <RaisedButton label="Screw Insertion/Drop" className="Screw Insertion/Drop" primary={true} onClick={this.downtimeClick()}/><br/><br/>
            <RaisedButton label="Doboy" className="Doboy" primary={true} onClick={this.downtimeClick()}/> <br/><br/>
             <RaisedButton label="Pack Bench" className="Pack Bench" primary={true} onClick={this.downtimeClick()}/>
             */}
             <RaisedButton label="Cosmetic" className="" primary={true}  onClick={this.defectsClick.bind(this, "cosmetic")} /> <br/><br/>
              <RaisedButton label="Molding" className="" primary={true}  onClick={this.defectsClick.bind(this, "molding")} /><br/><br/>
                <RaisedButton label="Damage" className="" primary={true} onClick={this.defectsClick.bind(this, "damage")}/> <br/><br/>
                 <RaisedButton label="Machine" className="" primary={true} onClick={this.defectsClick.bind(this, "machine")}/><br/><br/>
                   <RaisedButton label="Vendor" className="" primary={true} onClick={this.defectsClick.bind(this, "vendor")}/>

                      </div>
<div className="right" style={{width:"65vw"}}>
{this.renderButton()}
</div>

</div>

)

}


}





function HuskyDefectsCosmetic(props) {







    return(




      <div className="">
  <br/><br/>
        <label for="qualitydefects,COSMETIC,DIRTY"> DIRTY:</label>

        <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,COSMETIC,DIRTY"  dispatch={props.dispatch}  name="qualitydefects,COSMETIC,DIRTY" tabIndex="10"/>
      </div>
)
}
function HuskyDefectsMolding(props) {
    return(
      <div className="" >
    <br/><br/>
        <div style={{display:"inline-block", width:"25vw", margin:"1vw"}}>
    <label for="qualitydefects,MOLDING,DIRTY"> DIRTY:</label>
    <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,DIRTY"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,DIRTY" tabIndex="10"/><br/>
    <label for="qualitydefects,MOLDING,BURNS"> BURNS:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,BURNS"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,BURNS" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,CONTAMINATION"> CONTAMINATION:</label>
          <KeyboardLoad hourObject={props.hourObject} id="qualitydefects,MOLDING,CONTAMINATION"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,CONTAMINATION" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,FLASH"> FLASH:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,FLASH"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,FLASH" tabIndex="10"/><br/>
          </div>
              <div style={{display:"inline-block", width:"25vw"}}>
          <label for="qualitydefects,MOLDING,MIXED COLORS"> MIXED COLORS:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,MIXED COLORS"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,MIXED COLORS" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,SHORT SHOTS"> SHORT SHOTS:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,SHORT SHOTS"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,SHORT SHOTS" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,SINKS"> SINKS:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,SINKS"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,SINKS" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,SPLAY"> SPLAY:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,SPLAY"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,SPLAY" tabIndex="10"/><br/>
          <label for="qualitydefects,MOLDING,WARP"> WARP:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MOLDING,WARP"  dispatch={props.dispatch}  name="qualitydefects,MOLDING,WARP" tabIndex="10"/>
          </div>
      </div>
)
}


function HuskyDefectsDamage(props) {

    return(
      <div className="" >
        <br/><br/>



        <label for="qualitydefects,DAMAGE,BROKEN PLATES"> BROKEN PLATES:</label>
        <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,DAMAGE,BROKEN PLATES"  dispatch={props.dispatch}  name="qualitydefects,DAMAGE,BROKEN PLATES" tabIndex="10"/><br/>
        <label for="qualitydefects,DAMAGE,BROKEN SCREW HOLE">BROKEN SCREW HOLE:</label>
        <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,DAMAGE,BROKEN SCREW HOLE"  dispatch={props.dispatch}  name="qualitydefects,DAMAGE,BROKEN SCREW HOLE" tabIndex="10"/><br/>
        <label for="qualitydefects,DAMAGE,MARKS ON PLATES"> MARKS ON PLATES:</label>
        <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,DAMAGE,MARKS ON PLATES"  dispatch={props.dispatch}  name="qualitydefects,DAMAGE,MARKS ON PLATES" tabIndex="10"/><br/>
        <label for="qualitydefects,DAMAGE,SCRATCHES"> SCRATCHES:</label>
        <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,DAMAGE,SCRATCHES"  dispatch={props.dispatch}  name="qualitydefects,DAMAGE,SCRATCHES" tabIndex="10"/><br/>
      </div>
)
}

function HuskyDefectsMachine(props) {

    return(
      <div className="" >
        <br/><br/>

        <label for="qualitydefects,MACHINE,BAG SEALING"> BAG SEALING:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MACHINE,BAG SEALING"  dispatch={props.dispatch}  name="qualitydefects,MACHINE,BAG SEALING" tabIndex="10"/><br/>
          <label for="qualitydefects,MACHINE,BAR CODE"> BAR CODE:</label>
            <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MACHINE,BAR CODE"  dispatch={props.dispatch}  name="qualitydefects,MACHINE,BAR CODE" tabIndex="10"/>
               <br/>
               <label for="qualitydefects,MACHINE,MISSING SCREWS"> MISSING SCREWS:</label>
              <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MACHINE,MISSING SCREWS"  dispatch={props.dispatch}  name="qualitydefects,MACHINE,MISSING SCREWS" tabIndex="10"/>
                 <br/>
                 <label for="qualitydefects,MACHINE,LABEL"> LABEL:</label>
                <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,MACHINE,LABEL"  dispatch={props.dispatch}  name="qualitydefects,MACHINE,LABEL" tabIndex="10"/>
                   <br/>

      </div>
)
}

function HuskyDefectsVendor(props) {
    return(
      <div className="" >
        <br/><br/>

        <label for="qualitydefects,VENDOR,WRONG COMPONENT"> WRONG COMPONENT:</label>
          <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,VENDOR,WRONG COMPONENT"  dispatch={props.dispatch}  name="qualitydefects,VENDOR,WRONG COMPONENT" tabIndex="10"/>
             <br/>
             <label for="qualitydefects,VENDOR,WRONG SCREWS"> WRONG SCREWS:</label>
            <KeyboardLoad hourObject={props.hourObject}  id="qualitydefects,VENDOR,WRONG SCREWS"  dispatch={props.dispatch}  name="qualitydefects,VENDOR,WRONG SCREWS" tabIndex="10"/>

      </div>
)
}
