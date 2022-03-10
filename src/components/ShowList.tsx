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

interface IAppProps {
}

const ShowList: React.FunctionComponent<IAppProps> = (props) => {

   //  const styles = () => ({
   //      root: {
   //        display: 'flex',
   //        flexWrap: 'wrap',
   //        justifyContent: 'space-around',
   //        overflow: 'hidden'
   //      },
   //      gridList: {
   //        width: 500,
   //        height: 450,
   //      },
   //    });

      // state to store the info to use for searches
   const [listId, setListId] = useState(0);
   const [listName, setListName] = useState("");
   // state to store the data we get from the back end
   const [lists, setLists] = useState<any[]>([])
    
   // State to check if the API has errored
   const [error, setError] = useState(null);

   // State to check if the data has loaded
   const [loaded, setLoaded] = useState(false);

   // has the search button been clicked?
   const [click, setClick] = useState(false);

   useEffect(() => {
    console.log('showing all items');
    axios.get('http://localhost:8080/getAllLists')
    .then((res) => {
       console.log(res.data);
       setLists(res.data);
       setLoaded(true);
    }).catch((error) => {
       setError(error);
    }).then(() => {
       console.log('****** the returned data ******')
       console.log(lists);
    });

},[]);



if(error == true) {
    return (
       
       <div>
          <Button onClick={() => setClick(true)}>Show all</Button>
      <br></br>
      <Input 
id="itemId" 
defaultValue="Enter item id here"
type="number"
value={listId}
onChange={(e) => setListId(+e.target.value)}
/>
      {/* <Button onClick={searchById}>Search By Id</Button> */}
      <br></br>
      <Input 
id="itemId" 
defaultValue="Enter list name here"
type="text"
value={listName}
onChange={(e) => setListName(e.target.value)}
/>
      {/* <Button onClick={searchByList}>Search by list</Button> */}

    <Container>
          <h2> There is an error, please refresh the page </h2>
    </Container>
       </div>
     ) 
} else if (loaded) {
    return (
    <div>
      <Button onClick={() => setClick(true)}>Show all</Button>
      <br></br>
      <Input 
id="itemId" 
defaultValue="Enter item id here"
type="number"
value={listId}
onChange={(e) => setListId(+e.target.value)}
/>
      {/* <Button onClick={searchById}>Search By Id</Button> */}
      <br></br>
      <Input 
id="itemId" 
defaultValue="Enter list name here"
type="text"
value={listName}
onChange={(e) => setListName(e.target.value)}
/>
      {/* <Button onClick={searchByList}>Search by list</Button> */}
      <Container 
      id="grid"> 
         {lists.map((list) => {
          console.log(list) // just printing object object - so no 
          return <ListCard name={list.name} description={list.description} id={list.id} ></ListCard>
         })}     
    </Container>

    </div>
 );

} else {
 return (
    <div> The final else statement: Something bad has happened </div>

 )
};
};

export default ShowList;