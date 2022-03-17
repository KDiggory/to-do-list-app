import * as React from 'react';
import { Button } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import axios from "axios"; 
import { useEffect, useState } from "react";
import { setConstantValue } from 'typescript';
import Nav from './Nav';
import Modal from '@mui/material/Modal';
import Success from './Success';
import Warning from './Warning';
import { Container } from '@material-ui/core';
import ListCard from './ListCard';

interface IAppProps {
}

const NavList: React.FunctionComponent<IAppProps> = (props) => {

    const [click, setClick] = useState(false);
   // state to store the data we get from the back end
   const [items, setItems] = useState<any[]>([])
    
   // State to check if the API has errored
   const [error, setError] = useState(null);

   // State to check if the data has loaded
   const [loaded, setLoaded] = useState(false);

    const newitem = () => {
        window.location.href = '/createlist'
    }

    const update = () => {
        window.location.href = '/updatelist'
    }

    const seeAll = () => {
      window.location.href = '/showlist'
  }

  return (
      <div>
          <hr id="line"></hr>
        <Button id="navButton" variant="contained" size="small" onClick={newitem} > Make a new list </Button>
        <Button id="navButton" variant="contained" size="small" onClick={update} > Update a list </Button>
        <Button id="navButton" variant="contained" size="small" onClick={seeAll} > See all lists </Button>
        <hr id="line"></hr>
        <Container 
        id="grid"> 
           {items.map((item) => {
               console.log(item);
              return (
                  <div> 
              
               <ListCard  name={item.name} description={item.description} id={item.id} ></ListCard>
               </div>
            )})}     
      </Container>
      </div>
  );
};

export default NavList;
