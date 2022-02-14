 import { combineReducers } from "redux";
 import { reducer as formReducer } from "redux-form"; // SAYING use redux form reducer as reducer
 import LoginReducer from "./LoginReducer";

 const appReducer = combineReducers({
   form: formReducer,  //
   login: LoginReducer,
 });
 
//  const initialState = appReducer({}, {});
 
 const rootReducer = (state, action) => {
   return appReducer(state, action);
 };
 
 export default rootReducer;
 