import React, {useState, useEffect} from 'react'
import {Link,useNavigate } from 'react-router-dom';
import './App.css';
import { Button,Form,FormGroup,Label,Col,Input, } from 'reactstrap';
import { Field, reduxForm } from "redux-form";
import renderField from  './common/RanderField';
import {LoginUserSuccess} from './actions/LoginAction'
import {UserSuccess} from './actions/userAction'
import {useDispatch,useSelector } from 'react-redux';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
export const validPassword = value =>
value && /^(0|[1-9][0-9]{10})$/i.test(value)
  ? 'Invalid password'
  : undefined

  // email: info@villars-luxury.com 
  // password : reset@123
const Loginpage = (props) => {
  const [username,setName] = useState("");
  const [password,setPassword] = useState("");
  const { handleSubmit, pristine, reset, submitting } = props;
  
  const dispatch = useDispatch()  //the fundamental method of updating a Redux store's state 
                                //use it to dispatch actions as needed.
  const navigate = useNavigate();

 const onSubmit = (formProps) => {
  //  console.log(formProps);
  dispatch(LoginUserSuccess(formProps))    // directly goes to action/LoginAction.js 
 } 

 const loginData =  useSelector((state) => state.login.loginData)
//  console.log(loginData)
 
 useEffect(() => {
   if (loginData){
     if (loginData.isSuccess){
       console.log(loginData)
     navigate(`/home`)
   }
 }},[loginData])


 return (
 <div className = "bg-container">
  <div className = "cardcontainer">
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="loginText text-center">LOGIN</h1>
        <Field name="email" type="email"
          fullWidth
          component={renderField} 
          label= "Email"
          validate={required}
          value={username}
          onChange = {(e) => setName(e.target.value)}
        />
        
        <Field name="password" type="password"
          component={renderField}
          fullWidth
          label= "Password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          validate={[required, validPassword]}
        />
      <div className='rememberdiv'>
          <div className = "remember-container">
          <Input type="radio" />
            <p className="rememText">REMEMBER ME</p>
          </div>
          <a href ="https://account.live.com/password/reset">FORGET PASSWORD?</a>
      </div>
      <div className="rememberdiv">
        
      <Button blocktype="button" size="lg" color="success" type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        < Button blocktype="button" size="lg" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  </div>
 </div>
  );
};


export default reduxForm({form: "simple"})(Loginpage);


// import React,{useEffect,useState} from 'react';
// import './App.css';
// import { Button,Form,FormGroup,Label,Col,Input, } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom';
// import Switch from 'react-switch'
// import {reduxForm,Field} from 'redux-form';



// const  Loginpage = () =>  {
//     const [email, setData1] = useState()
//     const [password, setData2] = useState()
    
//     const submitHandler = e => {
//         e.preventDefault()
//         console.log(email,password);
//         if (email===undefined || password === undefined){
//             alert("Please Enter Valid Details")
//         }else if (password!=="12345"){
//             alert("Invalid Password")
//         }
//     }

//   return (
//     <div className = "bg-container">
//       <div className = "cardcontainer">
//         <Form className="login-form" onSubmit = {submitHandler}> 
//             <h1 className="loginText">LOGIN</h1>
//             <FormGroup >
//                 <Input type="email"  placeholder ="Enter email" value = {email} onChange={(e) => setData1(e.target.value)}/>
//             </FormGroup>
//             <FormGroup>
//                 <Input type="password" placeholder ="Password" value = {password} onChange={(e) => setData2(e.target.value)}/>
//             </FormGroup>
//             <div className='rememberdiv'>
//                 <div className = "remember-container">
//                     <Input type="radio"  placeholder ="Enter email" />
//                     <p className="rememText">REMEMBER ME</p>
//                 </div>
//                 <a href ="https://account.live.com/password/reset">FORGET PASSWORD?</a>
//             </div>

//             {password==="12345" && email !== undefined ? <Link to ="/home"><Button block type="submit" size="lg" color="success">SIGN IN</Button></Link> :<Button block type="submit" size="lg" color="success">SIGN IN</Button> } 
//         </Form>
//       </div>
//     </div>
//   )
// }

// export default (Loginpage);
