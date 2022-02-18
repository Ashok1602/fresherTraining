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
  const userData1 =  useSelector((state) => state.user.userData)
  const [addRowData,setAddRowData]= useState();

  console.log(addRowData,"addRowData")
  console.log(userData1,"userData1")

  useEffect(() => {
    setAddRowData(userData1)
  },[userData1])
 
  useEffect(() => {
    dispatch(UserSuccess())
  },[])



const [isOpenModal,setModal]= useState(false);
const [userData,setItem]= useState([]);
const [userAdd,setAdd]= useState(false);

 const handleOnClick = (item) => {
   if (item){
     setItem(item)
     setAdd(false)
  }
  setModal(!isOpenModal)
 }
 
 const handleOnClickAddUser = (addUser) => {
   if (addUser){
    setAdd(addUser)
   }
 setModal(!isOpenModal)
}

  let userInfo1 = (<></>)          // called as react scopes
  if (addRowData){
      userInfo1 = addRowData.map((item,index) => {  
      return (
          <tr key ={index} onClick={() => {handleOnClick(item)}}>
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
          <div className = "rightBitton">
           <Button onClick={() => {handleOnClickAddUser(true)}} size="large" variant="contained" color="secondary">Add User</Button>
           </div>

              {isOpenModal ? <UserModal isOpenModal = {isOpenModal} switchToModal = {handleOnClick} 
              userData ={userData} userAdd ={userAdd} setAddRowData = {setAddRowData} addRowData = {addRowData}
              initialValues={{name: userData.name,phone:userData.phone,email:userData.email}}/> : null}
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

