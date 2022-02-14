import { AUTH_CONST } from "../actions/actionTypes";
const INIT_STATE = {
    useremail: "",
    password: "",
}

export default function reducer(state = INIT_STATE, action) {
    const {type, payload} = action;
    switch(type){
        case AUTH_CONST.LOGIN_SUCCESS:
            return {
                ...state,
                loginData: payload,
              };
        default:
            return state
    }
}