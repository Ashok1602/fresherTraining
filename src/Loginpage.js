import React from "react";
import './App.css';
import { Button,Form,FormGroup,Label,Col,Input, } from 'reactstrap';
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)



const Loginpage = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
<div className = "bg-container">
  <div className = "cardcontainer">
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
      <h1 className="loginText text-center">LOGIN</h1>
        <label className="headtext">Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="Email"
            className="login-form"
          />
        </div>
      </div>
      <div>
        <label className="headtext">Password</label>
        <div>
          <Field
            name="Password"
            component={renderField}
            type="password"
            placeholder="Enter password"
            className="login-form"
          />
        </div>
      </div>
      <div className='rememberdiv'>
          <div className = "remember-container">
            <Input type="radio"  placeholder ="Enter email" />
            <p className="rememText">REMEMBER ME</p>
          </div>
          <a href ="https://account.live.com/password/reset">FORGET PASSWORD?</a>
      </div>
      <div className="rememberdiv">
        <Button  blocktype="button" size="lg" color="success" type="submit" disabled={pristine || submitting}>
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

export default reduxForm({
  form: "simple",
  validate  // a unique identifier for this form
})(Loginpage);


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
