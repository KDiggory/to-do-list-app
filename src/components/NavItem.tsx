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
import CompletedCard from './CompletedCard'

interface IAppProps {
}

const NavItem: React.FunctionComponent<IAppProps> = (props) => {

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
        <hr id="line"></hr>
        <Button id="navButton" variant="contained" size="small" onClick={newitem} > Make a new item </Button>
        <Button id="navButton" variant="contained" size="small" onClick={update} > Update an item </Button>
        <Button id="navButton" variant="contained" size="small" onClick={seeAll} > See all items </Button>
        <Button id="navButton" variant="contained" size="small" onClick={seeAllComplete} > See all completed items </Button>
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
               <CompletedCard  id={itemComplete.id} itemName={itemComplete.name} itemDescription={itemComplete.description} itemDate={itemComplete.date} ></CompletedCard>
               </div>
            )})}     
      </Container>
      </div>
  );
};


export default NavItem;
