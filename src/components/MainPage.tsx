import * as React from 'react';
import { Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateItem from './CreateItem';
import CreateList from './CreateList';
import Nav from './Nav';
import NavList from './NavList';
import Items from './Items';
import Lists from './Lists';
import UpdateItem from './UpdateItem';
import UpdateList from './UpdateList';
import ShowList from './ShowList'



interface IAppProps {
}

const MainPage: React.FunctionComponent<IAppProps> = () => {


  return (
      <div> 
        <h1> The only to do list you will ever need </h1>
          <Nav>
          </Nav>
          
          

    </div>
  );

};

export default MainPage;


 
