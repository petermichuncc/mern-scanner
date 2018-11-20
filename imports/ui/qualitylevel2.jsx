import React, { Component } from 'react';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {createContainer} from 'meteor/react-meteor-data';
import DateDepartment from './datedepartment.jsx';
import { RingLoader,DotLoader } from 'react-spinners';
import axios from 'axios';


//console.log("testing the location of the imports folder")
//import react-highcharts from 'react-highcharts';

const centerDiv=
{

  margin:'0 auto'


}


// App component - represents the whole app

export default class QualityLevel2 extends Component {



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
   this.state = { config: false};
   this.state = { value: []};

   const minDate = new Date();
   const maxDate = new Date();
   minDate.setMonth(moment().format("M")-2);
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


axios.get('/departmentAllMinutesLostQualityLevel2',{
  params: {
       department: "Datacom,Packing",
       start:this.state.minDate,
       end:this.state.maxDate
     }

})
  .then(response => {
    this.setState({
      value: ["Datacom,Packing"]
    });
    console.log("This is the department before calling config "+this.state.value)

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

axios.get('/departmentAllMinutesLostQualityLevel2',{
  params: {
       department: this.state.value,
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

   axios.get('/departmentAllMinutesLostQualityLevel2',{
     params: {
          department: this.state.value,
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

 handleChangeDepartment = (event, index, value) =>{
console.log("This is the value selected"+ value)
//console.log("jquery selected text "+$(".department menuItem[value="+value+"]").text())
//console.log("This is the text "+event.target.name)
  this.setState({value})

console.log("This is the index "+index)

   axios.get('/departmentAllMinutesLostQualityLevel2',{
     params: {
          department: value,
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

   this.setState({value});

console.log("This is the state value"+ this.state.value)

}

/*componentWillUpdate(nextProps, nextState)
{
  console.log("This is the user id sent to the prop "+this.props.userId )
  console.log("component updated ")


       Meteor.call('departmentAllMinutesLost',"datacom/packing",(err,res) => this.setState({data:res}))

}

 createContainer((props) => {
      return {userId: Meteor.userId()}
 },Component);*/

 config(datatest)
 {
 console.log("calling config")
 //console.log("here is datatest "+datatest)
 if (datatest!=undefined)
 {
console.log("This is the department "+this.state.value)
   console.log("inside datatest undefined")


   var colors=datatest[0]

   var wcData=[]
   var wcDataShift1=[]
   var wcDataShift2=[]
   var wcDataShift3=[]

   for (var j=0; j<colors.length;j++)
   {


   var name=colors[j].name
   var workcenter=colors[j].workcenter
   var partnumber=colors[j].partnumber

   wcData.push({ y: colors[j].total, color: colors[j].color, name:colors[j].name, workcenter:workcenter,total:colors[j].total,partnumber:partnumber });
   wcDataShift1.push({ y: colors[j].shift1, color: colors[j].color, name:colors[j].name, workcenter:workcenter, total:colors[j].total,partnumber:partnumber });
   wcDataShift2.push({ y: colors[j].shift2, color: colors[j].color, name:colors[j].name, workcenter:workcenter, total:colors[j].total,partnumber:partnumber });
   wcDataShift3.push({ y: colors[j].shift3, color: colors[j].color, name:colors[j].name, workcenter:workcenter, total:colors[j].total,partnumber:partnumber });


   }


   wcData.sort(function(a, b) {
       return parseFloat(b.total) - parseFloat(a.total) ;
   });
   wcDataShift1.sort(function(a, b) {
       return parseFloat(b.total) - parseFloat(a.total) ;
   });
   wcDataShift2.sort(function(a, b) {
       return parseFloat(b.total) - parseFloat(a.total) ;
   });
   wcDataShift3.sort(function(a, b) {
       return parseFloat(b.total) - parseFloat(a.total) ;
   });


   wcData=wcData.slice(0, 10)
   wcDataShift1=wcDataShift1.slice(0, 10)
   wcDataShift2=wcDataShift2.slice(0, 10)
   wcDataShift3=wcDataShift3.slice(0, 10)

   var qualityIssues=[]
   for (var i=0; i<wcData.length;i++)
   {

   if (wcData[i].workcenter!=undefined)
   {
   qualityIssues.push(wcData[i].name+" - "+wcData[i].workcenter+" - "+wcData[i].partnumber )
   }

   }



var department=$(".department").text()
department=department.replace("Department", "")
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
         type: 'column',
          height: height
     },

     title: {
       margin: 70,
         text: 'Quality Level 2: '+department,
           style: {
                   fontWeight: 'bold',
                     color: 'black',
                     fontSize:titleFont
                 }
     },
     xAxis: {
       title: {
             text: 'Quality Defects',
             style: {
                   fontWeight: 'bold',
                     color: 'black',
                     fontSize:'20px'
                 }
         },
         categories: qualityIssues,
         labels: {
           rotation: -90,
                style: {
                  fontWeight: 'bold',
                    color: 'black',
                    fontSize:'15px'
                }
            }
     },
     yAxis: {
         min: 0,
         title: {
             text: '# Of Defects',

             style: {
                   fontWeight: 'bold',
                     color: 'black',
                     fontSize:'20px'
                 }
         },

         stackLabels: {
             enabled: true,
             style: {
                 fontWeight: 'bold',
                 color: 'black',
                 fontSize:'20px'
             }
         },
          labels: {
                 style: {
                   fontWeight: 'bold',
                     color: 'black',
                     fontSize:'20px'
                 }
             }
     },
      legend: {
         align: 'right',
         x: -30,
         verticalAlign: 'top',
         y: 70,
         floating: true,

         borderColor: '#CCC',
         borderWidth: 1,
         shadow: false
     },
     tooltip: {
         headerFormat: '<b>{point.x}</b><br/>',
         pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
     },
     plotOptions: {
         column: {
             stacking: 'normal',
             dataLabels: {
                 enabled: true,
                 allowOverlap: true,
                  style: {
                   textShadow: false,
                     textOutline: false,
                      fontWeight: 'bold',
                      color: 'black'

                 }
             }
         }
     },
     series: [{
           name: 'Shift 3 - Top',
           data: wcDataShift3,
           color: 'white'
       }, {
           name: 'Shift 2 - Middle',
           data: wcDataShift2,
           color: 'white'
       }, {
           name: 'Shift 1 - Bottom',
           data: wcDataShift1,
           color: 'white'
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

  render() {
console.log("This is the start before returning"+this.state.minDate)


//console.log("This is the data before returning high charts"+this.state.data)
//var datatest=this.state.data

  let button = null;
  if (this.state.config!=undefined) {
    const React = require('react');
    const ReactDOM = require('react-dom');
    var ReactHighcharts = require('react-highcharts');
    button = <ReactHighcharts config={this.state.config} key={this.state.key} neverReflow={true} className="print"> </ReactHighcharts>
  } else {
    button = <div style={centerDiv} > <RingLoader

          color={'#123abc'}

        /></div>
  }



    return (
<MuiThemeProvider>

      <div className="content">
  <div style={{ margin: '0 auto',  width:'70vw'}} className="content2" >
          {button}
</div>
     <DateDepartment handleChangeMinDate={this.handleChangeMinDate}
       handleChangeMaxDate={this.handleChangeMaxDate}
       handleChangeDepartment={this.handleChangeDepartment}
        handleClickPrint={this.handleClickPrint}
       minDate={this.state.minDate}
       maxDate={this.state.maxDate}
       value={this.state.value}
     ></DateDepartment>

     </div>
</MuiThemeProvider>
    );



  }
}
