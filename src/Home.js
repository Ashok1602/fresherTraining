import React, { useState,useEffect } from 'react';
import './App.css';
import {Link,useNavigate } from 'react-router-dom';
import {UserSuccess} from './actions/userAction';
import {LogOutUser} from './actions/LoginAction';
import {useDispatch,useSelector } from 'react-redux';
// import {Table} from 'reactstrap';
import {ModalFooter,ModalHeader,Modal,ModalBody,noRefCheck} from 'reactstrap';
import UserModal from './modals/UserModal';
import {Button} from "@material-ui/core";
import styled from "styled-components";
import { useTable } from "react-table";




export const Home = () => {
  const Styles = styled.div`
  padding: 1rem;
  margin-left:320px;
  margin-right:320px;
  table {
    border-spacing: 2;
    border: 2px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 2;
        }
      }
    }

    th {
      text-align:center;
      border: 2px solid black;
      border-spacing: 2;
      padding: 0.65rem;
    },
    td {
      margin: 10;
      padding: 0.65rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 2;
      }
    }
  }
`;

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
  let navigate2 = useNavigate();
  const dispatch = useDispatch()
  const userData1 =  useSelector((state) => state.user.userData)
  const [addRowData,setAddRowData]= useState();

  useEffect(() => {
    setAddRowData(userData1)
  },[userData1])
 
  useEffect(() => {
    dispatch(UserSuccess())
  },[])




 const handleOnClickAddUser = (addUser) => {
   if (addUser){
    setAdd(addUser)
   }
 setModal(!isOpenModal)
}
// const deleteActions = (index) => {
//   addRowData.splice(index,1);
//   // handleOnClick();

// }

      const columns = React.useMemo(
        () => [
          {
            Header: "User Information",
            columns: [
              {
                Header: "User Name",
                accessor: "name"
              },
              {
                Header: "Phone Number",
                accessor: "phone"
              },
              {
                Header: "Email",
                accessor: "email"
              }
              
            ]
          }
        ],
        []
      );


  const data = React.useMemo(() => (addRowData), [addRowData]);
      

function Table({ columns, data }) {
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns,data});

  // Render the UI for your table
  return (
    <table {...getTableProps()}>

      <thead>
        {headerGroups.map((headerGroup) => (

          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>

        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
                
            <tr {...row.getRowProps()} onClick = {() => handleOnClick()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })} 
            </tr>

          );
        })}
      </tbody>

    </table>
  );
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
              

              {addRowData ? 
              <Styles>  
              <Table columns={columns} data={data} />
              </Styles>
              : null}
              
              
              {/* <Table hover>
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
                </Table> */}
          <center>
                <Button  variant="contained" color="secondary"  onClick ={() => handleActions()}>Logout</Button>
          </center>
       </div>
            
  )
}


