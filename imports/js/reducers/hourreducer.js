import { UPDATE_EMP_NUMBER } from "../constants/action-types";
import { UPDATE_HOUR_OBJECT } from "../constants/action-types";
import { UPDATE_COLOR } from "../constants/action-types";
const initialState = {
    minutesRemaining: 0,
    color:""

};

export default function hourReducer(state= initialState, action) {
  switch (action.type) {
        case UPDATE_EMP_NUMBER:
        console.log("this is the pay load "+action.payload)
                const Empnumber = action.payload;
                return Object.assign({}, state, {
                 minutesRemaining : action.payload
             });

                case UPDATE_HOUR_OBJECT:
                console.log("this is the pay load "+action.payload)
                console.log("this is the minutes remaining in pay load "+action.payload.minutesRemaining)
                      //  const Empnumber = action.payload;
                        return Object.assign({}, state,
                         action.payload
                     );
                     case UPDATE_COLOR:
                    // console.log("this is the pay load "+action.payload)
                     console.log("this is the color in pay load "+action.payload)
                           //  const Empnumber = action.payload;
                           return Object.assign({}, state, {
                            color : action.payload
                        });


        default:
            return state;
    }
}
