import React, { Component } from 'react';
 //import Blaze from 'meteor/gadicc:blaze-react-component';

 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 import RaisedButton from 'material-ui/RaisedButton';
 import TextField from 'material-ui/TextField';
 import DatePicker from 'material-ui/DatePicker';
 import {createContainer} from 'meteor/react-meteor-data';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import { Card, Row, Col, Collapsible,CollapsibleItem } from 'react-materialize';
import Paper from 'material-ui/Paper';
import axios from 'axios';

//require("materialize-css/dist/css/materialize.css");
//require("../imports/css/materialize.css");
import "../css/materialize.css"
//require("materialize-css/sass/components/_collapsible.scss");

// App component - represents the whole app

/*export default class Dataentry extends Component {
}*/
//send the operator,shift,department,workcell,prn
//to the save function




function save(operator,shift,department,workcenter,partnumber,prn) {
console.log("calling the save function, this is the prn "+prn)
prn=Number(prn)




var losttimeother= $('.losttimeother').val();
var downtimeother= $('.downtimeother').val();
var losttimeReason=""
var downtimeReason=""


console.log("This is lost time other "+ losttimeother)
console.log("this is downtimeother "+downtimeother)

if (Number(losttimeother)>0 )
{
  swal({
  title: 'Please enter the reason for "other" lost time',
  input: 'text',
  inputPlaceholder: 'Reason',
  showCancelRaisedButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (losttimeReason) {
  swal({
    type: 'success',
    html: 'Reason ' + losttimeReason
  })

console.log("the lost time is greater than 0 "+ losttimeReason)
console.log("This is the downtime other "+downtimeother)
if (Number(downtimeother)>0)
{
  swal({
  title: 'Please enter the reason for "other" downtime',
  input: 'text',
  inputPlaceholder: 'Reason',
  showCancelRaisedButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (downtimeReason) {
  swal({
    type: 'success',
    html: 'Reason ' + downtimeReason
  })
})
console.log("the downtime is greater than 0 "+downtimeReason)
}




})

}
else
{

if (Number(downtimeother)>0)
{
  swal({
  title: 'Please enter the reason for "other" downtime',
  input: 'text',
  inputPlaceholder: 'Reason',
  showCancelRaisedButton: true,
  inputValidator: function (value) {
    return new Promise(function (resolve, reject) {
      if (value) {
        resolve()
      } else {
        reject('You need to write something!')
      }
    })
  }
}).then(function (downtimeReason) {
  swal({
    type: 'success',
    html: 'Reason ' + downtimeReason
  })
})
console.log("the downtime is greater than 0 "+downtimeReason)
}

}




var total=0
         $(".losttime input,.downtime input").each(function() {
          //This iterates through all the
            if(!isNaN(this.value)) {
              console.log("This is the total for losttime and downtime"+total+" this is the value "+this.value)
              total=total+Number(this.value)
               // alert(this.value + " is a valid number");
               //I need to total this value

            }


        });

 var minuteslost=Number($('[name=minuteslost]').val())
 console.log("This is the minutes lost in next"+minuteslost)
console.log("This is the total in minutes lost "+total)
 if (total>=0 && minuteslost>=0)
 {


 var minutesRemaining=minuteslost-total
console.log("this is the minutes remaining in next"+minutesRemaining)


if (Number(minutesRemaining)!=0 )
{
  swal(
  'Please account for any remaining minutes lost',
  'Thank you',
  'success'
)
return false
}

}
 //var operator=$('.operator').val()

 //console.log("This is the operator length "+ operator.length)
//check if operator is empty
console.log("This is the operator "+operator)
operator=operator.trim()
if (operator==null || operator==undefined || operator==""|| operator==" ")
{








  swal(
  'Please enter an operator name',
  'Thank you',
  'success'
)
return false



}
 var date=$('[name=date]').val()


//check if operator is empty


 if (date.length==0||date.includes("Invalid"))
 {







  swal(
  'Please select a date',
  'Thank you',
  'success'
)
return false


}
 var planned=$('[name=planned]').val()


//check if operator is empty


 if (planned.length==0)
 {





  swal(
  'Please enter a value for planned',
  'Thank you',
  'success'
)
return false


}

var actual=$('[name=actual]').val()


//check if operator is empty


 if (actual.length==0)
 {






  swal(
  'Please enter a value for actual',
  'Thank you',
  'success'
)
return false


}




 if (shift.length==0)
 {






  swal(
  'Please select a value for shift',
  'Thank you',
  'success'
)
return false


}



//check if operator is empty


 if (department.length==0)
 {






  swal(
  'Please select a value for department',
  'Thank you',
  'success'
)
return false


}



//check if operator is empty
console.log("what is the workcenter length "+workcenter.length )
console.log("what is the workcenter "+workcenter )
 if (workcenter.length<=0 ||workcenter==null||workcenter==undefined)
 {






  swal(
  'Please select a value for workcenter',
  'Thank you',
  'success'
)
return false


}


//check if operator is empty
console.log("This is the partnumber "+partnumber)
if (partnumber==null || partnumber==undefined|| partnumber=="")
{
 swal(
  'Please enter a part number',
  'Thank you',
  'success'
)
return false



  }
 else if (partnumber.length==0)
 {







  swal(
  'Please enter a part number',
  'Thank you',
  'success'
)
return false


}



          var totalMinutesLost=0
 $(".losttime input,.downtime input").each(function() {
          //This iterates through all the
            if(!isNaN(this.value)) {
              totalMinutesLost=totalMinutesLost+Number(this.value)
               // alert(this.value + " is a valid number");
               //I need to total this value

            }


        });
var totalLostTime=0
 $(".losttime input").each(function() {
          //This iterates through all the
            if(!isNaN(this.value)) {
              totalLostTime=totalLostTime+Number(this.value)
               // alert(this.value + " is a valid number");
               //I need to total this value

            }
         });
var totalDowntime=0
 $(".downtime input").each(function() {
          //This iterates through all the
            if(!isNaN(this.value)) {
              totalDowntime=totalDowntime+Number(this.value)
               // alert(this.value + " is a valid number");
               //I need to total this value

            }
         });
 var totalQuality=0
 $(".qualitydefects input").each(function() {
          //This iterates through all the
            if(!isNaN(this.value)) {
              totalQuality=totalQuality+Number(this.value)
               // alert(this.value + " is a valid number");
               //I need to total this value

            }


        });

var my_objectAll = {};
 // my_object["date"]=$('[name=date]').val()




var my_object={}

$(".plantoactual input,.plantoactual select").each(function() {
          //This iterates through all the

           var name=$(this).attr("name");
          if (name!=undefined)
          {
                 if (name.toLowerCase().includes("date"))
               {
                  var date=this.value
                   date=date.replace("th", "");
                date=date.replace("rd", "");
                 date=date.replace("st", "");

                  my_objectAll[name] = moment(date).format("YYYY-MM-DD");
               }
               else
               {

                my_object[name] = this.value;
               }
                }
//I can give this a unique id then insert directly into mongodb collection


        });
my_object["shift"]=shift
my_object["department"]=department
my_object["workcenter"]=workcenter
my_object["operator"]=operator
      //  var shift=this.state.shift
      //  var department=this.state.department
      //  var workcenter=this.state.workcell


my_objectAll["plantoactual"]=my_object
var my_object={}
$(".losttime input").each(function() {
          //This iterates through all the

           var name=$(this).attr("name");
          // console.log("this is the name "+name)
           //var value=this.value
             //  console.log("This is the value "+this.value)
             //name=name+"*"
                my_object[name] = this.value;
//I can give this a unique id then insert directly into mongodb collection


        });
my_objectAll["losttime"]=my_object
var my_object={}
$(".downtime input").each(function() {
          //This iterates through all the

           var name=$(this).attr("name");
          // console.log("this is the name "+name)
           //var value=this.value
             //  console.log("This is the value "+this.value)
               // name=name+"**"
                my_object[name] = this.value;
//I can give this a unique id then insert directly into mongodb collection


        });
my_objectAll["downtime"]=my_object
var my_object={}
$(".qualitydefects input").each(function() {
          //This iterates through all the

           var name=$(this).attr("name");
          // console.log("this is the name "+name)
           //var value=this.value
             //  console.log("This is the value "+this.value)
                //name=name+"***"
                my_object[name] = this.value;
//I can give this a unique id then insert directly into mongodb collection


        });

my_objectAll["qualitydefects"]=my_object
  my_objectAll["totalDowntime"]=totalDowntime
  my_objectAll["totalLostTime"]=totalLostTime
  my_objectAll["totalMinutesLost"]=totalMinutesLost
   my_objectAll["timestamp"]=moment().format("YYYY-MM-DD HH:mm:ss.SSS")
   my_objectAll["prn"]=Number(prn)
    my_objectAll["LostTimeOtherReason"]=losttimeReason
 my_objectAll["totalLostTime"]=totalLostTime
 my_objectAll["totalMinutesLost"]=totalMinutesLost
 my_objectAll["totalDowntime"]=totalDowntime
  my_objectAll["DowntimeOtherReason"]=downtimeReason
  my_objectAll["totalQuality"]=totalQuality


//Meteor.call('allDataInsert',my_objectAll);
axios.get('/allDataInsert',{
  params: {
       qualitydefects:my_objectAll["qualitydefects"],
       totalDowntime:totalDowntime,
       totalLostTime:totalLostTime,
       totalMinutesLost:totalMinutesLost,
       timestamp:moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
       prn:Number(prn),
       otherLostTimeReason:losttimeReason,
       totalLostTime:totalLostTime,
       totalMinutesLost:totalMinutesLost,
       totalDowntime:totalDowntime,
       otherDowntimeReason:downtimeReason,
       totalQuality:totalQuality,
       plantoactual:my_objectAll["plantoactual"],
       losttime:my_objectAll["losttime"],
       downtime:my_objectAll["downtime"]
     }

})
  .then(response => {
    // console.log("This is the department before calling config "+this.state.value)

  //this.configMonthly(response.data)
  })
  .catch(error => {
    console.log(error);
  });
  /*
axios({
  method: 'post',
  url: '/allDataInsert',
  data: {
    aObject: my_objectAll

  }
});*/








}

function myFunction() {
    var x = Math.floor((Math.random() * 30) + 1);

if (x==1)
{
 return 'Nice work';
}
else if (x==2)
{
   return 'Good job';
}
else if (x==3)
{
  return 'Congratz';
}
else if (x==4)
{
  return 'Fantastic';
}
else if (x==5)
{
  return 'Keep it up';
}
else if (x==6)
{
  return 'Good going';
}
else if (x==7)
{
  return 'Good work';
}
else if (x==8)
{
  return 'Bravo';
}
else if (x==9)
{
  return 'Compliments';
}
else if (x==10)
{
  return 'Well done';
}
else if (x==11)
{
  return 'Perfect';
}
else if (x==12)
{
  return 'Marvelous';
}
else if (x==13)
{
  return 'Excellent';
}
else if (x==14)
{
  return 'Right on';
}
else if (x==15)
{
  return 'Nice going';
}
else if (x==16)
{
  return 'Kudos to you';
}
else if (x==17)
{
  return 'Good effort';
}
else if (x==18)
{
  return "That's the way";
}
else if (x==19)
{
  return "Way to go";
}
else if (x==20)
{
  return "Nice one";
}
else if (x==21)
{
  return "Good stuff";
}
else if (x==22)
{
  return "You did that very well";
}
else if (x==23)
{
  return "Superb";
}
else if (x==24)
{
  return "Super-Duper";
}
else if (x==25)
{
  return "What neat work";
}
else if (x==26)
{
  return "That’s the way to do it";
}
else if (x==27)
{
  return "Cool";
}
else if (x==28)
{
  return "Now you have it";
}
else if (x==29)
{
  return "That’s coming along nicely";
}
else if (x==30)
{
  return "That was first class work";
}

}

function myFunctionColor() {
    var x = Math.floor((Math.random() * 7) + 1);

if (x==1)
{
 return 'green'
}
else if (x==2)
{
   return 'blue'
}
else if (x==3)
{
  return 'green accent-3'
}
else if (x==4)
{
  return 'cyan accent-2'
}
else if (x==5)
{
  return 'deep-purple darken-4'
}
else if (x==6)
{
  return 'deep-purple accent-3'
}
else if (x==7)
{
  return 'amber darken-4'
}
}








function Downtime(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log("This is the isloggedin "+isLoggedIn)

  if (isLoggedIn =="datacom") {

        return <Datacom/>;
  }
  else if (isLoggedIn =="packing") {

        return <Packing/>;
  }
  else if (isLoggedIn =="manual") {

        return <Manual/>;
  }
  else if (isLoggedIn =="scd") {

        return <Scd/>;
  }
  else if (isLoggedIn =="manualboxes") {

        return <ManualBoxes/>;
  }
  else if (isLoggedIn =="metals") {

        return <Metals/>;
  }
  else if (isLoggedIn =="raceway") {

        return <Raceway/>;
  }
  else if (isLoggedIn =="wiu") {

        return <Wiu/>;
  }
  else if (isLoggedIn =="autoboxes") {

        return <Autoboxes/>;
  }
  else if (isLoggedIn =="husky") {

        return <Husky/>;
  }
  else if (isLoggedIn =="injection") {

        return <Injection/>;
  }
  else{

    return null
  }

}

function Quality(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log("This is the isloggedin in quality selection"+isLoggedIn)

  if (isLoggedIn =="datacom") {

        return <DatacomQuality/>;
  }
  else if (isLoggedIn =="packing") {

        return <PackingQuality/>;
  }
  else if (isLoggedIn =="manual") {

        return <ManualQuality/>;
  }
  else if (isLoggedIn =="scd") {

        return <ScdQuality/>;
  }
  else if (isLoggedIn =="manualboxes") {

        return <ManualBoxesQuality/>;
  }
  else if (isLoggedIn =="metals") {

        return <MetalsQuality/>;
  }
  else if (isLoggedIn =="raceway") {

        return <RacewayQuality/>;
  }
  else if (isLoggedIn =="wiu") {

        return <WiuQuality/>;
  }
  else if (isLoggedIn =="autoboxes") {

        return <AutoboxesQuality/>;
  }
  else if (isLoggedIn =="husky") {

        return <HuskyQuality/>;
  }
  else if (isLoggedIn =="injection") {

        return <InjectionQuality/>;
  }
  else{

    return null
  }

}


/*
const titles = [
  '1001',
  '1020',
  '1021',
  '1029'

]
*/


export default class DataentryOriginal extends Component {

  constructor(props) {
     super(props);
     //this.handleChange = this.handleChange.bind(this);
  this.state = { department: "datacom"};
this.state = { shift: "1"};
this.state = { count: 0};
     this.state = { data: false};
this.state = { minutesRemaining: 0};
this.state = { operator: null};


this.handleKeyUp = this.handleKeyUp.bind(this);
this.entriesToday = this.entriesToday.bind(this);
this.saveRaisedButton = this.saveRaisedButton.bind(this);
this.prevRaisedButton = this.prevRaisedButton.bind(this);
this.nextRaisedButton = this.nextRaisedButton.bind(this);
this.handleChangeOperator=this.handleChangeOperator.bind(this);
this.handleChangePartNumber=this.handleChangePartNumber.bind(this);
this.handleChangeDate = this.handleChangeDate.bind(this);
this.handleChangePlanned = this.handleChangePlanned.bind(this);
this.handleChangeActual = this.handleChangeActual.bind(this);
}

componentDidMount() {




}


   componentWillMount() {

  //this.setState({operator: "Please select"});
    this.setState({color: "white"});
  this.setState({date: new Date()});
    this.setState({partNumber: ""});
      this.setState({operator: ""});
  this.setState({currentPrn: null});
this.setState({department: "datacom"});
this.setState({departmentSelected: "datacom"});
this.setState({ shift: "shift 1"});
     this.setState({
       workcells: [
         '1001',
         '1020 db1, db2',
         '1021 bench b,d,e,f',
         '1029 blister a/ blister b'
             ]
     });


     this.setState({
       operators: ["Lisa Edwards"]
     });
     this.setState({
       partNumbers: ["1"]
     });


     axios.get('/departmentWorkcenters',{
       params: {
            department: "datacom",

          }

     })
       .then(response => {
         // console.log("This is the department before calling config "+this.state.value)
       this.setState({workcells:response.data});
       this.setState({ workcell: "1001"});
       //this.configMonthly(response.data)
       })
       .catch(error => {
         console.log(error);
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

     axios.get('/partnumberRetrieve',{
       params: {
            department: "datacom",
          }
     })
     .then(response => {
      // console.log("This is the part numbers retrieved "+response.data)
       this.setState({
         partNumbers: response.data
       });


     })
     .catch(error => {
       console.log(error);
     });



     //  const axios = require('axios');







     axios.get('/prnReturn')
       .then(response => {
         this.setState({
           currentPrn: response.data
         });
        console.log("This is the prn to start with"+ response.data)


       })
       .catch(error => {
         console.log(error);
       });
   //  const axios = require('axios');



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


       retrieveEntry(operator,shift,department,workcenter,prn,previousAllData) {
       var prevPrn=prn-1

          var that = this;
       //console.log("This is the part number at start of previous"+ previousAllData["plantoactual"]["partnumber"])




       var workcenterSaved="1001"


       if (previousAllData!=false && typeof previousAllData=="object")
       {

       var allData = Object.assign({}, previousAllData);

       var prevPartNumber=allData["plantoactual"]["partnumber"]

       console.log("This is the previous part number "+ prevPartNumber)


                // this.value=planned2actual["department"]

       //Here I'm setting the department then setting the workcenters

                     $('[name=department]').val(allData["plantoactual"]["department"])
                 //    Session.setPersistent("department", allData["plantoactual"]["department"])

               /*    Meteor.call('dataentriesWorkcenters',allData["plantoactual"]["department"] ,function(error, result){
                   if(error){
                   alert('Error');
                   }else{
                      workcenters=result
                      Session.set("workcenters",workcenters)

                   console.log("workcenters call in prev"+workcenters)
                   console.log("type of workcenters in meteor call " + typeof workcenters)


                   }

                  })*/


       console.log("before plan to actual")

       $(".plantoactual input, .plantoactual select").each(function() {
               //This iterates through all the

                var name=$(this).attr("name");
                  if (name!=undefined)
                {

                  console.log("This is the name "+name)
                if (name.toLowerCase().includes("operator"))
                {
                   console.log("name is operator, here is the name "+allData["plantoactual"][name])
                   //$('[name=operator]').val(planned2actual[name])
                   // console.log("setting paul staffa")
                   that.setState({operatorTyped: allData["plantoactual"][name]});
                   that.setState({operator: allData["plantoactual"][name]});
               //     $('[name=operator]').val(allData["plantoactual"][name]);

                   //$('.operator').trigger('change')
                    // $(".operator option:selected").val(planned2actual[name])
                 //$('.operator').val(planned2actual[name]).change();

                }
                else if (name.toLowerCase().includes("partnumber"))
                {

                   console.log("name is partnumber, here is the part number "+allData["plantoactual"][name])
               // $('.partnumber').val(allData["plantoactual"][name]);
               //   $('.partnumber').trigger('change')
                   // $('.partnumber').val("TPJ1GRY").trigger('change');

                  // $('.partnumber').trigger('change')

                }


                else if (name.toLowerCase().includes("date"))
                {
              console.log("This is the date "+allData[name])

                 //this.value=


                }

               else
               { console.log("calling else statement ")
                    // console.log("this is the name "+name)
                     this.value=allData["plantoactual"][name]
                     }

                     }
       //I can give this a unique id then insert directly into mongodb collection


             });

       that.setState({departmentSelected:allData["plantoactual"]["department"] });
            that.setState({shift: allData["plantoactual"]["shift"]});
             that.setState({date:new Date(moment(allData["date"])) });

             console.log("This is the department "+allData["plantoactual"]["department"])
              that.setState({department: allData["plantoactual"]["department"]});


              axios.get('/partnumberRetrieve',{
                params: {
                     department: allData["plantoactual"]["department"],
                   }
              })
              .then(response => {
               // console.log("This is the part numbers retrieved "+response.data)
                that.setState({
                  partNumbers: response.data
                });
                that.setState({
                  partNumberTyped: allData["plantoactual"]["partnumber"]
                });
                that.setState({
                  partNumber: allData["plantoactual"]["partnumber"]
                });
              })
              .catch(error => {
                console.log(error);
              });






              axios.get('/departmentWorkcenters',{
                params: {
                     department: allData["plantoactual"]["department"],

                   }

              })
                .then(response => {
                  // console.log("This is the department before calling config "+this.state.value)
                that.setState({workcells:response.data});

                 that.setState({workcell:allData["plantoactual"]["workcenter"]});
                //this.configMonthly(response.data)
                })
                .catch(error => {
                  console.log(error);
                });

             //   workcenterSaved=allData["plantoactual"]["workcenter"]
             //   console.log("This is the workcenter saved at start "+workcenterSaved)
           //     $('[name=workcenter]').val(allData["plantoactual"]["workcenter"]);
             //   $('[name=workcenter] option:selected').val(allData["plantoactual"]["workcenter"])




       /*
       console.log("This is the part number saved"+ prevPartNumber)
       $('.partnumber').val(prevPartNumber);
                   $('.partnumber').trigger('change')
       */
       //losttime data
       //console.log("this is the lost time data in previous "+losttime)


       //var my_object = {};

       $(".losttime input").each(function() {
               //This iterates through all the
                var name=$(this).attr("name");
                 if (name!=undefined)
                {
                     //name=name+"*"
               // console.log("this is the name "+name)
                //var value=this.value
                  //  console.log("This is the value "+this.value)

                   this.value=allData["losttime"][name]
       //I can give this a unique id then insert directly into mongodb collection
                }

             });



       //Put data into downtime

       $(".downtime input").each(function() {
               //This iterates through all the
                 var name=$(this).attr("name");
                 if (name!=undefined)
                {


                     //name=name+"**"
                   this.value=allData["downtime"][name]
                 //  console.log("This is the name "+name+" this is the value "+allData["downtime"][name])
       //I can give this a unique id then insert directly into mongodb collection
                }

             });

       //set timeout



       $(".qualitydefects input").each(function() {
               //This iterates through all the
               var name=$(this).attr("name");
                 if (name!=undefined)
                {

                 //  name=name+"***"

                   this.value=allData["qualitydefects"][name]
       //I can give this a unique id then insert directly into mongodb collection

                 }
             });
       console.log("after quality defects")


     }//this checks if the entry is true

       }


       zeroEntries() {

       console.log("calling zero entries")
       //setting values to 0
       var word=myFunction()
       var color=myFunctionColor()
       setTimeout(function() {

       Materialize.toast(word, 4000, color)

        $('.plan2actualheader').click()


       $(".datepicker").focus();

       }, 800);
       setTimeout(function() {


       $(".datepicker").focus();

       }, 100);

        $(".plantoactual input,.plantoactual select").each(function() {
                 //This iterates through all the
         var name=$(this).attr("name");
                 if (name!=undefined)
                 {



                   if (name.toLowerCase().includes("operator"))
                   {

                  //   $('.operator').val('');

                   }
                   else if (name.toLowerCase().includes("date"))
                   {

                //   $('.firstdate').val(date)

                   }
                    else if (name.toLowerCase().includes("department"))
                   {

                     this.value="datacom";

                    /*      Meteor.call('dataentriesWorkcenters',"datacom" ,function(error, result){
       if(error){
       alert('Error');
       }else{
          workcenters=result
          Session.set("workcenters",workcenters)

       console.log("workcenters "+workcenters)
       console.log("type of workcenters in meteor call " + typeof workcenters)

       }


       });*/
                     //put a settimeout here
                     setTimeout(function(){
                        $('.partnumber').val('CP8I');

                 },700)
                   }
                    else if (name.toLowerCase().includes("workcenters"))
                   {

                     this.value="1001";
                   }
                   else if (name.toLowerCase().includes("shift"))
                   {

                     this.value="shift 1";
                   }
                   else
                   {
                     this.value=0;

                   }
                 }

               });

       $(".losttime input").each(function() {
                 //This iterates through all the

                //  var name=$(this).attr("name");
                this.value=0;



               });

       $(".downtime input").each(function() {
                 //This iterates through all the

                //  var name=$(this).attr("name");
                this.value=0;



               });


       $(".qualitydefects input").each(function() {
                 //This iterates through all the

                //  var name=$(this).attr("name");
                this.value=0;



               });

       //new entry screen was reached and all the values were reset to 0


       }


       nextRaisedButton()
       {
//Make next button load faster

         var operator=this.state.operator
         var shift=this.state.shift
         var department=this.state.department
         var workcenter=this.state.workcell
         var prn=this.state.currentPrn
         var partnumber=this.state.partNumber

//Go ahead and set the prn to prn+1


    var that = this;

    console.log("clicking next button")

    //var prevPrn=Number(prn)-1

    //console.log("This is the previous prn to send "+prevPrn)


    //Checks if the sent prn is a new entry or not
    /*Meteor.call("prnReturnNewEntry",Session.get("prn"), function(error, result){
    if(error){
    alert('Error '+error);
    }else{
    Session.set("newEntry", result)

    }
    });*/

    axios.get('/prnReturnNewEntry',{
    params: {
       prn: Number(prn),
     }
    })
    .then(response => {



    if (response.data==true)
    {
    console.log("It's a new entry")
this.setState({currentPrn:Number(this.state.currentPrn)+1});
 //save it then zero out all the entries
save(operator,shift,department,workcenter,partnumber,prn)
//testing save
this.setState({shift:"shift 1"});
this.setState({workcell:"1001"});
this.setState({department:"datacom"});
var date=moment().format("MMMM Do YYYY")
 this.setState({date:date});
 this.setState({operatorTyped:""});
 this.setState({operator:""});
this.zeroEntries()
//then zero out everything
var word=myFunction()
var color=myFunctionColor()


Materialize.toast(word, 4000, color)

    }
    else if (response.data=="last prn")
    {
      this.setState({currentPrn:Number(this.state.currentPrn)+1});
      console.log("This is the last prn")
      this.setState({shift:"shift 1"});
      this.setState({workcell:"1001"});
      this.setState({department:"datacom"});
      var date=moment().format("MMMM Do YYYY")
       this.setState({date:date});
       this.setState({operatorTyped:""});
       this.setState({operator:""});
      this.zeroEntries()

    }
    else if (response.data==false)
    {

console.log("It's not a new entry")
//At this point check if it's the last prn

this.setState({currentPrn:Number(this.state.currentPrn)+1});

var that = this;

console.log("clicking next button")

//var prevPrn=Number(prn)-1

//console.log("This is the previous prn to send "+prevPrn)

axios.get('/allDataRetrieve',{
params: {
 prn: this.state.currentPrn
}
})
.then(response => {



var nextAllData=response.data
console.log("This is the typeof nextAllData "+ typeof nextAllData)

//console.log("This is the part number before calling next entry "+nextAllData["plantoactual"]["partnumber"])

this.retrieveEntry(operator,shift,department,workcenter,prn,response.data)

//console.log("This is the previous all data "+this.state.previousAllData)
})
.catch(error => {
console.log(error);
});

    }
  //var previousAllData=response.data

    })
    .catch(error => {
    console.log(error);
    });


}





       prevRaisedButton()
       {
         var operator=this.state.operator
         var shift=this.state.shift
         var department=this.state.department
         var workcenter=this.state.workcenter
         var prn=this.state.currentPrn
         var partnumber=this.state.partNumber

   var that = this;

console.log("clicking previous button")

var prevPrn=Number(prn)-1

console.log("This is the previous prn to send "+prevPrn)

axios.get('/allDataRetrieve',{
  params: {
       prn: prevPrn,
     }
})
.then(response => {

that.setState({
  currentPrn: prevPrn
});

var previousAllData=response.data
console.log("This is the typeof previousAllData "+ typeof previousAllData)

//console.log("This is the part number before calling previous entry "+previousAllData["plantoactual"]["partnumber"])
 this.retrieveEntry(operator,shift,department,workcenter,prn,response.data)

//console.log("This is the previous all data "+this.state.previousAllData)
})
.catch(error => {
console.log(error);
});


        }







       saveRaisedButton()
       {
console.log("This is the operator "+this.state.operator)
var operator=this.state.operator
var shift=this.state.shift
var department=this.state.department
var workcenter=this.state.workcell
var prn=this.state.currentPrn
var partnumber=this.state.partNumber
         swal({
           title: 'Would you like to save the record?',
           text: "Save the record",
           type: 'success',
           showCancelRaisedButton: true,
           confirmRaisedButtonColor: '#3085d6',
           cancelRaisedButtonColor: '#d33',
           confirmRaisedButtonText: 'Yes, save it!'
         }).then(function (result) {
           console.log("This is the result value "+result.value)
           if (result.value) {
         console.log("calling save")
             //save()
             console.log("This is the operator in promise"+operator)
             save(operator,shift,department,workcenter,partnumber,prn)

           }
           else
           {
             return 0
           }
         })




       }

       entriesToday()
       {

      /*     Meteor.call('dailydatacountNew', function(error, result){
       if(error){
       alert('Error');
       }else{
       Session.set("dailydatacount", result)
       }
       });*/

       axios.get('/dailyDataCountNew')
         .then(response => {
           // console.log("This is the department before calling config "+this.state.value)
           this.setState({
             count: response.data
           });
           console.log("This is the count "+this.state.count)
         //this.configMonthly(response.data)
         console.log("This is the daily data count "+response.data)

         var datacount=response.data.toString()
        var amount="You have entered ".concat(datacount)
        var amount=amount.concat(" entries today. "+myFunction())
       Materialize.toast(amount, 15000, myFunctionColor())

         })
         .catch(error => {
           console.log(error);
         });
           //Session.set("dailydatacount",datacount)


     //var color=myFunctionColor()
        //Say how many entries have been outputted here.







}


handleLostTimeClick(event)
{
console.log("user clicked losttime header")


}


handleFormClick(event)
{
//event.target.refs.focus()
console.log("user clicked losttime form")
//event.target.click



if (event.target.name!=undefined)
{
var name=event.target.name.toString()
console.log("This is the name "+name)
event.target.select()
}
//$('[name="NOT SCHEDULED"]').select();

//$("."+event.target.name).focus()

//event.refs["NOT SCHEDULED"].select();

}
handleChangeOperator(searchText, dataSource, params) {

console.log("This is the searchText "+searchText)

this.setState({operatorTyped:searchText});

}

handleChangeDate (nullTest, date) {
console.log("This is the value selected"+ date)

   this.setState({date:date});
   $("[name=planned]").select()
}

handleSelectOperator = (chosenRequest, index) =>{

console.log("This is the operator before changing "+this.state.operator)
/*
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
console.log("This is the state value"+ this.state.value)*/

this.setState({operator:chosenRequest});
console.log("This is the chosen request state "+this.state.operator)

//At this point I need to click or slect the shift drop downtime
$( "div:contains('Shift')" ).click();
//$(".shift").click()

}


handleChangePlanned (event, value) {
console.log("This is the planned "+value)

   this.setState({planned:value});

   var planned=value
   var actual=this.state.actual

   var unitsmissed=planned-actual
   if (planned>0 &&actual>0)
     {
       if(unitsmissed<0)
       {
         unitsmissed=0
         }

         this.state.unitsMissed
         $('[name=unitsmissed]').val(unitsmissed);
   this.setState({unitsMissed:unitsmissed});

    var partnumber= this.state.partNumber


       var cycletime=null

      console.log("this is the selected workcenter "+this.state.workcell)
      console.log("This is the part number "+partnumber)


      if (partnumber!=null && partnumber!=undefined)
      {


        axios.get('/cycleRetrieve',{
          params: {
               partnumber: this.state.partNumber,
               workcenter:this.state.workcell

             }

        })
          .then(response => {
        //  this.config(response.data)
      //do the calculations here

      var cycletime=response.data

      //cycletime needs to be set here and then it can be grabbed to calculate the minutes
      //do a formula to calculate the minutes lost here


      if (cycletime!=null)
      {

      console.log("this is the cycletime "+cycletime)
      var unitsmissed=$('[name=unitsmissed]').val();
      //var piecesPerHour=1000/cycletime
      //piecesPerHour=piecesPerHour.toFixed(2)
      var minutesLost=Number(unitsmissed)*Number(cycletime)
      //minutesLost=minutesLost/60
      minutesLost=minutesLost.toFixed(2)
      $('[name=calculatedminuteslost]').val(minutesLost);
      }



      console.log("this is the cycletime "+cycletime)












          })
          .catch(error => {
            console.log(error);
          });






   }


     }


}

handleChangeActual (event, value) {

console.log("This is the actual "+value)

   this.setState({actual:value});


}


handleChangePartNumber(searchText, dataSource, params) {

console.log("This is the searchText "+searchText)

this.setState({partNumberTyped:searchText});

}

handleSelectPartNumber = (chosenRequest, index) =>{

   this.setState({partNumber:chosenRequest});

  //need to get the current workcell
  var workcell=this.state.workcell

    axios.get('/cycleRetrieve',{
      params: {
           partnumber: chosenRequest,
           workcenter:this.state.workcell

         }

    })
      .then(response => {
    //  this.config(response.data)
  //do the calculations here

  var cycletime=response.data

  //cycletime needs to be set here and then it can be grabbed to calculate the minutes
  //do a formula to calculate the minutes lost here


  if (cycletime!=null)
  {

  console.log("this is the cycletime "+cycletime)
  var unitsmissed=$('[name=unitsmissed]').val();
  //var piecesPerHour=1000/cycletime
  //piecesPerHour=piecesPerHour.toFixed(2)
  var minutesLost=Number(unitsmissed)*Number(cycletime)
  //minutesLost=minutesLost/60
  minutesLost=minutesLost.toFixed(2)
  $('[name=calculatedminuteslost]').val(minutesLost);
  }



  console.log("this is the cycletime "+cycletime)

  console.log("the part number has changed")
  $('[name=OEE]').focus();









      })
      .catch(error => {
        console.log(error);
      });



  console.log("This is the state value"+ this.state.value)

  this.setState({partNumber:chosenRequest});



//console.log("This is the chosen request state "+this.state.operator)
}






      handleKeyUp(event) {
      //  if (event.keyCode == 13) return this.sendData()


           var plantoactual={date:$('[name=date]').val()  ,planned:$('[name=planned]').val() ,actual:$('[name=actual]').val()  ,minutesLost: $('[name=minuteslost]').val(),unitsmissed:$('[name=unitsmissed]').val(),calculatedminuteslost:  $('[name=calculatedminuteslost]').val()}



      var tabindex = $(event.target).attr('tabindex');

      if (tabindex==10 &&event.keyCode ==  9)
                    {

                      console.log("tabindex is 10 the first")
               $( ".losttimeheader" ).trigger();
  //$( "div.collapsible-header:contains('Lost Time')" ).click();


                  //  $( "div.collapsible-header:contains('Plan To Actual')" ).css( "background-color", "#00BCD4" ).css( "color", "white" );

                  //  $( "div.collapsible-header:contains('Downtime')" ).css( "background-color", "#536DFE" ).css( "color", "white" );
                  //  $( "div.collapsible-header:contains('Quality Defects')" ).css( "background-color", "#FF5722" ).css( "color", "white" );

        // Close

                    }
      else if (tabindex==19 &&event.keyCode ==  9)
                    {

                      console.log("tabindex is 19")
                //    $( ".downtimeheader" ).click();


        // Close

                    }
      else if (tabindex==31 &&event.keyCode ==  9)
                    {

                      console.log("tabindex is 31")
                //    $( ".qualitydefectsheader" ).click();


        // Close

                    }

        //  console.log("this is the tabindex " +tabindex)
      console.log("this is the key pressed "+ event.keyCode+ " this is the tabindex "+tabindex)
      //&& Number(tabindex)<4 && Number(tabindex) >8
              if (event.keyCode ==   39 ||(event.keyCode ==  40&& (tabindex<4 || tabindex>8))||(event.keyCode ==  9&&!event.keyCode ==16)||(event.keyCode ==  13 && (tabindex<4 || tabindex>8))) //if its a enter key
              {

                 if (tabindex <90)
                  {
                  console.log("this is the tabindex "+tabindex)
                  if (tabindex==10)
                    {
                  $( "div.collapsible-header:contains('Lost Time')" ).click();
                      console.log("tabindex is 10 second")
            //     $( ".losttimeheader" ).click();


        // Close

                    }
                  else if (tabindex==20)

                        {
                    //        $( ".downtimeheader" ).click();

                      $( "div.collapsible-header:contains('Downtime')" ).click();
                        }
                           else if (tabindex==31)

                        {

                  //        $( ".qualitydefectsheader" ).click();

                        }


                  tabindex++; //increment tabindex
                  //The last tabindex will change since quality defects are dynamic.
                  }
                /*else if (tabindex==48)
                  {


                  //    $( ".plan2actualheader" ).click();
                          tabindex=2


                  }*/
                  //after increment of tabindex ,make the next element focus
                  $('[tabindex=' + tabindex + ']').focus();
                  $('[tabindex=' + tabindex + ']').select();
                           //Msg Label**
                  //Just to print some msgs to see everything is working


                  return false; // to cancel out Onenter page postback in asp.net
              }
                 else  if (event.keyCode ==  37 ||event.keyCode ==  38 || (event.shiftKey && event.keyCode == 9))
              {
            //    console.log("enter was pressed")

                  if (tabindex==11)
                    {

                        $( "div.collapsible-header:contains('Plan To Actual')" ).click();
                    //   $( ".plan2actualheader" ).click();
                         Meteor.setTimeout(function(){
                    //  $('.datepicker').find('[data-close="true"]').click()
                  }, 500)
                    /*      Meteor.setTimeout(function(){
         console.log("trying to focus on datepicker")

                    $('[name=actual]').focus();
                  }, 800)*/

                    }
                      else if (tabindex==21)

                        {
$( "div.collapsible-header:contains('Lost Time')" ).click();
                        //  $( ".losttimeheader" ).click();

                        }
                        else if (tabindex==32)

                        {

                        //  $( ".downtimeheader" ).click();

                        }
                  console.log("this is the tabindex "+tabindex)
                  tabindex--; //increment tabindex
                  //after increment of tabindex ,make the next element focus

                  $('[tabindex=' + tabindex + ']').focus();
                  $('[tabindex=' + tabindex + ']').select();
                           //Msg Label**
                  //Just to print some msgs to see everything is working


                  return false; // to cancel out Onenter page postback in asp.net
              }












      /*
if (event.keyCode == 39)
{
  console.log("The right arrow was pressed ")



  return;
}
*/
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
var minuteslost=Number($('[name=minuteslost]').val())
console.log("This is the minutes lost "+minuteslost)

if (total>0 && minuteslost>=0)
{ console.log("tthi is the total "+total)
console.log("This is the minutes lost "+minuteslost )

var minutesRemaining=minuteslost-total
console.log("this is the minutes remaining "+minutesRemaining)
this.setState({
minutesRemaining: minutesRemaining
});
if (minutesRemaining==0)
{
  this.setState({color: "rgba(0, 255, 0, 0.3)"});
}
else
{
  this.setState({color: "rgba(255, 0, 0, 0.3)"});
}

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
}








      }

   handleChangeDepartment = (event, index, value) =>{
  console.log("This is the value selected"+ value)

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
  console.log("This is the index "+index)

      this.setState({department:value});

  this.setState({departmentSelected:value});
      axios.get('/partnumberRetrieve',{
        params: {
             department: value,
           }
      })
      .then(response => {
       // console.log("This is the part numbers retrieved "+response.data)
        this.setState({
          partNumbers: response.data
        });
    })
      .catch(error => {
        console.log(error);
      });




  console.log("This is the state value"+ this.state.department)

  }

  handleChangeWorkcenter = (event, index, value) =>{
  console.log("This is the value selected"+ value)

   this.setState({workcell:value});
  console.log("This is the state value"+ this.state.workcell)

  }








  handleChangeShift = (event, index, value) =>{
 console.log("This is the value selected"+ value)


 console.log("This is the index "+index)

    this.setState({shift:value});

 console.log("This is the state value"+ this.state.shift)

 }

menu = () => {
     //console.log('this is:', this);
     setTimeout(function() {
   FlowRouter.go('/graphmenu');
   FlowRouter.reload();
 }, 500);
   }




  render() {
const {value} = this.state;
$( "div.collapsible-header:contains('Plan To Actual')" ).css( "background-color", "#00BCD4" ).css( "color", "white" );
$( "div.collapsible-header:contains('Lost Time')" ).css( "background-color", "#FFC107" ).css( "color", "white" );
$( "div.collapsible-header:contains('Downtime')" ).css( "background-color", "#536DFE" ).css( "color", "white" );
$( "div.collapsible-header:contains('Quality Defects')" ).css( "background-color", "#FF5722" ).css( "color", "white" );

    return (
      <MuiThemeProvider>
      <div style={{ backgroundColor: this.state.color  }}  >







         <div id="" className="center dataentry_containernew" style={{ backgroundColor: this.state.color  }} >
           <RaisedButton label="Previous Record" className="left moveRaisedButton" primary={true} onClick={this.prevRaisedButton} />
           <RaisedButton label="Menu" className="left moveRaisedButton" primary={true} onClick={this.menu} style={{marginLeft: ".5vw"}}/>
           <RaisedButton label="Entry History" className="left moveRaisedButton" primary={true} onClick={this.history} style={{marginLeft: ".5vw"}}/>
           <RaisedButton label="Next Record" className="right moveRaisedButton" primary={true} onClick={this.nextRaisedButton} />
           <RaisedButton label="Save" className="right moveRaisedButton" primary={true} onClick={this.saveRaisedButton} style={{marginRight: ".5vw"}}/>
           <RaisedButton label="# of Entries Today" className="right moveRaisedButton" primary={true} onClick={this.entriesToday} style={{marginRight: ".5vw"}}/>

          {/* <span ><button className="btn btn-default waves-effect prev waves-light z-depth-3 blue lighten-3 whitetext left moveRaisedButton" tabIndex="-1">Previous Record</button></span>
         <span ><button className="btn btn-default waves-effect menu waves-light left z-depth-3 blue lighten-3 whitetext  moveRaisedButton"  tabIndex="-1" >Menu</button></span>
         <span ><button className="btn btn-default waves-effect entryhistory waves-light left z-depth-3 blue lighten-3 whitetext  moveRaisedButton"  tabIndex="-1" >Entry History</button></span>

        <span > <button className="btn btn-default waves-effect next waves-light z-depth-3 blue lighten-3 whitetext right moveRaisedButton"  tabIndex="-1">Next Record</button></span>
         <span ><button className="btn btn-default waves-effect save waves-light right z-depth-3 blue lighten-3 whitetext  moveRaisedButton"  tabIndex="-1" >Save</button></span>
           <span ><button className="btn btn-default waves-effect entriestoday waves-light right z-depth-3 blue lighten-3 whitetext  moveRaisedButton"  tabIndex="-1" ># of Entries Today</button></span>*/}


          <img src="logo.jpg " id="menu1" className="z-depth-3 centertestnew" height="8%" width="10%"  />
            <div id="menu2">
            <span className="left bigger">Record ID: {this.state.currentPrn} </span>
            <span className="floatcontainer bigger"> Minutes Remaining To Account For:{this.state.minutesRemaining} </span><br/>
            </div>
            <Collapsible popout accordion defaultActiveKey={0} style={{ backgroundColor: "white"  }}>
              <CollapsibleItem header='Plan To Actual' className="first"  >
                <form className="plantoactual" >
          <div className="containernew">
<div className="divsection plantoactual1">

<div className="form-group center">



               <DatePicker floatingLabelText="Date"
                 name="date" id="date"
                 className="datepicker firstdate "  tabIndex="1"
                 floatingLabelStyle={{fontSize:"125%"}}
                 onChange={this.handleChangeDate}
                 defaultDate={new Date()}
                 value={this.state.date}
                 />
                             <br/>



                    <TextField
                      onClick={this.handleFormClick}
                            floatingLabelText="Planned"
                            name="planned"
                            onChange={this.handleChangePlanned}
                            tabIndex="2" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}
                            onKeyUp={this.handleKeyUp}
                          />

 <br/>
                    <TextField
                      onClick={this.handleFormClick}
                            floatingLabelText="Actual"
                            name="actual"
                            onChange={this.handleChangeActual}
                            tabIndex="3" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}
                            onKeyUp={this.handleKeyUp}
                          />
                  <br/>






</div>

</div>
<div className="plantoactual">
<div className="form-group ">


             <div  className="center " >

                    {/* <label > Operator:</label>*/}
{/*}
                    <AutoComplete
                        floatingLabelText="Operator"
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={this.state.operators}
                        maxSearchResults={5}
                        onNewRequest={this.handleChangeOperator}
                        style={{ width:'10vw'}}
                        floatingLabelStyle={{fontSize:"125%"}}
                        name="operator"
                        searchText={this.state.operator}
                        value={this.state.operator}
                      />*/}
                      <AutoComplete
                       floatingLabelText="Operator"
                       filter={AutoComplete.caseInsensitiveFilter}
                       dataSource={this.state.operators}
                       maxSearchResults={5}
                       style={{ width:'10vw'}}
                       floatingLabelStyle={{fontSize:"125%"}}
                       name="operator"
                       searchText={this.state.operatorTyped}
                       value={this.state.operator}
                       onNewRequest={this.handleSelectOperator}
                       onUpdateInput={this.handleChangeOperator}
                       tabIndex="4"
                       onKeyUp={this.handleKeyUp}
                     />

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

                        >
                          <MenuItem value={"shift 1"} primaryText="1" />
                          <MenuItem value={"shift 2"} primaryText="2" />
                          <MenuItem value={"shift 3"} primaryText="3" />

                        </SelectField>
                          <br/>
                  <SelectField
                            floatingLabelText="Department"
                            tabIndex="6"
                            value={this.state.department}
                            onChange={this.handleChangeDepartment}
                            style={{ width:'10vw'}}
                            className="department"
                            floatingLabelStyle={{fontSize:"125%"}}
                            name="department"
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
                            <MenuItem value={"injection"} primaryText="Injection" />

                          </SelectField>
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
                                 >
                                   {this.menuItems(this.state.workcells)}
                                 </SelectField>


                {/* <label>   Workcenters:</label>
                   <select name="workcenter" id="workcenters" className="form-control workcenter"  tabIndex="7">

                </select> */}
                <br/>


                <AutoComplete
                 floatingLabelText="Part Number"
                 filter={AutoComplete.caseInsensitiveFilter}
                 dataSource={this.state.partNumbers}
                 maxSearchResults={5}
                 style={{ width:'10vw'}}
                 floatingLabelStyle={{fontSize:"125%"}}
                 name="partnumber"
                 searchText={this.state.partNumberTyped}
                 value={this.state.partNumber}
                 onNewRequest={this.handleSelectPartNumber}
                 onUpdateInput={this.handleChangePartNumber}
                 tabIndex="8"
                 onKeyUp={this.handleKeyUp}
               />
                <br/>

  <TextField
      onClick={this.handleFormClick}
          floatingLabelText="OEE"
          name="OEE"
          tabIndex="9" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}
          onKeyUp={this.handleKeyUp}
        />


            <br/>
                 </div>


</div>



</div>
<div className="plantoactual1">


<div className="form-group ">



           <TextField
             onKeyUp={this.handleKeyUp}
             onClick={this.handleFormClick}
          floatingLabelText="Minutes Lost"
          name="minuteslost"
          tabIndex="10" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}
        />

                <br/>

                  <TextField

                 floatingLabelText="Units Missed"
                 name="unitsmissed"
                 disabled
                 defaultValue="0"
                 floatingLabelStyle={{fontSize:"125%"}}
               />
                <br/>

                  <TextField

                 floatingLabelText="Calculated Minutes Lost"
                 name="calculatedminuteslost"
                 disabled
                 defaultValue="0"
                 floatingLabelStyle={{fontSize:"125%"}}
               />




</div>




</div>
</div>



           </form>
              </CollapsibleItem>
              <CollapsibleItem header='Lost Time' className="losttimeheader"  onClick={this.handleLostTimeClick} >
                <form className="losttime"  onKeyUp={this.handleKeyUp} onClick={this.handleFormClick}>
             <div id="wrapper">
 <div id="left">
     <div className="form-group ">



                       <TextField

                         className="Not Scheduled"
                         ref={(input) => { this.nameInput = input; }}
                      floatingLabelText="Not Scheduled"
                      name="NOT SCHEDULED"
                      tabIndex="11" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                    />
                                        <br/>


                       <TextField
                       floatingLabelText="Planned Downtime"
                       name="PLANNED DOWNTIME"
                       tabIndex="12" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                       />
                     <br/>


                     <TextField
                    floatingLabelText="Start-up"
                    name="STARTUP"
                    tabIndex="13" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                  />

                <br/>


                       <TextField

                      floatingLabelText="Manual Entry Key"
                      name="MANUAL ENTRY KEY"
                      tabIndex="14" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                    /><br/>


                      <TextField

                     floatingLabelText="Training/Meeting"
                     name="TRAINING"
                     tabIndex="15" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                   />




                     </div>




                       </div>
 <div id="right">

   <div className="form-group ">



                        <TextField

                       floatingLabelText="Part Shortage"
                       name="PART SHORTAGE"
                       tabIndex="16" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                     /><br/>


                       <TextField

                      floatingLabelText="Getting Parts"
                      name="GETTING PARTS"
                      tabIndex="17" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                    /><br/>


                     <TextField

                    floatingLabelText="Quality Issues"
                    name="QUALITY ISSUES"
                    tabIndex="18" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                  /><br/>


                        <TextField

                       floatingLabelText="Changeover"
                       name="CHANGEOVER"
                       tabIndex="19" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                     /><br/>


                       <TextField

                      floatingLabelText="Other"
                      className="losttimeother"
                      name="LOST TIME OTHER"
                      tabIndex="20" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}

                    />



</div>
                    </div>



</div>

              </form>
              </CollapsibleItem>
              <CollapsibleItem header='Downtime' className="downtimeheader" onClick={this.handleFormClick} onKeyUp={this.handleKeyUp}>

                  <Downtime isLoggedIn={this.state.departmentSelected} />

              </CollapsibleItem>
              <CollapsibleItem header='Quality Defects' className="qualitydefectsheader" onClick={this.handleFormClick}>
                <Quality isLoggedIn={this.state.departmentSelected} />
              </CollapsibleItem>
            </Collapsible>


           <br/>
        </div>



        </div>
    </MuiThemeProvider>
    );
  }
}

