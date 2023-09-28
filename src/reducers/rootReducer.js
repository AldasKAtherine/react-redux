import { combineReducers } from "redux";
import dataReducer from "../slides/dataSlice";
import uiReducer from "../slides/uiSlice";


const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
   
})

export default rootReducer;