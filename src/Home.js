import React,{useState} from 'react';
import {Link,useNavigate } from 'react-router-dom';
import './App.css';
import {Button} from 'reactstrap';



export default function Home() {
    let navigate2 = useNavigate();
  return (
    <div>
        <h1>This is Home Page!!</h1>
    </div>
  )
}