function Datacom(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">


    <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>


   <TextField floatingLabelText="Robot"  name="ROBOT"   tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Ran out of work"  name="RAN OUT OF WORK"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Hitting screws"  name="HITTING SCREWS"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Bags jam in sealer"  name="BAGS JAM IN SEALER"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>










                      </div>



  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

  <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

   <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"   tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


  <TextField floatingLabelText="Reject Station"  name="REJECT STATION"   tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

  <TextField floatingLabelText="Doboy" name="DOBOY"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

  <TextField floatingLabelText="Poly not cutting" name="POLY NOT CUTTING"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

  <TextField floatingLabelText="Machine down" name="MACHINE DOWN"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

       <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

       <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother" tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>



       <TextField floatingLabelText="Doboy crash"  name="DOBOY CRASH"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

       <TextField floatingLabelText="Trouble with label dispenser"  name="TROUBLE WITH LABEL DISPENSER"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

       <TextField floatingLabelText="Material handler"  name="MATERIAL HANDLER"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

       <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/>



</div>




  </div>
</div>
</form>


</div>
)
}

function Packing(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">


    <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
      <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

                      </div>



  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}



  <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Printer"  name="printer"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
            <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/>


</div>

  </div>
</div>
</form>


</div>
)
}





function Manual(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
      <TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
        <TextField floatingLabelText="Film Not Sealing"  name="FLAT BELT CONVEYOR"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
          <TextField floatingLabelText="Flat Belt Conveyor"  name="INJECTION MACHINE"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

    <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
            </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="Machine Jam"  name="MACHINE JAM"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Machine Misfire" name="MACHINE MISFIRE"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Out Of Parts"  name="OUT OF PARTS"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>




  </div>
</div>
</form>


</div>
)
}


