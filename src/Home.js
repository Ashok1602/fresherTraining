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
import BTable from 'react-bootstrap/Table';



export const Home = () => {
  
  const Styles = styled.div`
  padding: 1rem;
  margin-left:300px;
  margin-right:300px;
  table {
    border-spacing: 2;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 1;
        }
      }
    }

    th {
      text-align:center;
      border: 1px solid black;
      border-spacing: 2;
      padding: 0.65rem;
    },
    td {
      margin: 10;
      padding: 0.65rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 1;
      }
    }
  }
`;

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
  
  const [isOpenModal,setModal]= useState(false);
  const [userData,setItem]= useState([]);
  const [userAdd,setAdd]= useState(false);


  // const handleOnClickAddUser = (addUser) => {
  //    if (addUser){
  //     setAdd(addUser)
  //    }
  //  setModal(!isOpenModal)
  // } 


  const handleOnClick = (row,info) => {
    if (info === "userdata"){
      if (row){
        setItem(row.values)
        setAdd(false)
      }
      setModal(!isOpenModal)
    }else if(info==="useradd"){
      if (row){
        setAdd(row)
        setItem("")
       }
     setModal(!isOpenModal)
    }else{
      setModal(!isOpenModal)
    }
    
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
  
  // Render the UI for  table
  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}>
    {/* <table {...getTableProps()}> */}
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
            <tr {...row.getRowProps()} onClick = {() => handleOnClick(row,"userdata")}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })} 
            </tr>
          );
        })}
      </tbody>

    {/* </table> */}
    </BTable>
  );
} 


  const handleActions = () => {
    localStorage.clear();
    dispatch(LogOutUser());
    navigate2('/');
  }

  return ( 
        <div> 
          <div className = "rightButton p-4">
           <Button onClick={() => {handleOnClick(true,"useradd")}} size="large" variant="contained" color="secondary">Add User</Button>
           <Link to = "/newDesign">
             <Button onClick ={() => navigate2(`/newDesign}`)} style={{marginLeft:"10px"}} size="large" variant="contained" color="primary">New Design</Button>
           </Link>
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


