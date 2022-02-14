import React from "react";
import { Input } from 'reactstrap';

const style = {
  fontstyes:{fontWeight:"bold",
     fontSize:"20px"}
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning } }) => (
    <div>
      <label style = {style.fontstyes}>{label}</label>
      <div>
        <Input {...input} placeholder={label} type={type} />
        
        {touched &&
          ((error && <span className="textColor">{error}</span>) ||
            (warning && <span>{warning}</span>))}
        <br />
      </div>
    </div>
  )
export default renderField
  