import React, { Component } from 'react';
import { RingLoader,DotLoader } from 'react-spinners';
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



import "../../js/jquery.techbytarun.excelexportjs.js"
import "../../js/FileSaver.min.js"
import "../../js/blob.min.js"
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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
  import moment from "moment";

//import NewJob from "../../ui/digitalplantoactual/newjob.jsx"
//import 'virtual-keyboard/dist/js/jquery.keyboard.js'
//import "../../js/jquery.keyboard.extension-all.js"
//import Keyboard from 'react-virtual-keyboard';
//import Keyboard from 'react-virtual-keyboard';
//import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
if (Meteor.isClient) {

//  require('./client-only-file.js');
}
/*
Add material pro kit and improve this page.
*/

function mapStateToProps(state){
  //console.log("this is state "+state+" type of state "+typeof state+" keys "+Object.keys(state))
  //console.log("This is the shifts object from redux "+state.get("shifts")+" these are the keys "+ Object.keys(state.get("shifts")))
    return {


        shifts:state.get("shifts"),
        hourObject:state.get("hour"),
        serverHour: state.get("serverHour")


    }
}

function mapDispatchToProps(dispatch) { return { dispatch, someActions:bindActionCreators(someActions, dispatch) } }






class ShiftsFlatFileTest extends React.Component  {


  constructor(props, context) {
     super(props);


this.getData= this.getData.bind(this)


const minDate = new Date();
   const maxDate = new Date();
    var day=moment().subtract(7, 'd').format("D")
   minDate.setMonth(moment().format("M")-1,day);

   console.log("This is the current day "+day)

   minDate.setHours(0, 0, 0, 0);

   maxDate.setMonth(moment().format("M")-1);
   maxDate.setHours(0, 0, 0, 0);



   console.log("This is the data "+this.state.data)
   //var start= moment().subtract('months',1).format("YYYY-MM-DD")
   this.state = {  minDate: minDate,
                  maxDate: maxDate};



}
 //static contextTypes = { history: PropTypes.object.isRequired };
 static contextTypes = { history: PropTypes.object };





