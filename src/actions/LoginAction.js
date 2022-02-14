import { AUTH_CONST } from "./actionTypes";
import { AXIOS_INSTANCE, BASE_URL } from "./apiEndPoint";

export const LoginUserSuccess = (user) => async dispatch => {  
    dispatch({
        type:AUTH_CONST.LOGIN_SUCCESS,
        payload: user
    })
}



