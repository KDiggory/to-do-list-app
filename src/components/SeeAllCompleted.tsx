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
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
       {itemsComplete.map((item) => {
          return (
              <div> 
           <Grid item xs={2} sm={4} md={4} key={item.id}>
           <CompletedCard  itemName={item.name} itemDescription={item.description} itemDate={item.date} id={item.id} ></CompletedCard>
           </Grid>
           </div>
        )})}     
 </Grid>
</Box>
  </div>
  )
};

export default SeeAllCompleted;
