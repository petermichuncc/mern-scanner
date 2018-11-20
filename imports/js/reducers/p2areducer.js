import { UPDATE_OPERATOR } from "../constants/action-types";
//import { UPDATE_HOUR_OBJECT } from "../constants/action-types";
import { UPDATE_WORKCELL } from "../constants/action-types";
import { UPDATE_SHIFT } from "../constants/action-types";
import { UPDATE_PARTNUMBER } from "../constants/action-types";
import { UPDATE_DEPARTMENT } from "../constants/action-types";
const initialState = {
    operator: "",
    workcell:"",
    shift:"shift 1",
    department:"",
    partNumber:""

};

export default function p2aReducer(state= initialState, action) {
  switch (action.type) {
        case UPDATE_OPERATOR:
        console.log("this is the pay load for operator "+action.payload)

                return Object.assign({}, state, {
                operator : action.payload
             });
             case UPDATE_WORKCELL:
             console.log("this is the pay load for workcell"+action.payload)

                     return Object.assign({}, state, {
                     workcell : action.payload
                  });

                     case UPDATE_SHIFT:
                    // console.log("this is the pay load "+action.payload)
                     console.log("this is the color in pay load for shift"+action.payload)

                           return Object.assign({}, state, {
                            shift : action.payload
                        });
                        case UPDATE_PARTNUMBER:
                       // console.log("this is the pay load "+action.payload)
                        console.log("this is the color in pay load for part number"+action.payload)

                              return Object.assign({}, state, {
                               partNumber : action.payload
                           });
                           case UPDATE_DEPARTMENT:
                           console.log("this is the pay load for department "+action.payload)

                                   return Object.assign({}, state, {
                                   department : action.payload
                                });

        default:
            return state;
    }
}
