import { AUTH_CONST,USER_LOGOUT } from "../actions/actionTypes";
const INIT_STATE = {
    useremail: "",
    password: "",
}

export default function reducer(state = INIT_STATE,action) {
    const {type, payload} = action;
    switch (type) {
      case AUTH_CONST.LOGIN_REQUEST:
        return {
          ...state,
          loginData: null,
        }
      case AUTH_CONST.LOGIN_SUCCESS:
        return {
          ...state,
          loginData: action.payload.response.data,
        }
      case AUTH_CONST.LOGIN_FAILURE:
        return {
          ...state,
          loginData: null,
        }
        
        case USER_LOGOUT.USER_LOGOUT_SUCCESS:
          return {
            ...state,
            loginData: null,
          }
        default:
            return state
    }
}