function Scd(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="Bowl/Inline Jams"  name="BOWL/INLINE JAMS"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
      <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
        <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Stelron Overload"  name="STELRON OVERLOAD"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>




  </div>
</div>
</form>


</div>
)
}

function ManualBoxes(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
      <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
        <TextField floatingLabelText="Film Not Sealing"  name="FILM NOT SEALING"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="Machine Misfire"  name="MACHINE MISFIRE"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Machine Jam"  name="MACHINE JAM"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Out Of Parts"  name="OUT OF PARTS"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
          <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>




  </div>
</div>
</form>


</div>
)
}

function Metals(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Conveyor Issues - Scrap, parts take away"  name="CONVEYOR ISSUES"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Die Issues"  name="DIE ISSUES"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Doboy Issues"  name="DOBOY ISSUES"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Feeder Issues"  name="FEEDER ISSUES"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="Ink Jet Issues"  name="INK JET ISSUES"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Labeler Issues"  name="LABELER ISSUES"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Material Issues"  name="MATERIAL ISSUES"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Screw Pack Issues"  name="SCREW PACK ISSUES"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

  <TextField floatingLabelText="Singulator Issues"  name="SINGULATOR ISSUES"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Wait for Maintenance"  name="WAIT FOR MAINTENANCE"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Wait for Tool Room"  name="WAIT FOR TOOL ROOM"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
          <TextField floatingLabelText="Waterfall Issues"  name="WATERFALL ISSUES"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
            <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
              <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>




  </div>
</div>
</form>


</div>
)

}


