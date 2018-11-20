import React from "react";
// @material-ui/core components
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

//import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>

        <div
          className={classes.pageHeader}

        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="info"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>

                    </CardHeader>
                    <p
                      className={`${classes.description} ${classes.textCenter}`}
                    >

                    </p>
                    <CardBody signup>
                      <CustomInput
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "First Name...",
                          type: "text",
                          startAdornment: (
                            <InputAdornment position="start">
                              {/*  <Face className={classes.inputIconsColor} /> */}
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          startAdornment: (
                            <InputAdornment position="start">
                              {/*  <Email className={classes.inputIconsColor} />*/ }
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              {/*  <LockOutline
                                className={classes.inputIconsColor}
                              /> */}
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
