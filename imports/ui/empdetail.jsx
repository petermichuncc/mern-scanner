
import React from "react";
import { connect } from "react-redux";
console.log("Inside the emp detail page")

class EmpDetail extends React.Component {
    render() {
        const empNumber = this.props.Empnumber;
        return (
            <div className="container">
                Empnumber = {empNumber}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        Empnumber: state.Empnumber
    }
}

export default connect(mapStateToProps)(EmpDetail);