function Raceway(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Electrical Issue with extruder"  name="ELECTRICAL ISSUE W/ EXTRUDER"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Machine Jam"  name="MACHINE JAM"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Material build up on dies"  name="MATERIAL BUILD UP ON DIES"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
<TextField floatingLabelText="Material/Part Feed issues"  name="MATERIAL/PART FEED ISSUES"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="No/incorrect Print"  name="NO/INCORRECT PRINT"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Not sealed (holes)"  name="NOT SEALED (HOLES)"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Out of parts"  name="OUT OF PARTS"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
          <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
            <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Shanklin Issues"  name="SHANKLIN ISSUES"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Tape Issues"  name="TAPE ISSUES"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Using Regrind"  name="USING REGRIND"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Wait for MH/Coordinator"  name="WAIT FOR MH/COORDINATOR"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
          <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
            <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
              <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>









      </div>




  </div>
</div>
</form>


</div>
)

}


function Wiu(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="Buffer"  name="BUFFER"  tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="Doboy"  name="DOBOY"  tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="Film Not Sealing"  name="FILM NOT SEALING"  tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
      <TextField floatingLabelText="Flat Belt Conveyor"  name="FLAT BELT CONVEYOR"  tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
        <TextField floatingLabelText="Injection Machine"  name="INJECTION MACHINE"  tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="Machine Jam"  name="MACHINE JAM"  tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Machine Misfire"  name="MACHINE MISFIRE"  tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="Out Of Parts"  name="OUT OF PARTS"  tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
          <TextField floatingLabelText="Reject Station"  name="REJECT STATION"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="Robot"  name="ROBOT"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Screw Insertion"  name="SCREW INSERTION"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Waterfall"  name="WATERFALL"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Accounted Downtime"  name="ACCOUNTED DOWNTIME"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
        <TextField floatingLabelText="Unaccounted Downtime"  name="UNACCOUNTED DOWNTIME"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>



      </div>




  </div>
</div>
</form>


</div>
)

}












