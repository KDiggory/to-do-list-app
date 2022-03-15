import * as React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
    list_id: {
          name: String,
          description: String,
          id: Number
      }
}

const ItemCard: React.FunctionComponent<IAppProps> = (props) => {

    const [idDel, setIdDel] = useState<Number>();
    const [idUpdate, setIdUpdate] = useState<Number>();
    const [deleted, setDeleted] = useState<boolean>(false);
    const [idComplete, setIdComplete] = useState<Number>();

    const [itemName, setItemName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [date, setDate] = useState<String>("");
    // const [list_id, setListID] = useState<Number | undefined>();

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

    interface item {
        name: String,
        description: String,
        date: String,
        list_id: {
            name: String,
            description: String,
            id: Number
        }
    }


   const complete = () => {
       
        const item: item = {
            name: props.itemName,
            description: props.itemDescription,
            date: props.itemDate,
            list_id: {
                name: props.list_id.name,
                description: props.list_id.description,
                id: props.list_id.id
            }
            }
        console.log('adding to completed list')
        axios.post(`http://localhost:8080/addToComplete`, item)
        .then(() => {
          console.log('item marked as complete');
          setIdComplete(props.id);
          console.log(props);
          console.log(props.list_id.name);
        })
        .catch(()=> {
        });
    }

    useEffect(() => {
        axios.delete(`http://localhost:8080/deleteItems/${idComplete}`)
        .then(() => {
            console.log('item being deleted after adding to completed list')
        })
        .catch(()=> {

        });
    },[idComplete]);
   


        return (
                 <Card id="itemcard" sx={{ minWidth: 350 }} variant="outlined">
                 <CardContent>
                 <Typography variant="h5" component="div" id="cardTitle">
                 <h4> {props.itemName}  <Button id="inCard" variant="contained" size="small" onClick={() => complete()}> Mark as complete </Button> </h4> 
                </Typography>
                <Typography variant="h5" component="div" id="cardTitle">
                 <h5>  {props.itemDescription}</h5> 
                </Typography>
                <Typography id="cardTitle">
                    <div> <h5> Date due: {props.itemDate}</h5> 
                    <h5> ID: {props.id}</h5>  
                    <h5> List ID: {props.list_id.name}
                     </h5> 
                 </div>
                </Typography>
                <Button id="inCard" variant="contained" size="small" onClick={() => setIdUpdate(props.id)} href="/update"> Update </Button>
                <Button id="inCardDel" variant="contained" color="error" size="small" onClick={() => setIdDel(props.id)}> Delete </Button>
               
                </CardContent>
                 </Card>
                //  </Grid> 
                //  </Grid>

            )
};

export default ItemCard;
