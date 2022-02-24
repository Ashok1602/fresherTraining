import './App.css';
import React,{useEffect,useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Loginpage from './Loginpage';
import {Home} from './Home';
import {NewDesign} from './NewDesign';

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <div className ="App" >
            <Routes>
              <Route path ="/"  element = {<Loginpage />} />
              <Route path ="/home" element ={<Home />}/>
              <Route path ="/newDesign" element ={<NewDesign />}/>
            </Routes>
      </div>
    </BrowserRouter>
  );
}


export default CustomRoutes;