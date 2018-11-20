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

import TableExampleControlled from "../../ui/digitalplantoactual/tableexample.jsx"


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
  console.log("This is the p2a object from redux "+state.get("p2a")+" these are the keys "+ Object.keys(state.get("p2a"))+" this is the workcell "+state.get("p2a").workcell)
    return {


        jobs:state.get("jobs"),
        hourObject:state.get("hour"),
        serverHour: state.get("serverHour"),
        p2a:state.get("p2a")


    }
}

function mapDispatchToProps(dispatch) { return { dispatch, someActions:bindActionCreators(someActions, dispatch) } }



// App component - represents the whole app

class Plantoactual extends Component {
  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
this.state = { shift: "1"};
this.state = { shiftSelected: "1"};
this.state = { count: 0};
     this.state = { data: false};
this.state = { minutesRemaining: 0};
this.state = { operator: null};
//this.shift1 = this.shift1.bind(this);
//this.shift2 = this.shift2.bind(this);
//this.shift3 = this.shift3.bind(this);
    this.child = React.createRef();



  //console.log("this is the jobs object in plan to actual  "+props.jobs)
}



  componentWillMount() {


    console.log("plan to actual component will mount")
    if(this.props.jobs!=undefined)
    {
    console.log("This is the jobs object in plan to actual "+this.props.jobs+" this is the id "+this.props.jobs[0].id)
    if(this.props.jobs[0].id!="test")
    {
      console.log("jobs props is loading ")
    }
    else
    {
      console.log("jobs props needs to be loaded")
    }

    }
  //  Session.set("hourObject",{})

//import "virtual-keyboard/dist/js/jquery.keyboard.extension-all.min.js"
/*
setInterval(function(){

}, 3000);
*/

//get current hour

this.setState({ comment: ""})


/*
request
   .get('/jobsRetrieveObject')
   .type('json')
   .query({ department: Session.get("department"), workcell:Session.get("workcell"),shift:response.data })
   .then(res => {
      // res.body, res.headers, res.status
console.log("This is the result in jobs retrieve "+res.body+" this is the text "+res.text)
that.setState({ jobs: res.text})


that.setState({ operatorSelected: res.text.slice(-1)[0].operator})


   })
   .catch(err => {
      // err.message, err.response
      console.log("This is the error message in jobs retrieve "+err.message+" this is the error response "+err.response)
   });



*/




var that=this


//console.log("about to try the shift retrieve")

//this.setState({ shiftSelected:"shift 1" })






//every 1 minute grab the data?




this.setState({shiftSelected:"1"});

//console.log("component will mount in graph menu")
//import 'jquery-ui-bundle'


//this.setState({operatorSelected: Session.get("operator")});






this.setState({
  department: "datacom"
});
this.setState({departmentSelected: "datacom"});
this.setState({ shiftSelected: "1"});
     this.setState({
       workcells: [
         '1001',
         '1020 db1, db2',
         '1021 bench b,d,e,f',
         '1029 blister a/ blister b'
             ]
     });
this.setState({ shift: "shift 1"});

     this.setState({
       operators: ["Lisa Edwards"]
     });


this.setState({active:0})

}

componentDidMount()
{
  console.log("plan to actual component did mount")

}

componentWillUnmount() {

//  clearInterval(this.interval);
}



  back = () => {

       setTimeout(function() {
        window.location.href = '/start';
    // FlowRouter.go('/start');


    // FlowRouter.reload();
   }, 500);
     }

     removeLastJob = () => {
console.log("calling remove last job in parent component")
this.child.current.removeLastJob();



        }
        showPreviousHour = () => {

this.child.current.showPreviousHour();


           }
           noOperator = () => {

       this.child.current.noOperator();


              }
              notScheduled = () => {

          this.child.current.notScheduled();


                 }
                 maintenance = () => {

                 this.child.current.maintenance();


                    }

  newJob= () => {

//return <Redirect to="/newjob" />
       setTimeout(function() {
  //  this.context.history.push("/newjob")

//history.push("/newjob")
     window.location.href = '/newjob';

     //FlowRouter.go('/newjob');
     //FlowRouter.reload();
    // window.location.reload();
   }, 500);


  //this.setState({ open: true });

}

