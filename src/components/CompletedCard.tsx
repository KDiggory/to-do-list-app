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
  //   list_id: {
  //     name: String,
  //     description: String,
  //     id: Number
  // }
}

const CompletedCard: React.FunctionComponent<IAppProps> = (props) => {

const [idDel, setIdDel] = useState<Number>();

useEffect(() => {
    console.log('should get to here')
    axios.delete(`http://localhost:8080/removeFromComplete/${idDel}`)
    .then(() => {
      console.log('item deleted');
    })
    .catch(()=> {

    });
},[idDel]);

  return (
    <Grid
    container
    justifyContent="center"
    alignItems="center"
    id="grid">
  
        <Card id="itemcard" sx={{ minWidth: 350 }}>
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
       </CardContent>
        </Card> 
        </Grid>
   )
};

export default CompletedCard;
