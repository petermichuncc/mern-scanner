
import { UPDATE_SHIFTS_ARRAY,REMOVE_HOUR,ADD_HOUR, INITIALIZE_SHIFTS_ARRAY,UPDATE_SERVER_HOUR, UPDATE_JOBS } from "../constants/action-types";

const initialState = [{operator:"",shift:""}]

export default function shiftsReducer(state= initialState, action) {
  switch (action.type) {
    case INITIALIZE_SHIFTS_ARRAY:
     console.log("calling the initialize shifts array ")
             //  const hourObject = action.payload;
             //console.log("This is the minutes lost "+action.payload[action.payload.length - 1].calculatedMinutesLost)
            // console.log("This is the action.payload sent to redux for jobs "+action.payload)
             /*  return Object.assign({}, state,
                action.payload
            )*/

            return state=action.payload
    case UPDATE_SHIFTS_ARRAY:
  //  console.log("This is the action.payload sent to redux for update jobs array "+action.payload)
    //let array = state.slice(action.payload);

            return state=action.payload
        /*    case UPDATE_SERVER_HOUR:
            var index=state.length-1
            var hourObject=state[index]
            console.log("This is the hour of the last hour object found ")
            hourObject["serverHour"]=action.payload
            console.log("This is the action.payload sent to redux for add hour "+action.payload+" this is the index "+index)
            if (action.payload!=null&& action.payload!=undefined)
            {
              return [
            ...state.slice(0, index),
            hourObject,
            ...state.slice(index)
          ];
            }
            else {
            return state;
          }*/

    case UPDATE_JOBS:
          const updatedItems = state.map(item => {
            if(item.id === action.id){
              return { ...item, ...action.payload }
            }
            return item
          })
          return updatedItems;




             case REMOVE_HOUR:

                //  const hourObject = action.payload;
                //console.log("This is the minutes lost "+action.payload[action.payload.length - 1].calculatedMinutesLost)
                console.log("This is the action.payload sent to redux for remove hour "+action.payload)
                let newArray = state.slice();
                        newArray.splice(action.payload, 1);
                        return newArray;
                case ADD_HOUR:

                   //  const hourObject = action.payload;
                   //console.log("This is the minutes lost "+action.payload[action.payload.length - 1].calculatedMinutesLost)
                   var index=state.length
                   console.log("This is the action.payload sent to redux for add hour "+action.payload+" this is the index "+index)
                   if (action.payload!=null&& action.payload!=undefined)
                   {
                     return [
           ...state.slice(0, index),
           action.payload,
           ...state.slice(index)
       ];
                 }
                 else {
                   return state;
                 }


        default:
            return state;
    }
}
