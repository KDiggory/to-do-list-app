import * as React from 'react';
import CompletedCard from './CompletedCard'
import { Button } from '@material-ui/core';
import Nav from './Nav';
import { useEffect, useState } from "react";
import axios from "axios";
import ListCard from './ItemCard';
import { Container } from '@material-ui/core';
import ItemCard from './ItemCard';
import NavItem from './NavItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface IAppProps {
}

const SeeAllCompleted: React.FunctionComponent<IAppProps> = (props) => {
    const [itemsComplete, setItemsComplete] = useState<any[]>([])


  useEffect(() => {
  axios
  .get('http://localhost:8080/getAllCompleted')
  .then((response) => {
    setItemsComplete(response.data);
    console.log("Got results, page should load.");
  })
  .catch((error) => {
    console.log(error);
});
},[]);


  return (
      <div> 
    <Nav></Nav>
    <NavItem></NavItem>
    
    <Grid container > 
       {itemsComplete.map((item) => {
          return (
              <div> 
           <CompletedCard  itemName={item.name} itemDescription={item.description} itemDate={item.date} id={item.id} list_id={item.list_id} ></CompletedCard>
           </div>
        )})}     
 </Grid>

  </div>
  )
};

export default SeeAllCompleted;
