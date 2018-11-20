import React, { Component } from 'react';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {createContainer} from 'meteor/react-meteor-data';

import DatePicker from 'material-ui/DatePicker';
import { RingLoader,DotLoader } from 'react-spinners';
import axios from 'axios';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import fetch from 'node-fetch';
import AutoComplete from 'material-ui/AutoComplete';
import highcharts3d from 'highcharts/highcharts-3d'
//import moment from 'moment/src/moment'
//console.log("testing the location of the imports folder")
//import react-highcharts from 'react-highcharts';





const centerDiv=
{

  margin:'0 auto'


}
const fruit = [
  '1', '10', '1001',

];

// App component - represents the whole app

export default class AllOpCenters extends Component {



  /*
 componentDidMount() {


    }
*/
constructor(props) {
   super(props);
   //this.handleChange = this.handleChange.bind(this);
   this.state = { data: false};
   this.state = { config: false};
   this.state = { operators: false};
  // this.state = { values: []};
   this.state = { value:false};

   const minDate = new Date();
   const maxDate = new Date();
   minDate.setYear(moment().format("Y")-1);
   minDate.setHours(0, 0, 0, 0);
   maxDate.setMonth(moment().format("M")-1);
   maxDate.setHours(0, 0, 0, 0);



   console.log("This is the data "+this.state.data)
   //var start= moment().subtract('months',1).format("YYYY-MM-DD")
   this.state = {  minDate: minDate,
                  maxDate: maxDate};
 }


componentWillReceiveProps(nextProps) {
    console.log('Component WILL RECEIVE PROPS!')

if(nextProps.data != this.props.data)
{
//
}

}




componentWillMount() {

//  const axios = require('axios');
this.setState({
  operators: ["Lisa Edwards"]
});
this.setState({
  chosenRequest: "Lisa Edwards",
});
axios.get('/operatorsRetrieve',{})
.then(response => {


  this.setState({
    operators: response.data
  });


})
.catch(error => {
  console.log(error);
});




axios.get('/averageallopworkcenters',{
  params: {
       operator: "Lisa Edwards",
       start:this.state.minDate,
       end:this.state.maxDate
     }

})
  .then(response => {



  this.config(response.data)
  })
  .catch(error => {
    console.log(error);
  });

console.log("This is the data "+this.state.data)

      console.log('Component WILL MOUNT!')
   }

componentDidMount() {
  console.log('Component DID MOUNT!')
console.log("This is data "+this.state.data + " this is typeof data "+typeof this.state.data)




if (this.state.data==false)
{

  this.componentWillMount()
}


}
handleChangeMinDate = (event, date) => {
console.log("this is the start date "+date)

axios.get('/averageallopworkcenters',{
  params: {
       operator: this.state.chosenRequest,
       start:date,
       end:this.state.maxDate
     }

})
  .then(response => {
  this.config(response.data)
  })
  .catch(error => {
    console.log(error);
  });

   this.setState({
     minDate: date,
   });
 };

 handleChangeMaxDate = (event, date) => {

   axios.get('/averageallopworkcenters',{
     params: {
          operator: this.state.chosenRequest,
          start:this.state.minDate,
          end:date
        }

   })
     .then(response => {
     this.config(response.data)
     })
     .catch(error => {
       console.log(error);
     });

   this.setState({
     maxDate: date,
   });
 };




 handleChangeOperator = (chosenRequest, index) =>{
console.log("This is the value SelectFielded"+ chosenRequest)

//console.log("jquery SelectFielded text "+$(".department menuItem[value="+value+"]").text())
//console.log("This is the text "+event.target.name)

   axios.get('/averageallopworkcenters',{
     params: {
          operator: chosenRequest,
          start:this.state.minDate,
          end:this.state.maxDate
        }

   })
     .then(response => {
     this.config(response.data)
     })
     .catch(error => {
       console.log(error);
     });

   this.setState({chosenRequest});
console.log("This is the chosen request state "+this.state.chosenRequest)
console.log("This is the state value"+ this.state.value)

}



