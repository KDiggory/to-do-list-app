import * as React from 'react';
import CreateItem from './CreateItem';
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

const SeeAll: React.FunctionComponent<IAppProps> = (props) => {

    
    useEffect(() => {
          console.log('in seeAll function');
      axios
        .get('http://localhost:8080/getAll')
        .then((response) => {
          console.log('after axios req');
          // console.log(response);
          setItems(response.data);
          console.log("Got results, page should load.");
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);

const [items, setItems] = useState<any[]>([])
   return (
    <div>
    <Nav></Nav>
    <NavItem></NavItem>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
       {items.map((item) => {
           console.log(item);
          return (
              <div> 
          <Grid item xs={2} sm={4} md={4} key={item.id}>
           <ItemCard  itemName={item.name} itemDescription={item.description} itemDate={item.date} id={item.id} list_id={item.list_id} ></ItemCard>
           </Grid>
           </div>
        )})}     
  </Grid>

  </Box>
</div>
  )
};

export default SeeAll;
