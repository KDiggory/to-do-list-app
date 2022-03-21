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
import ItemCard from './ItemCard';
import CompletedCard from './CompletedCard';
import Joyride from 'react-joyride';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface IAppProps {
}

const NavItem: React.FunctionComponent<IAppProps> = (props, state) => {

  const [run, setRun] = useState<boolean>(false);

    // trying react joyride
     state = {
        run: run,
          steps: [
              {
                  target: '#seeAllButton',
                  content: 'This button will show you all of the items'
              },
              {
                target: '#newButton',
                content: 'This button takes you to the page to make a new item'
            },
            {
                target: '#updateButton',
                content: 'This button takes you to the page for updating an item'
            },
            {
              target: '#completedButton',
              content: 'This button will show you all of the items that have been added to the completed list'
          },

          ]
      }

    const [click, setClick] = useState(false);
   // state to store the data we get from the back end
   const [items, setItems] = useState<any[]>([])
   const [itemsComplete, setItemsComplete] = useState<any[]>([])
    
   // State to check if the API has errored
   const [error, setError] = useState(null);

   // State to check if the data has loaded
   const [loaded, setLoaded] = useState(false);


    const newitem = () => {
        window.location.href = '/newitem'
    }

    const update = () => {
        window.location.href = '/update'
    }

    function refreshPage(){ 
      console.log('how to refresh page here to remove previous cards?');
  }

    const seeAll = () => {
      window.location.href = '/seeAll'

    }

    const seeAllComplete = () => {
      window.location.href = '/seeAllCompleted'
      
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
        <Button id="seeAllButton" className="navButton" variant="contained" size="small" onClick={seeAll} > See all items </Button>
        <Button id="newButton" className="navButton" variant="contained" size="small" onClick={newitem} > Make a new item </Button>
        <Button id="updateButton" className="navButton" variant="contained" size="small" onClick={update} > Update an item </Button>
        <Button id="CompletedButton" className="navButton" variant="contained" size="small" onClick={seeAllComplete} > See all completed items </Button>
        <Button id="help" size="small" onClick={()=> setRun(!run)} ><HelpOutlineIcon/> </Button>
        <hr id="line"></hr>
        <Container 
        id="grid"> 
           {items.map((item) => {
               console.log(item);
              return (
                  <div> 
               <ItemCard  itemName={item.name} itemDescription={item.description} itemDate={item.date} id={item.id} list_id={item.list_id} ></ItemCard>
               </div>
            )})}     
      </Container>
      <Container 
        id="grid"> 
           {itemsComplete.map((itemComplete) => {
               console.log(itemComplete);
              return (
                  <div> 
               <CompletedCard  id={itemComplete.id} itemName={itemComplete.name} itemDescription={itemComplete.description} itemDate={itemComplete.date} list_id={itemComplete.list_id} ></CompletedCard>
               </div>
            )})}     
      </Container>
      </div>
  );
};


export default NavItem;