function Autoboxes(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Buffer" name="BUFFER" tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
        <TextField floatingLabelText="Doboy" name="DOBOY" tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
          <TextField floatingLabelText="Flat Belt Conveyor" name="FLAT BELT CONVEYOR" tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/> <br/>
       <TextField floatingLabelText="Injection Machine" name="INJECTION MACHINE" tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} />  <br/>
         <TextField floatingLabelText="Quick Click Depth" name="QUICK CLICK DEPTH" tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/> <br/>
         <TextField floatingLabelText="Quick Clicks Not Present" name="QUICK CLICKS NOT PRESENT" tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
                      </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Low Level Infeeds" name="LOW LEVEL INFEEDS" tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
  <TextField floatingLabelText="Missing/bad label/upc" name="MISSING/BAD LABEL/UPC" tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField  floatingLabelText="Missing Swing Brackets" name="MISSING SWING BRACKETS"  tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Other"  name="DOWNTIME OTHER" className="downtimeother"  tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="Printer"  name="PRINTER"  tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Reject Station" name="REJECT STATION" tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
       <TextField floatingLabelText="Robot" name="ROBOT" tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/>  <br/>
       <TextField floatingLabelText="Screw Insertion" name="SCREW INSERTION" tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
       <TextField floatingLabelText="Waterfall" name="WATERFALL" tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} />  <br/>
    <TextField floatingLabelText="Accounted Downtime" name="ACCOUNTED DOWNTIME" tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="Unaccounted Downtime" name="UNACCOUNTED DOWNTIME" tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/>

    </div>
  </div>
