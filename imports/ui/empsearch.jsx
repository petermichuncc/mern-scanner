import React from "react";
import { connect } from "react-redux";
console.log("Inside the emp search page")


export class EmpSearch extends React.Component {
        // Not needed anymore as state going to Redux and not local component state
    /*
        constructor(props) {
        super(props);
        this.state = {
            Empnumber: ''
        };
        }
    */

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
    return (
        <div className="row">
        <form>
            <div className="form-group">
            <label htmlFor="Empnumber">Emp Number</label>
            <input type="text" className="form-control" id="Empnumber" placeholder="Emp Number" value={this.props.Empnumber} onChange={this.updateEmpNumber.bind(this)}/>
            </div>
        </form>
        </div>
    );
    }
}

function mapStateToProps(state){
    return {
        Empnumber: state.Empnumber
    }
}

export default connect(mapStateToProps)(EmpSearch);