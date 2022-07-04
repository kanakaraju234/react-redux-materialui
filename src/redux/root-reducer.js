import { combineReducers } from "redux";
import usersReducers from "../redux/userRedux/userReducer";
import deviceReducer from "./deviceRedux/deviceReducer";

const rootReducer = combineReducers({
    users: usersReducers,
    devices: deviceReducer
});

export default rootReducer;