endJob= () => {
  var store = require('amplify-store');
  var myStoredValues=store()
//return <Redirect to="/newjob" />
     setTimeout(function() {
       axios.get('/endJob',{
         params: {
              department: myStoredValues.department,
            workcell: myStoredValues.workcell

                }
          })
       .then(response => {

       })
       .catch(error => {
         console.log(error);
       });

 }, 500);


//this.setState({ open: true });

}



     dataEntry = () => {
          //console.log('this is:', this);
          setTimeout(function() {

            window.location.href = '/dataentry';
       // FlowRouter.go('/dataentry');


        //FlowRouter.reload();
      }, 500);
        }




     handleStartSelection = (selectedRows) => {



        if (selectedRows.toString()=="0")
        {
               setTimeout(function() {
                window.location.href = '/start';
              // FlowRouter.go('/start');


              // FlowRouter.reload();
               }, 500);

        }


       };


       handleOpen = () => {
          this.setState({open: true});
        };

        handleClose = () => {
          this.setState({open: false});
        };

        someMethod= () => {


                setTimeout(function() {

              this.props.history.push('/dataentry')

                  }, 500)
                }
                handlePill = () => {
                  console.log("calling handle pill")
                //  this.setState({active:1})
                };

  render() {
console.log("This is the jobs in render of plan to actual "+this.props.jobs)

  const { classes } = this.props;
  /*NavPills.defaultProps = {
    active: 0

  };*/
  //this.setState({active:1})




    const centerDiv= {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
    }
    const ButtonToNavigate = (props, context) => (
    <RaisedButton label="Start a new job test" className=" right" primary={true} onClick={() => context.router.history.push('/newjob')}/>

  );

  ButtonToNavigate.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };

  const ButtonTest = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/newjob') }}
    >
      Test
    </button>
  ))

  const StartJob = (props, context) => (
  <RaisedButton label="Start A New Job" className=" right" primary={true}  onClick={() =>{context.router.history.push('/newjob');/*window.location.reload();*/ }} />
);

StartJob.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

const Scanner = (props, context) => (
<RaisedButton label="Scanner App" className=" right" primary={true}  onClick={() =>{document.location.href = "/";/*window.location.reload();*/ }} />
);

Scanner.contextTypes = {
router: PropTypes.shape({
  history: PropTypes.object.isRequired,
}),
};

    return (


<MuiThemeProvider>
<div className="biggerfont" style={centerDiv}>





  <div className="z-depth-2" style={{height:"97.5vh",width:"97.5vw"}}>




<div className="testkeyboard" style={centerDiv}></div>
<ErrorBoundary>
       <TableExampleControlled dispatch={this.props.dispatch} jobs={this.props.jobs} p2a={this.props.p2a} serverHour={this.props.serverHour} hourObject={this.props.hourObject}  history={this.props.history} parentMethod={this.someMethod} ref={this.child}/>
       </ErrorBoundary>






{/*<RaisedButton label="Start a new job" className=" right" primary={true} onClick={this.newJob}/>*/}

<StartJob/>
{' '}
<RaisedButton label="End job" className=" right" primary={true} onClick={this.endJob}/>{' '}
<RaisedButton label="Back" className="dataentry right" primary={true} onClick={this.back}/>
<RaisedButton label="Remove last hour" className="dataentry right" primary={true} onClick={this.removeLastJob}/>
<RaisedButton label="Show previous hour" className="dataentry right" primary={true} onClick={this.showPreviousHour}/>
<RaisedButton label="No Operator" className="dataentry right" primary={true} onClick={this.noOperator}/>
<RaisedButton label="Not Scheduled" className="dataentry right" primary={true} onClick={this.notScheduled}/>
<RaisedButton label="Maintenance" className="dataentry right" primary={true} onClick={this.maintenance}/>
<br/><br/>
<div >

  <span > Comments: </span>
  <KeyboardLoadComments name="comments" comment={this.state.comment}  />
{this.state.comment}

  </div>


</div>




</div>
     </MuiThemeProvider>
    );
  }
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
)(Plantoactual);

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



if(this.state.comment!=undefined)
{


}
else {
  this.setState({comment:""});
}

}

componentWillReceiveProps(nextProps){

        if(nextProps.data !== this.props.data){

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

    if (base.el.tagName === "INPUT") {
      base.accept();      // accept the content
      $('form').submit(); // submit form on enter
    } else {
      base.insertText('\r\n'); // textarea
    }
  };



}

operatorInputChanged = (data) => {

// this.setState({ operator: data });
this.setState({ input: data });
var focused = $(':focus').val()


if (this.props.name =="actual")
{





//set the calculated minutes lost

}
else if (this.props.name =="comments")
{
//need to send this data tot he job update

axios.get('/jobUpdateObject',{
  params: {
       id: cookie.load("id"),
       department: cookie.load("department"),
     workcell: cookie.load("workcell"),
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







}



//this.setState({ operator: $(':focus').val() });


}

operatorInputAccepted = (data) => {





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
<div style={{ display: 'inline-block',   padding:"0", margin:"0"}}>

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