</div>
</form>


</div>
)
}

function Husky(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Bags not Sealing" name="BAGS NOT SEALING" tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Buffer" name="BUFFER" tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
     <TextField floatingLabelText="Buffer Issue" name="BUFFER ISSUE" tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Doboy" name="DOBOY" tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
      <TextField floatingLabelText="Doboy Issues - polypro" name="DOBOY ISSUES - POLYPRO" tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
       <TextField floatingLabelText="Flat Belt Conveyor" name="FLAT BELT CONVEYOR" tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

       </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Injection Machine" name="INJECTION MACHINE" tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Jams - Along Conveyor" name="JAMS - ALONG CONVEYOR" tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Missing Screws-Screwdrop Issues" name="MISSING SCREWS-SCREWDROP ISSUES" tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Print/Barcode Issue" name="PRINT/BARCODE ISSUE" tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Printer" name="PRINTER" tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Reject Station" name="REJECT STATION" tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Robot" name="ROBOT" tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Screw Insertion" name="SCREW INSERTION" tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Other" name="DOWNTIME OTHER" className="downtimeother" tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Waterfall" name="WATERFALL" tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Accounted Downtime" name="ACCOUNTED DOWNTIME" tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Unaccounted Downtime" name="UNACCOUNTED DOWNTIME" tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

    </div>
  </div>
</div>
</form>


</div>
)
}

