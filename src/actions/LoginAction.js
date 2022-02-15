import { AUTH_CONST,USER_LOGOUT} from "./actionTypes";
import { AXIOS_INSTANCE, BASE_URL } from "./apiEndPoint";
import { checkHttpStatus, parseJSON, handleLoginRedirect } from "../utils";
import * as base from "./baseAction";

// export const LoginUserSuccess = (user) => async dispatch => {  
//     dispatch({
//         type:AUTH_CONST.LOGIN_SUCCESS,
//         payload: user
//     })
// }

export function LoginUserSuccess(formData) {
  return dispatch => {
    dispatch(base.getRequest(AUTH_CONST.LOGIN_REQUEST)); // meaning dispatch(REQUEST(LOGIN_USER_REQUEST))
    AXIOS_INSTANCE.post(BASE_URL + "/api/account/login", formData)  // meaning axios.create().post("https://argos-dev-api.azurewebsites.net/api/v1" + "/login",formData) 
      .then(checkHttpStatus)                            // meaning we are chechkig the http status is valid or not 
      .then(parseJSON)                                  // we are directly get the data in the form of JSON format
      .then(response => {
        if (response.isSuccess) {
          AXIOS_INSTANCE.defaults.headers.common[       // we are assigning token as value to "Authorization" property
            "Authorization"
          ] = `Bearer ${response.data.token}`;
          // UserScope(response.data.token);
          dispatch(
            base.getSuccess(AUTH_CONST.LOGIN_SUCCESS, {   // meaning dispatch(SUCCESS( LOGIN_USER_SUCCESS,{passing response});
              response: {
                statusCode: 200,
                data: response
              }
            })
          );
           handleLoginRedirect(response.data);            // we are calling handleLoginRedirect function and passing arg as response.data
        } else {
          dispatch(
            base.getFailure(AUTH_CONST.LOGIN_FAILURE, {   //meaning  dispatch(FAILURE(LOGIN_USER_FAILURE,{passing error}));
              error: {
                statusCode: response.error.error,
                statusText: response.error.errorDescription,
                isSuccess: response.isSuccess
              }
            })
          );
        }
      })
      .catch(error => {                                 // if there is any error the catch block will handle those errors
        dispatch(
          base.getFailure(AUTH_CONST.LOGIN_FAILURE, {   //meaning  dispatch(FAILURE(LOGIN_USER_FAILURE,{passing error}));
            error: {
              statusText: error,
              netWorkError: true
            }
          })
        );
      });
  };
}



// export function LogOutUser() {
//   return dispatch => {                                
//           dispatch(
//             base.getSuccess(USER_LOGOUT.USER_LOGOUT_SUCCESS, {   
//               response: {
//                 data: false
//               }
//             })
//           );         
//   };
// }
