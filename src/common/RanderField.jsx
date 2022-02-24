import React from "react";
import { Input } from 'reactstrap';
// import {TextField} from 'material-ui/lab'

// const style = {
//   fontstyes:{fontWeight:"bold",
//      fontSize:"20px"}
// }

export const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning } }) => (
    <div>
      <label style = {{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>{label}</label>
      <div>
        <Input {...input} placeholder={label} type={type} />
        
        {touched &&
          ((error && <span className="textColor">{error}</span>) ||
            (warning && <span>{warning}</span>))}
        <br />
      </div>
    </div>
  )
  // export const RenderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  //   <TextField hintText={label}
  //     floatingLabelText={label}
  //     errorText={touched && error}
  //     {...input}
  //     {...custom}
  //   />
  // )
// export default renderField
  