 config(datatest)
 {
 console.log("calling config")
 //console.log("here is datatest "+datatest)
 if (datatest!=undefined)
 {
console.log("This is the department "+this.state.value)

var testarray=[]
for (var i=0; i<datatest.length;i++)
{
    testarray[i]=datatest[i][0]
    console.log("this is the test array "+ testarray[i])
}


//var operator=$(".department").text()
//department=department.replace("Department", "")
var mobile = require('is-mobile');
console.log("this is the mobile check "+ mobile());
if (mobile()==false)
{
  console.log("height is 65%")
  var height="65%"
  var titleFont='50px'
}
else {
  console.log("height is 100%")
var height="100%"
var titleFont='20px'
}



 var config = {

   chart: {
       renderTo: 'container',
       type: 'column',
       options3d: {
           enabled: true,
           alpha: 0,
          beta: 0,
          depth: 20,
          viewDistance: 50
       },
       style: {
               color: 'black',
               fontSize:'25px'
           }
   },
   title: {
       text: "Workcell averages for "+this.state.chosenRequest
   },
    xAxis: {
      categories: testarray,
       labels: {
           style: {
               color: 'black',
               fontSize:'15px'
           }
       }
   },
   scrollbar: {
       enabled: true
   },
   yAxis: {
       title: {
           text: 'Productivity'
       },
       labels: {
            formatter: function () {
               return this.value + '%';
           },
           style: {
               color: 'black',
               fontSize:'15px'
           }
       },
       stackLabels: {
           enabled: true,
           align: 'center',
           formatter: function () {
               return this.y + '%';
           }
       }
   },
   tooltip: {
       pointFormat: '{series.name}: <b>{this.y}</b> %',
       shared: true
   },
   plotOptions: {
       column: {
           depth: 25
       },
    series: {
           dataLabels: {
               align: 'center',
               enabled: true,
               rotation: 0,
               x: 2,
               y: -10,
               formatter: function () {

                       return this.y + '%';
                  // return Highcharts.numberFormat(this.y,1);

           }
           },

       }
   },
   series: [{
       color: '#00BCD4',
       data: datatest
   }]


 }
 console.log("setting config, here is config  "+config)

  this.setState({
      config: config
    });
 this.setState({ key: Math.random() });

 }//datatest if




 }

 handleClickPrint() {
console.log("clicked the handle click print")
var frame = document.getElementsByClassName('content2').item(0);

var divContents = frame.innerHTML;
           var printWindow = window.open('', '', 'height=800,width=900');
           var string='<style>@page{size:landscape;  } </style> <html><head><title>'+'</title>'
           printWindow.document.write(string);
           printWindow.document.write('</head><body >');
           printWindow.document.write(divContents);
           printWindow.document.write('</body></html>');
           printWindow.document.close();
           printWindow.print();


  }

  menu = () => {
      //console.log('this is:', this);
      console.log("clicked menu")
      setTimeout(function() {
        window.location.href = '/operatorgraphs';
  //  FlowRouter.go('/operatorgraphs');
    //FlowRouter.reload();
  }, 500);
    }


  render() {


//console.log("This is the data before returning high charts"+this.state.data)
//var datatest=this.state.data

  let button = null;
  if (this.state.config!=undefined) {
    const React = require('react');
    const ReactDOM = require('react-dom');

      var ReactHighcharts = require('react-highcharts');


      highcharts3d(ReactHighcharts.Highcharts);

    button = <ReactHighcharts config={this.state.config} key={this.state.key} neverReflow={true} className="print"> </ReactHighcharts>
  } else {
    button = <div style={centerDiv} > <RingLoader

          color={'#123abc'}

        /></div>
  }



    return (
<MuiThemeProvider>

  <div className="content">
    <div style={{ margin: '0 auto',  width:'15vw', marginBottom:"2vh", marginTop:"1vh"}}>
    <img src="logo.jpg "  className="z-depth-4 center"   />
    </div>
    <div className="z-depth-4" style={{ margin: '0 auto',  width:'70vw', paddingBottom:"1vh"}} >
  <div style={{ margin: '0 auto',  width:'70vw'}} className="content2" >
          {button}
</div>
<div className="center " >
  <AutoComplete
      floatingLabelText="Please enter an operator's name"
      filter={AutoComplete.fuzzyFilter}
      dataSource={this.state.operators}
      maxSearchResults={5}
      onNewRequest={this.handleChangeOperator}
    />



</div>
<div className="center " >
           <DatePicker style={{display: 'inline-block'}} textFieldStyle={{ width:'10vw'}}  hintText="Start" defaultDate={this.state.minDate}
              onChange={this.handleChangeMinDate}/>
{' '}

       <DatePicker style={{display: 'inline-block'}} textFieldStyle ={{ width:'10vw'}} hintText="End" defaultDate={this.state.maxDate}
          onChange={this.handleChangeMaxDate}/>


</div>

<div className="center " >
<RaisedButton label="Back" className="buttonsize menu" primary={true} zDepth={3} onClick={this.menu}/>
</div>
   </div>
     </div>
</MuiThemeProvider>
    );



  }
}
