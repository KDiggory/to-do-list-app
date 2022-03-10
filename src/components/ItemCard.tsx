import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


interface IAppProps {
    itemName: String,
    itemDescription: String,
    itemDate: String,
      id: Number,
      list_id: Number 


}

const ItemCard: React.FunctionComponent<IAppProps> = (props) => {

    const [idDel, setIdDel] = useState<Number>();
    const [idUpdate, setIdUpdate] = useState<Number>();
    const [deleted, setDeleted] = useState<boolean>(false);

// use effect so that when idDel state is set with the id, it will delete that id
    useEffect(() => {
        console.log('should get to here')
        axios.delete(`http://localhost:8080/deleteItems/${idDel}`)
        .then(() => {
          console.log('item deleted');
        })
        .catch(()=> {

        });
    },[idDel]);
    // would be good to get a re-render after deletion


   


        return (
            <Grid
             container
             justifyContent="center"
             alignItems="center"
             id="grid">
           
                 <Card sx={{ minWidth: 350 }}>
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
                <Typography >
                 <h5> List ID: cant get this working</h5> 
                </Typography>
                <Button variant="contained" size="small" onClick={() => setIdUpdate(props.id)} href="/update"> Update </Button>
                <Button variant="contained" color="error" size="small" onClick={() => setIdDel(props.id)}> Delete </Button>
                </CardContent>
                 </Card> 
                 </Grid>
            )
};

export default ItemCard;
