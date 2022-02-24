import React, {useState, useEffect} from 'react'
import {Link,useNavigate } from 'react-router-dom';
import './App.css';
import { Form,Label,Col,Input } from 'reactstrap';
import { Field, reduxForm } from "redux-form";
import {RenderField} from  './common/RanderField';
import {LoginUserSuccess} from './actions/LoginAction'
import {UserSuccess} from './actions/userAction'
import {useDispatch,useSelector } from 'react-redux';
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Checkbox} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const required = value => (value || typeof(value) === 'number' ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const validPassword = value =>
value && /^(0|[1-9][0-9]{10})$/i.test(value)
  ? 'Invalid password'
  : undefined

  // email: info@villars-luxury.com 
  // password : reset@123
const Loginpage = (props) => {
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
   })((props) => <Checkbox color="default" {...props} />);
    const [state, setState] = React.useState({
      checkedB: true,
    });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const [username,setName] = useState("");
  const [password,setPassword] = useState("");
  const { handleSubmit, pristine, reset, submitting } = props;
  
  const dispatch = useDispatch()  //the fundamental method of updating a Redux store's state 
                                //use it to dispatch actions as needed.
  const navigate = useNavigate();

 const onSubmit = (formProps) => {
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

//  const [values, setValues] = React.useState({
//   showPassword: false
// });

// const handleChange2 = (prop) => (event) => {
//   setValues({ ...values, [prop]: event.target.value });
// };

// const handleClickShowPassword = () => {
//   setValues({
//     ...values,
//     showPassword: !values.showPassword
//   });
// };

// const handleMouseDownPassword = (event) => {
//   event.preventDefault();
// };


 return (
 <div className = "bg-container">
  <div className = "cardcontainer">
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="loginText text-center">LOGIN</h1>
        <Field name="email" type="email"
          fullWidth
          component={RenderField} 
          label= "Email"
          validate={[email,required]}
          value={username}
          onChange = {(e) => setName(e.target.value)}
        />
        
        {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange2("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}
        <Field name="password" type="password"
          component={RenderField}
          fullWidth
          label= "Password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          validate={[required, validPassword]}
        />
      <div className='rememberdiv'>
          <div className = "remember-container">
          <FormGroup row>
          <FormControlLabel
              control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
              }
            label="Remembar"
          />
           </FormGroup>
          </div>
          <a className = "linktext" href ="https://account.live.com/password/reset">FORGET PASSWORD?</a>
      </div>
      <div className="rememberdiv">
        
      <Button   variant="contained" color="primary" type="submit" >
          Submit
        </Button>
        < Button  variant="contained" color="secondary"  onClick={reset}>
          Clear Values
        </Button>
        
      </div>
    </form>
  </div>
 </div>
  );
};

export default reduxForm({form: "simple"})(Loginpage);
