import React,{useState} from 'react'
import '../App.css';
import {ModalFooter,ModalHeader,Modal,ModalBody,noRefCheck} from 'reactstrap';
import { Field, reduxForm } from "redux-form";
import {RenderField} from  '../common/RanderField';
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector } from 'react-redux';


const required = value => (value || typeof(value) === 'number' ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const validPassword = value =>
value && /^(0|[1-9][0-9]{10})$/i.test(value)
  ? 'Invalid password'
  : undefined


const UserModal = (props) => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch()

  const onSubmit = (formProps) => {
    if ((Object.values(formProps)).indexOf(undefined) === -1){
      props.switchToModal(false)
      props.setAddRowData([...props.addRowData,formProps]);   //updating  addRowData array
    }
   } 
   const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
         <Modal isOpen = {props.isOpenModal} toggle = {props.switchToModal}>
                  <ModalHeader>User Information</ModalHeader>
                  <form onSubmit={handleSubmit(onSubmit)}> 
                      <ModalBody>
                    
                        <Field name="name" type="text"
                            fullWidth
                            component={RenderField}
                            label= "Username"
                            validate={[required]}
                        />  
                        <Field name="phone" type="text"
                            fullWidth
                            component={RenderField}
                            label= "PhoneNumber"
                            validate={[required]}
                        />  
                        <Field name="email" type="email"
                            fullWidth
                            component={RenderField}
                            label= "Email"
                            validate={[email,required]}
                        />  
                      </ModalBody>
                      <ModalFooter>
                      <Button  size="medium"  className={classes.margin} variant="contained" color="secondary" onClick = {props.switchToModal}> Cancel </Button>  
                      {props.userAdd ? <Button type = "submit"  size="medium"  className={classes.margin} variant="contained" color="primary" > Submit </Button> : null}
                      </ModalFooter>
                      </form>
              </Modal>
    </div>
  )
}
export default reduxForm({form: "simple"})(UserModal);