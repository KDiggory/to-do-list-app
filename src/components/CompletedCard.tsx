import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Grid,
    CardHeader
} from '@material-ui/core/'
import '../CSS/ListCardStyle.css';
import { useEffect, useState } from "react";
import axios from "axios";

interface IAppProps {
    itemName: String,
    itemDescription: String,
    itemDate: String,
    id: Number
    list_id: {
     id: Number | undefined
 }
}

const CompletedCard: React.FunctionComponent<IAppProps> = (props) => {


const [idDel, setIdDel] = useState<Number>();

const [restore, setRestore] = useState<boolean>(false);

useEffect(() => {
    console.log('should get to here')
    axios.delete(`http://localhost:8080/removeFromComplete/${idDel}`)
    .then(() => {
      console.log('item deleted');
    })
    .catch(()=> {

    });
},[idDel]);

useEffect(() => {
  console.log('restoring item to list')
  axios.delete(`http://localhost:8080/removeFromComplete/${idDel}`)
  .then(() => {
    console.log('item deleted');
    readToComplete()
  })
  .catch(()=> {
    
  });
},[restore]);

interface newItem {
  name: String,
  description: String,
  date: String, 
  list_id: {
    id: Number | undefined
  } 
}
const readToComplete = () => {
  const newItem: newItem = {
    name: props.itemName,
    description: props.itemDescription,
    date: props.itemDate,
    list_id: props.list_id
}

  axios.post('http://localhost:8080/createItems', newItem )
  .then((res) => {
    // handle success
  console.log("list item created");
   })
   // handle error
   .catch((error: Error) => {
    console.log(error);
  })
};


  return (
    <Grid
    container
    justifyContent="center"
    alignItems="center"
    id="grid">
        <Card id="itemcard" sx={{ minWidth: 350 }} >
        <CardContent>
        <Typography variant="h5" component="div">
        <h3> {props.itemName}</h3> 
       </Typography>  
       <Typography variant="h5" component="div">
        <h5> {props.itemDescription}</h5> 
       </Typography>
       <Typography >
        <h5> Date due: {props.itemDate}</h5> 
       </Typography>
       <Typography >
        <h5> ID: {props.id}</h5> 
       </Typography>
       {/* <Typography >
        <h5> List ID: 
            </h5> 
       </Typography> */}
       <Button id="inCardDel" variant="contained" color="error" size="small" onClick={() => setIdDel(props.id)}> Delete </Button>
       <Button id="inCard" variant="contained"  size="small" onClick={() => setRestore(true)}> Restore </Button>
       </CardContent>
        </Card> 
        </Grid>
   )
      }


export default CompletedCard;
