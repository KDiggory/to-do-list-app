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
import { Container } from '@material-ui/core';
import ListCard from './ListCard';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import '../CSS/ListCardStyle.css';
import Nav from './Nav';
import NavList from './NavList';

interface IAppProps {
}

const ShowList: React.FunctionComponent<IAppProps> = (props) => {


      // state to store the info to use for searches
   const [listId, setListId] = useState(0);
   const [listName, setListName] = useState("");
   // state to store the data we get from the back end
   const [lists, setLists] = useState<any[]>([])
    

   // has the search button been clicked?
   const [click, setClick] = useState(false);

   useEffect(() => {
    console.log('showing all items');
    axios.get('http://localhost:8080/getAllLists')
    .then((res) => {
       console.log(res.data);
       setLists(res.data);
    }).catch((error) => {
    }).then(() => {
       console.log('****** the returned data ******')
       console.log(lists);
    });

},[]);


    return (
    <div>
       <Nav></Nav>
          <NavList></NavList>
      <br></br>
<Grid container > 
         {lists.map((list) => {
             console.log(list);
          return ( 
          <div>
               <ListCard name={list.name} description={list.description} id={list.id} ></ListCard>
          </div> 
          )
         })}     
    </Grid>

    </div>
 );
};

export default ShowList;