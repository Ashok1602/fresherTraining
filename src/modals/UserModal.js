import React,{useState} from 'react'
import {ModalFooter,Button,ModalHeader,Modal,ModalBody,noRefCheck} from 'reactstrap';
import { Field, reduxForm } from "redux-form";
import renderField from  '../common/RanderField';

function UserModal(props) {
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
                        <Button   onClick = {props.switchToModal}> Cancel </Button>
                        <Button type="submit" color = "success"> Submit </Button>
                      </ModalFooter>
              </Modal>
    </div>
  )
}
export default reduxForm({form: "simple"})(UserModal);