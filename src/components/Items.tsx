import * as React from 'react';
import CreateItem from './CreateItem';
import { Button } from '@material-ui/core';
import Nav from './Nav';
import { useEffect, useState } from "react";
import axios from "axios";
import ListCard from './ItemCard';
import { Container } from '@material-ui/core';
import ItemCard from './ItemCard';

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

    const newitem = () => {
        window.location.href = '/newitem'
    }

    const update = () => {
        window.location.href = '/update'
    }

    const seeAll = () => {
        console.log('in seeAll function');
    axios
      .get('http://localhost:8080/getAll')
      .then((response) => {
        console.log('after axios req');
        // console.log(response);
        setItems(response.data);
        setLoaded(true);
        console.log(loaded);
        console.log("Got results, page should load.");
      })
      .catch((error) => {
        console.log(error);
      });
    }

//   if (loaded) {
      return (
        <div>
        <Nav></Nav>
        <Button variant="contained" size="small" onClick={newitem} > Make a new job </Button>
        <Button variant="contained" size="small" onClick={update} > Update a job </Button>
        <Button variant="contained" size="small" onClick={seeAll} > See all jobs </Button>
        <Container 
        id="grid"> 
           {items.map((item) => {
               console.log(item);
            //   console.log(`an item: ${item.id}`); // this is working but console logging
              return (
                  <div> 
              
               <ItemCard   itemName={item.name} itemDescription={item.description} itemDate={item.date} id={item.id} list_id={item.list_id} ></ItemCard>
               </div>
            )})}     
      </Container>
    </div>
//       )
//   } else { 
//       return (
//         <div>
//         <h1> In final else statement</h1>
//         <Nav></Nav>
//         <Button variant="contained" size="small" onClick={newitem} > Make a new job </Button>
//         <Button variant="contained" size="small" onClick={update} > Update a job </Button>
//         <Button variant="contained" size="small" onClick={seeAll} > See all jobs </Button>
//     </div>
      )
//   }
};

export default Items;
