import { USER_CONST,USER_LOGOUT } from "./actionTypes";
import { AXIOS_INSTANCE, USER_URL } from "./apiEndPoint";
import { checkHttpStatus, parseJSON, handleLoginRedirect } from "../utils";
import * as base from "./baseAction";

export function UserSuccess() {
  return dispatch => {
    dispatch(base.getRequest(USER_CONST.USER_REQUEST)); // meaning dispatch(REQUEST(LOGIN_USER_REQUEST))
    AXIOS_INSTANCE.get(USER_URL + "/users")  // meaning axios.create().post("https://argos-dev-api.azurewebsites.net/api/v1" + "/login",formData) 
      .then(checkHttpStatus)                            // meaning we are chechkig the http status is valid or not 
      .then(parseJSON)                                  // we are directly get the data in the form of JSON format
      .then(response => {
        if (response) {
          dispatch(
            base.getSuccess(USER_CONST.USER_SUCCESS, {   // meaning dispatch(SUCCESS( LOGIN_USER_SUCCESS,{passing response});
              response: {
                statusCode: 200,
                data: response
              }
            })
          );
        } else {
          dispatch(
            base.getFailure(USER_CONST.USER_FAILURE, {   //meaning  dispatch(FAILURE(LOGIN_USER_FAILURE,{passing error}));
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
          base.getFailure(USER_CONST.USER_FAILURE, {   //meaning  dispatch(FAILURE(LOGIN_USER_FAILURE,{passing error}));
            error: {
              statusText: error,
              netWorkError: true
            }
          })
        );
      });
  };
}


