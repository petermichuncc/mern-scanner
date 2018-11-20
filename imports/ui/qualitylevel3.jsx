import React, { Component } from 'react';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {createContainer} from 'meteor/react-meteor-data';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import { RingLoader,DotLoader } from 'react-spinners';
import axios from 'axios';
import html2canvas from 'html2canvas';

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


const centerDiv=
{

  margin:'0 auto'


}
const bottomDiv=
{
  left:'40vw',
    marginLeft:'-50vw',
  position: 'fixed', /* This will be always visible and positioned where you want */
    bottom: '5', /* place it to the bottom */

    margin:'0 auto',
  //z-index: '9999' /* You may want to be sure no other elements will be displayed on top of it, raise this if it's still being displayed under other elements */
}

// App component - represents the whole app

export default class QualityLevel3 extends Component {



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
   this.state = { configMonthly: false};
   this.state= {showMenu:true}
   this.handleClickPrint = this.handleClickPrint.bind(this);
   this.state = { value: "datacom/packing"};
   //this.state = { department: "Datacom/Packing"};
   const minDate = new Date();
   const maxDate = new Date();
   minDate.setMonth(moment().format("M")-1);
   minDate.setHours(0, 0, 0, 0);
this.state = { value: []};



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
  this.setState({
    showMenu: true
  });
//  const axios = require('axios');
axios.get('/qualityMonthlyNew',{
  params: {
       department: "Datacom,Packing",
       start:this.state.minDate

     }

})
  .then(response => {
      console.log("This is the department before calling config "+this.state.value)

  this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });

axios.get('/qualityLevel3AllLineGraph',{
  params: {
       department: "Datacom,Packing",
       start:this.state.minDate

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

axios.get('/qualityMonthlyNew',{
  params: {
       department: this.state.value,
       start:date

     }

})
  .then(response => {
      console.log("This is the department before calling config "+this.state.value)

  this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });




axios.get('/qualityLevel3AllLineGraph',{
  params: {
       department: this.state.value,
       start:date

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


 handleChangeDepartment = (event, index, value) =>{
console.log("This is the value selected"+ value)
//console.log("jquery selected text "+$(".department menuItem[value="+value+"]").text())
//console.log("This is the text "+event.target.name)


console.log("This is the index "+index)

//var goalChartA=ReactiveMethod.call('goalRetrieve',$( ".department" ).val())


axios.get('/qualityMonthlyNew',{
  params: {
       department: value,
       start:this.state.minDate

     }

})
  .then(response => {
      console.log("This is the department before calling config "+this.state.value)

  this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });



   axios.get('/qualityLevel3AllLineGraph',{
     params: {
          department: value,
          start:this.state.minDate

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




var department=$(".department").text()
department=department.replace("Department", "")
var mobile = require('is-mobile');
console.log("this is the mobile check "+ mobile());
if (mobile()==false)
{
  console.log("height is 65%")
  var height="50%"
  var titleFont='30px'
}
else {
  console.log("height is 100%")
var height="100%"
var titleFont='20px'
}


 var config = {

   chart: {
      type: 'line',
      height: height // 16:9 ratio
  },
  title: {
      text: department+ ' Daily PPM',
      style: {
             fontWeight: 'bold',
              fontSize: titleFont
          }
  },


  xAxis: {
    title: {
          text: 'Day',
          style: {
                fontWeight: 'bold',
                  color: 'black',
                  fontSize:'20px'
              }
      },
      tickInterval: 1,
       tickAmount: 31,
        labels: {
          style: {
            fontWeight: 'bold',
              fontSize: '20px'
          }
      }
  },
  yAxis: {
     min: -50,
      startOnTick: false,

      title: {
          text: 'PPM/MTD',
          style: {
            fontWeight: 'bold',
              fontSize: '20px'
          }
      },
       labels: {
          style: {
            fontWeight: 'bold',
              fontSize: '20px'
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
        connectNulls: true,
          label: {
              connectorAllowed: false
          },
          pointStart: 1
      }
  },

  series: [ {
      name: 'PPM',
      data: datatest[0],
      color: '#000000'
  },
  {
      name: 'MTD',
      data: datatest[1],
      color: '#ffb300'
  },
  {
      name: 'Goal',
      data: datatest[2],
      color: '#536dfe'
  }


  ],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }

 }
 console.log("setting config, here is config  "+config)

  this.setState({
      config: config
    });
 this.setState({ key: Math.random() });

}//end of datatest if

}//end of config

configMonthly(datatest)
{
console.log("calling config")
//console.log("here is datatest "+datatest)
if (datatest!=undefined)
{
console.log("This is the department "+this.state.value)
  console.log("inside datatest undefined")




  var department=$(".department").text()
  department=department.replace("Department", "")
  var mobile = require('is-mobile');
  console.log("this is the mobile check "+ mobile());
  if (mobile()==false)
  {
    console.log("height is 65%")
    var height='205%'
    var titleFont='30px'
  }
  else {
    console.log("height is 100%")
  var height="410%"
  var titleFont='20px'
  }


var config = {

  chart: {
    type: 'column',
  //  height: (9 / 16 * 100) + '%' // 16:9 ratio
  height: height // 16:9 ratio

},
title: {
    text: department+ " Monthly PPM",
      style: {
              fontWeight: 'bold',
                color: 'black',
                fontSize:titleFont
            }
},
xAxis: {
  title: {
        text: 'Month',
        style: {
              fontWeight: 'bold',
                color: 'black',
                fontSize:'15px'
            }
    },
    categories: datatest[0],
    labels: {
       rotation: -90,
            style: {
              fontWeight: 'bold',
                color: 'black',
                fontSize:'20px'
            }
        }
},
yAxis: {
    min: 0,
    title: {
        text: 'MTD',

        style: {
              fontWeight: 'bold',
                color: 'black',
                fontSize:'20px'
            }
    },

    stackLabels: {
        enabled: false,
        style: {
            fontWeight: 'bold',
            color:  'black',
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
    y: 25,
    floating: true,
    backgroundColor:  'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
},
tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
   series: {
        showInLegend: false,
        connectNulls: true
    },
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: false,
            color:  'white',
             style: {
              textShadow: false,
                textOutline: false,
                 fontWeight: 'bold',

            }
        }
    }
},
series: [{
    name: 'MTD',
    data: datatest[1],
    color: 'white'
}, {
    name: 'Goal',
    type: 'spline',
    data: datatest[2],
    color: '#536dfe'

}]

}
console.log("setting config, here is config  "+config)

 this.setState({
     configMonthly: config
   });
this.setState({ keyMonthly: Math.random() });

}//end of datatest if




}//end of config monthly

handleClickMenu() {
console.log("clicked the handle click")
setTimeout(function() {
FlowRouter.go('/graphmenu')
},500)

 }


 handleClickPrint() {

   this.setState({ showMenu: false });

setTimeout(() =>{

  html2canvas(document.body).then(function(canvas) {

          var canvasImg = canvas.toDataURL("image/jpg");
          $('#divhidden').html('<img src="'+canvasImg+'" style="width:100%; height:100%; page-break-after: auto;" >');

  });

//
setTimeout(() =>{
  console.log("second time out")
this.setState({ showMenu: true });
var win = window.open('','printwindow');
win.document.write('<html><head>');
win.document.write('<style>@page {size: landscape; margin: 0; } @media print { html, body { height: 99%; }}</style>');
win.document.write('</head><body>');

win.document.write($("#divhidden").html());

win.document.write('</body></html>');
win.print();
win.close();
$("#divhidden img").remove()

}, 1000);


}, 1000);
console.log("after time out")



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
console.log("This is the start before returning"+this.state.minDate)
const {value} = this.state;




  let button = null;
  if (this.state.config!=undefined) {
    const React = require('react');
    const ReactDOM = require('react-dom');
    var ReactHighcharts = require('react-highcharts');
    button = <ReactHighcharts config={this.state.config} key={this.state.key} neverReflow={true}> </ReactHighcharts>
  } else {
    button = <div style={centerDiv} > <RingLoader

          color={'#123abc'}

        /></div>
  }

  let button2 = null;
  if (this.state.configMonthly!=undefined) {
    const React = require('react');
    const ReactDOM = require('react-dom');
    var ReactHighcharts = require('react-highcharts');
    button2 = <ReactHighcharts config={this.state.configMonthly} key={this.state.keyMonthly} neverReflow={true} > </ReactHighcharts>

} else {

    button2 = <div style={centerDiv} > <RingLoader
          color={'#123abc'}
        /></div>
  }

  let menu = null;
  console.log("This is the show menu "+this.state.showMenu )
  if (this.state.showMenu==true) {

  menu= (
    <div>
    <div className="center" >

      <SelectField
          floatingLabelText="Department"
            className="department"
            style={{ width:'20vw'}}
             multiple={true}

             value={value}
             onChange={this.handleChangeDepartment}


           >
             {this.menuItems(value)}
           </SelectField>


    </div>
    <div className="center " >
               <DatePicker style={{display: 'inline-block'}} textFieldStyle={{ width:'10vw'}}  hintText="Start" defaultDate={this.state.minDate}
                  onChange={this.handleChangeMinDate}/>

  </div>

  <div className="center">
    <RaisedButton style={{ width:'10vw'}} label="Menu" className="buttonsize menu" primary={true} onClick={this.handleClickMenu}/>
  {' '}
  <RaisedButton style={{width:'10vw'}} label="Print" className="buttonsize print" primary={true} onClick={this.handleClickPrint}/>

  </div>
  </div>
)


} else {
  menu = <div  ></div>

  }

  function menuItem(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }



    return (
<MuiThemeProvider>

      <div className="">
          <div id="divhidden"></div>
          <div className="containerPrint" id="testPrint">


        <div style={{  width:'20vw', float:'left' }} id="contentQualityLeft" >
                {button2}
      </div>
  <div style={{  width:'75vw',float:'left'}} id="contentQualityRight" >
          {button}
</div>

</div>
<div style={bottomDiv} className="center">
      {menu }
    </div>
     </div>
</MuiThemeProvider>
    );



  }
}
