import { checkHttpStatus } from "../utils";

// when request is send and response is awaited
export function getRequest(REQUEST) {
  return {
    type: REQUEST, 
  };
}
// if user is successfully logged in
export function getSuccess(SUCCESS, data) {
  return {
    type: SUCCESS,
    payload: data,
  };
}
// handle state in ca  se of failure of user login
export function getFailure(FAILURE, error) {
  handleError(error); 
  return {
    type: FAILURE,
    payload: error,
  };
}
// handle error from catch
function handleError(error) {
  if (error.error) {
    if (error.error.data) {
      if (error.error.data.response.status) {
        let responseStatus = error.error.data.response;
        checkHttpStatus(responseStatus);
      }
    } else if (error.error.statusText) {
      if (error.error.statusText.response) {
        if (error.error.statusText.response.status) {
          let responseStatus = error.error.statusText.response;
          checkHttpStatus(responseStatus);
        }
      }
    }
  }
}
