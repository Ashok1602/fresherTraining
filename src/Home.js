import React, { useState,useEffect } from 'react';
import './App.css';
import {Link,useNavigate } from 'react-router-dom';
import {UserSuccess} from './actions/userAction';

import {LogOutUser} from './actions/LoginAction';
import {useDispatch,useSelector } from 'react-redux';
import {Table} from 'reactstrap';
import {Button} from 'reactstrap';


const Home = () => {
  let navigate2 = useNavigate();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(UserSuccess())
  },[])

  const userData1 =  useSelector((state) => state.user.userData)
  
  console.log(userData1)
  // if (userData1!==null && userData1 !== undefined){
  // }
  let userInfo1 = (<></>)
  if (userData1){
      userInfo1 = userData1.map(item => {   
      return (
          <tr key ={item.id} >
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
          </tr>
      )
  })
  }

  return ( <div>
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
              <Link  to = "/">
                <Button onClick ={() => {
                 navigate2(`/`)
                localStorage.clear()
                // LogOutUser()
                }} 
                shadow size ="lg" color="secondary">Logout</Button>
                </Link>
          </center>
            </div>
            
  )
}

export default Home;

// export default function Home() {
//   return (
//     <div>
//         {/* <UserInfo /> */}
//     </div>
//   )
// }
