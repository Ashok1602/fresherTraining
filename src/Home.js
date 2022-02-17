import React, { useState,useEffect } from 'react';
import './App.css';
import {Link,useNavigate } from 'react-router-dom';
import {UserSuccess} from './actions/userAction';
import {LogOutUser} from './actions/LoginAction';
import {useDispatch,useSelector } from 'react-redux';
import {Table} from 'reactstrap';
import {ModalFooter,ModalHeader,Modal,ModalBody,noRefCheck} from 'reactstrap';
import UserModal from './modals/UserModal';
import {Button} from "@material-ui/core";

const Home = () => {
  let navigate2 = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(UserSuccess())
  },[])

  const userData1 =  useSelector((state) => state.user.userData)
  console.log(userData1)

const [isOpenModal,setModal]= useState(false);
const [userData,setItem]= useState();

 const handleOnClick = (item) => {
   if (item){
     setItem(item)
  }
  setModal(!isOpenModal)

 }
  let userInfo1 = (<></>)          // called as react scopes
  if (userData1){
      userInfo1 = userData1.map(item => {  
      return (
          <tr key ={item.id} onClick={() => {handleOnClick(item)}}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
          </tr>
      )
  })
  }
  const handleActions = () => {
    localStorage.clear();
    dispatch(LogOutUser());
    navigate2('/');
  }
  return ( 
        <div> 
                {isOpenModal && <UserModal isOpenModal = {isOpenModal} switchToModal = {handleOnClick} 
                userData ={userData} 
                initialValues={{Username: userData.name,PhoneNumber:userData.phone,Email:userData.email}}/>}
                <Table hover>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                      </tr>
                  </thead>
                  <tbody>
                      {userInfo1 !== undefined ? userInfo1 : null}
                  </tbody>
                </Table>
          <center>
                <Button  variant="contained" color="secondary"  onClick ={() => handleActions()}>Logout</Button>
          </center>
       </div>
            
  )
}

export default Home;

