import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";



// core components
import GridContainer from "/imports/components/Grid/GridContainer.jsx";
import GridItem from "/imports/components/Grid/GridItem.jsx";
import Table from "/imports/components/Table/Table.jsx";
import Button from "/imports/components/CustomButtons/Button.jsx";
import Media from "/imports/components/Media/Media.jsx";
import CustomInput from "/imports/components/CustomInput/CustomInput.jsx";
import Paginations from "/imports/components/Pagination/Pagination.jsx";

import style from "/imports/assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
/*
import avatar from "/imports/assets/img/faces/avatar.jpg";
import kendall from "/imports/assets/img/faces/kendall.jpg";
import marc from "/imports/assets/img/faces/marc.jpg";
*/
//import placeholder from "/imports/assets/img/placeholder.jpg";
/*import product1 from "/imports/assets/img/product1.jpg";
import product2 from "/imports/assets/img/product2.jpg";
import product3 from "/imports/assets/img/product3.jpg";*/

class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes, ...rest } = this.props;
    const fillButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    const simpleButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button simple justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });
    const roundButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button round justIcon size="sm" color={prop.color} key={key}>
          <prop.icon />
        </Button>
      );
    });

var test=[
  [
    "1",
    "Test",
    "Develop",
    "2013",
    "€ 99,225"

  ],
  [
    "2",
    "Test2",
    "Develop",
    "2013",
    "€ 99,225"

  ]
]


    return (
      <div {...rest} className="cd-section" id="contentAreas">

        <div id="tables">

          <GridContainer>

            <GridItem
              xs={12}
              sm={10}
              md={8}
              className={`${classes.mrAuto} ${classes.mlAuto}`}
            >

              <Table
                tableHead={[
                  "#",
                  "Name",
                  "Job Position",
                  "Since",
                  "Salary",
                  "Actions"
                ]}
                tableData={test}
                customCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />


            </GridItem>
          </GridContainer>

        </div>


      </div>
    );
  }
}

export default withStyles(style)(SectionContentAreas);
