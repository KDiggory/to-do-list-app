import * as React from 'react';
import { Button } from '@material-ui/core';
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react'

interface IAppProps {
}

const Nav: React.FunctionComponent<IAppProps> = (props) => {

    // let [location, setLocation] = useState("/")

    const toItem = () => {
        window.location.href = '/item'
    }
    const toList = () => {
        window.location.href = '/list'
    }
    const homePage = () => {
        window.location.href = '/'
    }


  return (
      <div id="navbar">
          <Button id="mainNavButton" variant="contained" size="small" onClick={toItem} >Items</Button>
          <Button id="mainNavButton" variant="contained" size="small" onClick={toList} >Lists</Button>
          <Button id="mainNavButton" variant="contained" size="small" onClick={homePage} >Home page</Button>
         
      </div>
   );

  }
          
        


export default Nav;
