import React,{useState} from 'react'
import '../App.css';
import {ModalFooter,ModalHeader,Modal,ModalBody,noRefCheck} from 'reactstrap';
import { Field, reduxForm } from "redux-form";
import renderField from  '../common/RanderField';
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function UserModal(props) {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
         <Modal isOpen = {props.isOpenModal} toggle = {props.switchToModal}>
                  <ModalHeader>User Information</ModalHeader>
                      <ModalBody>
                      <form >
                        <Field name="Username" type="text"
                            fullWidth
                            component={renderField}
                            label= "Username"
                        />  
                        <Field name="PhoneNumber" type="text"
                            fullWidth
                            component={renderField}
                            label= "PhoneNumber"
                        />  
                        <Field name="Email" type="text"
                            fullWidth
                            component={renderField}
                            label= "Email"
                        />  
                    </form>    
                      </ModalBody>
                      <ModalFooter>


                        <Button  size="medium"  className={classes.margin} variant="contained" color="secondary" onClick = {props.switchToModal}> Cancel </Button>  
                       <Button  size="medium"  className={classes.margin} type="submit" variant="contained" color="primary" > Submit </Button>
                      </ModalFooter>
              </Modal>
    </div>
  )
}
export default reduxForm({form: "simple"})(UserModal);