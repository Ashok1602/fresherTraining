import { USER_CONST,USER_LOGOUT } from "../actions/actionTypes";
const INIT_STATE = {}

export default function userReducer(state = INIT_STATE,action) {
    const {type, payload} = action;
    switch (type) {
      case USER_CONST.USER_REQUEST:
        return {
          ...state,
          userData: null,
        }
      case USER_CONST.USER_SUCCESS:
        return {
          ...state,
          userData: action.payload.response.data,
        }
      case USER_CONST.USER_FAILURE:
        return {
          ...state,
          userData: null,
        }

        default:
            return state
    }
}