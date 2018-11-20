import { UPDATE_SERVER_HOUR } from "../constants/action-types";

const initialState = 0

export default function serverHourReducer(state= initialState, action) {
  switch (action.type) {
        case UPDATE_SERVER_HOUR:
        console.log("this is the pay load in update server hour"+action.payload)
              //  const serverHour = action.payload;
              return state=action.payload




        default:
            return state;
    }
}