  componentWillMount= () =>  {
  var that=this
  this.setState({shiftSelected:"shift 1" })

this.setState({shifts:[{department:null,operator:null,shift:null}]})



//  this.setState({ jobs: []})
  console.log("about to try the shift retrieve")
  try {
console.log("about to try the shift retrieve on component will mount ")
    const request = require('superagent/superagent')
console.log("This is the min date "+this.state.minDate+" this is the max date "+this.state.maxDate)
var start=moment(this.state.minDate).format("YYYY-MM-DD")
var end=moment(this.state.maxDate).format("YYYY-MM-DD")
    request
       .get('/shiftsRetrieveHour',{
         params: {
             start:start,
             end:end

            }

         })
       .then(res => {
          // res.body, res.headers, res.status
    //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
  //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
    //console.log("This is the response body "+ res.body)
    if(res.body!=undefined)
    {

/*
        var newHour = addNewHour(res.body,that.state.shiftSelected)
    this.props.dispatch({
            type: 'ADD_HOUR',
            payload: newHour
        });
*/
/*
this.props.dispatch({
        type: 'INITIALIZE_SHIFTS_ARRAY',
        payload: res.body
    });
*/
this.setState({shifts:res.body})
    }

       })
       .catch(err => {
          // err.message, err.response
          console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
       });
  }
  catch(err) {
    console.log("error in the shift retrieve")
  }









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


   download = () => {

 console.log("Clicked the download button")


 var link= $("#tblExport").excelexportjs({
                 containerid: "tblExport", datatype: 'table',
             });
   // console.log("this is the link "+link)
  //document.body.appendChild(link);
  //$( ".testlink" ).append(link );
   //  link.setAttribute("type", "hidden"); // make it hidden if needed
    // link.download = 'test.xls';
   //  link.href = 'data:application/vnd.ms-excel;utf-8,test';

       //     link.click();


  a = document.createElement("a");
                 a.download = "Flat File "+moment().format("YYYY-MM-DD hh:mm")+".xls"
                 a.href = link;

                 document.body.appendChild(a);

                 a.click();

                 document.body.removeChild(a);




 /*
 swal({
 title: "Download Manufacturing Projects",
 text: "Downloading Manufacturing Projects. Please open the downloaded file and click yes to verify the file is trusted.",

 showConfirmButton: true,
 type: "success"
 });

*/





      }



  getData(val){


var that=this

    setTimeout(function() {
    that.setState({jobs:val})
},1000)

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



  }

//isSelectedNew = id => this.state.selected.indexOf(id) !== -1;
isSelected = (index) => {
//console.log("This is the is selected index "+index)

  return this.state.selected.indexOf(index) !== -1;
};


handleRowClickSelect = (event, id) => {



  }

  handleRowClickMinutesLost = (event, id) => {




      }

  handleRowClick = (event, id) => {




    }

    handleCheckboxClick = (event, id) => {




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

       handleChangeMinDate = (event, date) => {
       console.log("this is the start date "+date)
var start=moment(date).format("YYYY-MM-DD")
var end=moment(this.state.maxDate).format("YYYY-MM-DD")
          try {
        console.log("about to try the shift retrieve on component will mount ")
            const request = require('superagent/superagent')

            request
               .get('/shiftsRetrieveObject',{
                 params: {
                     start:start,
                     end:end

                    }

                 })

               .then(res => {
                  // res.body, res.headers, res.status
            //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
          //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
            //console.log("This is the response body "+ res.body)
            if(res.body!=undefined)
            {

        /*
                var newHour = addNewHour(res.body,that.state.shiftSelected)
            this.props.dispatch({
                    type: 'ADD_HOUR',
                    payload: newHour
                });
        */

      /*  this.props.dispatch({
                type: 'UPDATE_SHIFTS_ARRAY',
                payload: res.body
            });
*/
this.setState({shifts:res.body})
            }

               })
               .catch(err => {
                  // err.message, err.response
                  console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
               });
          }
          catch(err) {
            console.log("error in the shift retrieve")
          }





        };

        handleChangeMaxDate = (event, date) => {
          console.log("this is the end date "+date)
          var start=moment(this.state.minDate).format("YYYY-MM-DD")
          var end=moment(date).format("YYYY-MM-DD")
          try {
        console.log("about to try the shift retrieve on component will mount ")
            const request = require('superagent/superagent')

            request
            .get('/shiftsRetrieveObject',{
              params: {
                  start:start,
                  end:end

                 }

              })
             .then(res => {
                  // res.body, res.headers, res.status
            //console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
          //  console.log("This is the type of jobs "+typeof res.text+" this is jobs "+res.text)
            //console.log("This is the response body "+ res.body)
            if(res.body!=undefined)
            {



        /*this.props.dispatch({
                type: 'INITIALIZE_SHIFTS_ARRAY',
                payload: res.body
            });*/
            this.setState({shifts:res.body})
          /*  this.props.dispatch({
                    type: 'UPDATE_SHIFTS_ARRAY',
                    payload: res.body
                });*/


            }

               })
               .catch(err => {
                  // err.message, err.response
                  console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
               });
          }
          catch(err) {
            console.log("error in the shift retrieve")
          }




        };



render() {




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





 try {









}catch(err) {
 console.log("error in render before table example is returned "+err)
}

var planMadeCount=0

/*NavPills.defaultProps = {
  active: 0

};*/
//this.setState({active:1})

let button = null;
if (this.state.shifts[0].department!=null) {
/*  const React = require('react');
  const ReactDOM = require('react-dom');
  var ReactHighcharts = require('react-highcharts');*/
  //render the table normally
//  button = <ReactHighcharts config={this.state.config} key={this.state.key} neverReflow={true} className="print" style={{height:'99vh'}}> </ReactHighcharts>
} else {
  button = <div  > <RingLoader

        color={'#123abc'}

      /></div>
}





  return (
    <MuiThemeProvider>
    <div className="biggerfont" key={this.state.shifts}>
      <AppBar position="static" color="default" style={{margin:"0",padding:"0"}}>
             <Toolbar disableGutters={true} style={{margin:"0",padding:"0"}}>
               <div className="wrapper center">
               <div style={{width:"30vw"}} className="">

                   <Typography variant="title" color="inherit">

                    </Typography>






               </div>
               <div style={{width:"30vw"}} className="">
    <Typography variant="title" color="inherit">
      <div className="center " >
                   <DatePicker style={{display: 'inline-block'}} textFieldStyle={{ width:'10vw'}}  hintText="Start" defaultDate={this.state.minDate}
                      onChange={this.handleChangeMinDate}/>
      {' '}

               <DatePicker style={{display: 'inline-block'}} textFieldStyle ={{ width:'10vw'}} hintText="End" defaultDate={this.state.maxDate}
                  onChange={this.handleChangeMaxDate}/>
      </div>
    </Typography>
               </div>

               <div style={{width:"30vw"}} className="">
    <Typography variant="title" color="inherit">
<RaisedButton label="Download" className=" right" primary={true}  onClick={() =>{ this.download();/* context.router.history.push('/plantoactual');*/ }} />
                      </Typography>

               </div>
               </div>

             </Toolbar>
           </AppBar>
        {/*   <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="tblExport"
                  filename="tablexls"
                  sheet="tablexls"
                  buttonText="Download as XLS"/> */}
                <Table  multiSelectable={false}  id="tblExport" >




               <TableBody style={{width: "100%"}} bodyStyle={{overflowY:'auto', height:"60vh"}}>
                 <TableRow style={{padding:"0", margin:"0"}}>
                   <TableCell padding="none">
                   <Typography variant="title"  align='center'>
                   Hour
                   </Typography >
                   </TableCell>

                   <TableCell padding="none">
                   <Typography variant="title"  align='center'>
                   Date
                   </Typography >
                   </TableCell>
                   <TableCell padding="none">
               <Typography variant="title"  align='center'>
                 Department
               </Typography >
                   </TableCell>
                    <TableCell padding="none">
<Typography variant="title"  align='center'>
                  Operator
</Typography >
                    </TableCell>
                    <TableCell padding="none">
<Typography variant="title"  align='center'>
                  Part Number
</Typography >
                    </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                      Shift
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                  Workcell
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Plates Run
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Productivity
</Typography >
                     </TableCell>
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Lost Time
</Typography >
                     </TableCell>
                  {/* <TableCell padding="none">
<Typography variant="title" align='center'>
                       Lost Time Reasons
</Typography >
                     </TableCell>*/}
                     <TableCell padding="none">
<Typography variant="title" align='center'>
                       Downtime
</Typography >
                     </TableCell>
                     <TableCell padding="none">
                  <Typography variant="title" align='center'>
                       Quality Defects
                  </Typography >
                     </TableCell>
                     <TableCell padding="none">
                     <Typography variant="title" align='center'>
                       Lost Time Reasons
                     </Typography >
                     </TableCell>
                     <TableCell padding="none">
                     <Typography variant="title" align='center'>
                       Downtime Reasons
                     </Typography >
                     </TableCell>
                     <TableCell padding="none">
                     <Typography variant="title" align='center'>
                       Quality Defect Reasons
                     </Typography >
                     </TableCell>
                 </TableRow>
{this.state.shifts.map(column =>{



if(column!=undefined)
{




                 return (

                     <TableRow
                       className="tablerow1"
                       hover
                       style={{margin:"0", padding:"0"}}


                     >
                     {button}
                     <TableCell  padding="none" >

                       <Typography variant="title" align='center' >

                          {column.hourNumber}
                       </Typography >

                     </TableCell>
                     <TableCell  padding="none" >

                       <Typography variant="title" align='center' >

                          {column.date}
                       </Typography >

                     </TableCell>
                     <TableCell  padding="none" >

                       <Typography variant="title" align='center' >

                          {column.department}
                       </Typography >

                     </TableCell>
                       <TableCell  padding="none" >

                         <Typography variant="title" align='center' >

                            {column.operator}
                         </Typography >

                       </TableCell>
                       <TableCell  padding="none" >

                         <Typography variant="title" align='center' >

                            {column.partNumber}
                         </Typography >

                       </TableCell>

                       <TableCell padding="none"  >
                         <Typography variant="title" align='center'>
                        {column.shift}

                         </Typography >
                       </TableCell>

                         <TableCell padding="none" >
                           <Typography variant="title" align='center'>
                             {column.workcell}
                             </Typography >
                         </TableCell>
                         <TableCell padding="none">
                           <Typography variant="title" align='center'>
                             {column.actual}

                             </Typography >
                         </TableCell>
                          <TableCell padding="none">
                            <Typography variant="title" align='center'>
                              {column.earnedHour}

                              </Typography >
                          </TableCell>

                          <TableCell padding="none">
                            <Typography variant="title" align='center'>
                              {column.lostTimeTotal}
                              </Typography >
                        </TableCell>
                        {/*<TableCell padding="none">
                          <Typography variant="title" align='center'>
                            {column.lostTimeReason}
                            </Typography >
                        </TableCell>*/}

                          <TableCell padding="none">

                            <Typography variant="title" align='center'>

                              {column.downtimeTotal}
                            </Typography >
                          </TableCell>
                          <TableCell padding="none">

                            <Typography variant="title" align='center'>

                              {column.qualityDefectsTotal}
                            </Typography >
                          </TableCell>
                          <TableCell padding="none">

                            <Typography variant="title" align='center'>

                              {column.lostTimeReasons}
                            </Typography >
                          </TableCell>
                          <TableCell padding="none">

                            <Typography variant="title" align='center'>

                              {column.downtimeReasons}
                            </Typography >
                          </TableCell>
                          <TableCell padding="none">

                            <Typography variant="title" align='center'>

                              {column.qualityDefectsReasons}
                            </Typography >
                          </TableCell>









                     </TableRow>

                   );

}

       })}




               </TableBody>
             </Table>



</div>
</MuiThemeProvider>
    );

}

}

ShiftsFlatFileTest.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  })
}







/*
export default connect(mapStateToProps)(Plantoactual);
export default withStyles(pillsStyle)(SectionPills);
*/

import { compose } from 'recompose';

//export default connect(mapStateToProps)(NewJobNew) ;
//export default withStyles(loginPageStyle)(NewJobNew);

export default compose(
  connect(mapStateToProps),
  withStyles(pillsStyle)
)(ShiftsFlatFileTest);


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
