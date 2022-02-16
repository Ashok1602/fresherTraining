{/* 
  200 ok
  204 NO RESPONSE
  301 moved permanantly 
  401 unauthorised
  403 forbidden
  404 not found
*/}

export function checkHttpStatus(response) { 
    if (response.status >= 200 && response.status < 300) {
      return response;   
    } else if (response.status === 401 || response.status === 403) {
      localStorage.clear();
      window.location.href = "/pages/login-page";
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
}

export function handleLoginRedirect(data) {
    localStorage.setItem("authToken", data.token);                 // assining data.Token as value to authToken  as key 
    localStorage.suserDetailsetItem("", JSON.stringify(data.user));  // assining JSON string as value to userDetails  as key 
    return true;
}
  
export function parseJSON(response) {
   return response.data;
 }