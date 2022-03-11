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

interface IAppProps {
}

const Items : React.FunctionComponent<IAppProps> = (props) => {

    const [click, setClick] = useState(false);
   // state to store the data we get from the back end
   const [items, setItems] = useState<any[]>([])
    
   // State to check if the API has errored
   const [error, setError] = useState(null);

   // State to check if the data has loaded
   const [loaded, setLoaded] = useState(false);


    

      return (
        <div>
        <Nav></Nav>
        <NavItem></NavItem>
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
    </div>
      )

};

export default Items;