function Injection(props) {
    return(
<div>
  <form className="downtime">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Buffer" name="BUFFER" tabIndex="21" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
   <TextField floatingLabelText="Cage Full" name="CAGE FULL" tabIndex="22" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Cracked Cavity" name="CRACKED CAVITY" tabIndex="23" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
     <TextField floatingLabelText="Cycle Time" name="CYCLE TIME" tabIndex="24" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
      <TextField floatingLabelText="Doboy" name="DOBOY" tabIndex="25" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
       <TextField floatingLabelText="Flat Belt Conveyor" name="FLAT BELT CONVEYOR" tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
        <TextField floatingLabelText="Injection Machine" name="INJECTION MACHINE" tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>



       </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Metal in material" name="METAL IN MATERIAL" tabIndex="28" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText=" Mold in Tool Room" name="MOLD IN TOOL ROOM" tabIndex="29" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="No Material" name="NO MATERIAL" tabIndex="30" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="No Dry Material" name="NO DRY MATERIAL" tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Other" name="DOWNTIME OTHER" className="downtimeother" tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
    <TextField floatingLabelText="Printer" name="PRINTER" tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>







      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Reject Station" name="REJECT STATION" tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Robot" name="ROBOT" tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Robot Issues" name="ROBOT ISSUES" tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Screw Insertion" name="SCREW INSERTION" tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Waterfall" name="WATERFALL" tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Accounted Downtime" name="ACCOUNTED DOWNTIME" tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
         <TextField floatingLabelText="Unaccounted Downtime" name="UNACCOUNTED DOWNTIME" tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>







    </div>
  </div>
</div>
</form>


</div>
)
}





function DatacomQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">


    <TextField floatingLabelText="BAG SEALING"  name="BAG SEALING"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="BAR CODE"  name="BAR CODE"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="CONNECTOR"  name="CONNECTOR"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="CONNECTOR NUT"  name="CONNECTOR NUT"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="CRACKED"  name="CRACKED"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>





                      </div>



  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LINES"  name="LINES"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MARKS ON PLATES"  name="MARKS ON PLATES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="ORANGE PEEL"  name="ORANGE PEEL"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>





      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

       <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="SUBPLATE HOLES BROKEN"  name="SUBPLATE HOLES BROKEN"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="TEETH MARKS"  name="TEETH MARKS"  tabIndex="53" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="TORN BAGS"  name="TORN BAGS"  tabIndex="54" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="55" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="56" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="57" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="BLACK SWIRLS"  name="BLACK SWIRLS"  tabIndex="58" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
       <TextField floatingLabelText="CIRCLE MARKS"  name="CIRCLE MARKS"  tabIndex="59" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>



</div>




  </div>
</div>
</form>


</div>
)
}

function PackingQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">


    <TextField floatingLabelText="BAG SEALING"  name="BAG SEALING"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BAR CODE"  name="BAR CODE"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CHIPPED PAINT"  name="CHIPPED PAINT"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONNECTOR"  name="CONNECTOR"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CRACKED"  name="CRACKED"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>


     </div>




                      </div>




  <div>
    <div className="form-group ">
  {/*Middle div*/}



  <TextField floatingLabelText="GREASE"  name="GREASE"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="LINES"  name="LINES"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="MARKS ON PLATES"  name="MARKS ON PLATES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="ORANGE PEEL"  name="ORANGE PEEL"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="SUBPLATE HOLES BROKEN"  name="SUBPLATE HOLES BROKEN"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="TEETH MARKS"  name="TEETH MARKS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="TORN BAGS"  name="TORN BAGS"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="WARP"  name="WARP"  tabIndex="53" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="54" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
<TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="55" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>




</div>

  </div>
</div>
</form>

</div>
)
}





function ManualQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAD PLATES"  name="BAD PLATES"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="BENT TERMINAL"  name="BENT TERMINAL"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="BUBBLES"  name="BUBBLES"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="CHIPPED PAINT"  name="CHIPPED PAINT"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
    <TextField floatingLabelText="DENTS"  name="DENTS"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}
  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LINES"  name="LINES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING MOUNTING BRACKETS"  name="MISSING MOUNTING BRACKETS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY NOT CUTTING"  name="POLY NOT CUTTING"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY SEALING"  name="POLY SEALING"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>





      </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="SHRINK WRAP"  name="SHRINK WRAP"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="53" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="SPLAY"  name="SPLAY"  tabIndex="54" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="SUCTION MARK"  name="SUCTION MARK"  tabIndex="55" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="56" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="57" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
     <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="58" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>

      </div>




  </div>
</div>
</form>


</div>
)
}


function ScdQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAD PLATES"  name="BAD PLATES"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BENT TERMINAL"  name="BENT TERMINAL"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BUBBLES"  name="BUBBLES"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CHIPPED PAINT"  name="CHIPPED PAINT"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="DENTS"  name="DENTS"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LINES"  name="LINES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING MOUNTING BRACKETS"  name="MISSING MOUNTING BRACKETS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY NOT CUTTING"  name="POLY NOT CUTTING"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY SEALING"  name="POLY SEALING"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>



    </div>



  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SHRINK WRAP"  name="SHRINK WRAP"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="53" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SPLAY"  name="SPLAY"  tabIndex="54" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SUCTION MARK"  name="SUCTION MARK"  tabIndex="55" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="56" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="57" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="58" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      </div>




  </div>
</div>
</form>


</div>
)
}

function ManualBoxesQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAR CODE"  name="BAR CODE"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BENT EARS"  name="BENT EARS"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BENT QC"  name="BENT QC"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="DAMAGED IN NET"  name="DAMAGED IN NET"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LONG GATES"  name="LONG GATES"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="PULLS"  name="PULLS"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SMASHED BOXES"  name="SMASHED BOXES"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SPLAY"  name="SPLAY"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>




  </div>
</div>
</form>


</div>
)
}

function MetalsQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAD PLATES"  name="BAD PLATES"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BAG SEALING"  name="BAG SEALING"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BAR CODE"  name="BAR CODE"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BENT TERMINALS"  name="BENT TERMINALS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CHIPPED PAINT"  name="CHIPPED PAINT"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>



        </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="HARDWARE"  name="HARDWARE"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LINES"  name="LINES"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MARKS ON PLATES"  name="MARKS ON PLATES"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SUCTION MARK"  name="SUCTION MARK"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="TEETH MARKS"  name="TEETH MARKS"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="TORN BAGS"  name="TORN BAGS"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


    </div>




  </div>
</div>
</form>


</div>
)

}


function RacewayQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAR CODE"  name="BAR CODE"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CRUSHED PARTS"  name="CRUSHED PARTS"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>

          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="HARDWARE"  name="HARDWARE"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LOOSE WIRE"  name="LOOSE WIRE"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MIXED COLORS"  name="MIXED COLORS"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="NOT SEALED"  name="NOT SEALED"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="ROUGH EDGES"  name="ROUGH EDGES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>





      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="TAPE BROKEN"  name="TAPE BROKEN"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WRONG SIZE"  name="WRONG SIZE"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>




  </div>
</div>
</form>


</div>
)

}


function WiuQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">

    <TextField floatingLabelText="BAD PLATES"  name="BAD PLATES"  tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BENT TERMINAL"  name="BENT TERMINAL"  tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BLISTERS"  name="BLISTERS"  tabIndex="34" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BUBBLES"  name="BUBBLES"  tabIndex="35" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURNS"  name="BURNS"  tabIndex="36" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="BURRS"  name="BURRS"  tabIndex="37" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CHIPPED PAINT"  name="CHIPPED PAINT"  tabIndex="38" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="CONTAMINATION"  name="CONTAMINATION"  tabIndex="39" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>
    <TextField floatingLabelText="DENTS"  name="DENTS"  tabIndex="40" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} floatingLabelStyle={{fontSize:"125%"}} /><br/>




          </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}


  <TextField floatingLabelText="DIRTY"  name="DIRTY"  tabIndex="41" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="FLASH"  name="FLASH"  tabIndex="42" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LABEL"  name="LABEL"  tabIndex="43" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="LINES"  name="LINES"  tabIndex="44" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING MOUNTING BRACKETS"  name="MISSING MOUNTING BRACKETS"  tabIndex="45" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING SCREWS"  name="MISSING SCREWS"  tabIndex="46" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="MISSING NAILS"  name="MISSING NAILS"  tabIndex="47" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY NOT CUTTING"  name="POLY NOT CUTTING"  tabIndex="48" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
  <TextField floatingLabelText="POLY SEALING"  name="POLY SEALING"  tabIndex="49" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


      </div>

  </div>
  <div>{/*Right div*/}


     <div className="form-group ">

      <TextField floatingLabelText="SCRATCHES"  name="SCRATCHES"  tabIndex="50" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SHORT SHOTS"  name="SHORT SHOTS"  tabIndex="51" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SHRINK WRAP"  name="SHRINK WRAP"  tabIndex="52" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SINKS"  name="SINKS"  tabIndex="53" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SPLAY"  name="SPLAY"  tabIndex="54" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="SUCTION MARK"  name="SUCTION MARK"  tabIndex="55" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WARP"  name="WARP"  tabIndex="56" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="WRONG SCREWS"  name="WRONG SCREWS"  tabIndex="57" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>
      <TextField floatingLabelText="OTHER"  name="OTHER"  tabIndex="58" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}}/><br/>


    </div>




  </div>
</div>
</form>


</div>
)

}












function AutoboxesQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Buffer" name="BUFFER" tabIndex="20" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>
                      </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Low Level Infeeds" name="LOW LEVEL INFEEDS" tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Reject Station" name="REJECT STATION" tabIndex="31" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

    </div>
  </div>
</div>
</form>


</div>
)
}

function HuskyQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Bags not Sealing" name="BAGS NOT SEALING" tabIndex="20" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

       </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Injection Machine" name="INJECTION MACHINE" tabIndex="26" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Robot" name="ROBOT" tabIndex="32" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

    </div>
  </div>
</div>
</form>


</div>
)
}

function InjectionQuality(props) {
    return(
<div>
  <form className="qualitydefects">
   <div className="containernew">
  <div> {/*Left  */}
  <div className="form-group">
   <TextField floatingLabelText="Buffer" name="BUFFER" tabIndex="20" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

       </div>
  </div>
  <div>
    <div className="form-group ">
  {/*Middle div*/}

    <TextField floatingLabelText="Metal in material" name="METAL IN MATERIAL" tabIndex="27" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

      </div>

  </div>
  <div>{/*Right div*/}

     <div className="form-group ">

         <TextField floatingLabelText="Reject Station" name="REJECT STATION" tabIndex="33" defaultValue="0" floatingLabelStyle={{fontSize:"125%"}} /> <br/>

    </div>
  </div>
</div>
</form>


</div>
)
}
