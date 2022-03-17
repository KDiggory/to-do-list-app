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

   const [page, setPage] = useState<boolean> (false);

   useEffect (() => {
      console.log('going to see all')
      window.location.href = '/seeAll'

    }, [page]);

    useEffect (() => {
       console.log('changing set page')
       setPage(true)
      },[]);
    
      return (
        <div>
        <Nav></Nav>
        <NavItem></NavItem>
    </div>
      )

};

export default Items;
