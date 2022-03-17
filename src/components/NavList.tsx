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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Joyride from 'react-joyride';

interface IAppProps {
}

const NavList: React.FunctionComponent<IAppProps> = (props, state) => {

    const [run, setRun] = useState<boolean>(false);

    state = {
        run: run,
          steps: [
              {
                  target: '#navButton1',
                  content: 'This button will take you to the page to add a new list'
              },
              {
                target: '#navButton2',
                content: 'This button takes you to the page to update a list'
            },
            {
                target: '#navButton3',
                content: 'This button will show all the lists'
            },
          ]
      }

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
          <Joyride 
          // this sets the steps for each it to run through
          steps = {state.steps}
          // this sets it as running
          run={run}
          // this means it goes from one to the next
          continuous={true}
            // this is how they look
          styles={{
              options:{
                  arrowColor: '#caddde',
                  backgroundColor: '#caddde',
                  primaryColor: '#79b9bd',
                  width: 900,
                  zIndex:1000,
              }
          }}/>
          <hr id="line"></hr>
        <Button id="navButton1" variant="contained" size="small" onClick={newitem} > Make a new list </Button>
        <Button id="navButton2" variant="contained" size="small" onClick={update} > Update a list </Button>
        <Button id="navButton3" variant="contained" size="small" onClick={seeAll} > See all lists </Button>
        <Button id="help" size="small" onClick={()=> setRun(!run)} ><HelpOutlineIcon/> </Button>
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
