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



interface IAppProps {
      name: String,
      description: String,
      id: Number 
}

const ListCard: React.FunctionComponent<IAppProps> = (props) => {


    const [idUpdate, setIdUpdate] = useState<Number>(0);
    const [idDel, setIdDel] = useState<Number>(0);

    const [updateItem, setUpdateItem] = useState({});

    const [name, setName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [items, setItems] = useState<any[]>([])
    const [reload, setReload] = useState(false);
    const [listId, setListId] = useState<Number>()

  useEffect(() => {
    // make the delete button work - this works but need to reselect show all
    axios.delete(`http://localhost:8080/deleteItems/${idDel}`)
    .then(() => {
        console.log('list item deleted')
    }).catch((error) => {
     
    }).then(() => {
        // how to re-render the cards after deletion?
      setReload(true); 
    });
},[idDel]);

useEffect(() => {
    console.log('getting rest of list, i dont work yet :(')
    axios.get(`http://localhost:8080/getByList/${listId}`)
    .then(() => {
    }).catch((error) => {
        console.log(error)
    }).then(()=> {
        
    })
},[listId]);


// THIS DOESNT WORK - does it need to be in the parent class??
// useEffect(() => {
//     console.log('showing all items - after one has been deleted');
//     axios.get('http://localhost:8080/getAll')
//     .then((res) => {
//        console.log(res.data);
//        setItems(res.data);
//     }).catch((error) => {
//     }).then(() => {
//        console.log('****** the returned data ******')
//        console.log(items);
//     });

// },[reload]);

        return (

            <Grid
            container
            justifyContent="center"
            alignItems="center"
            id="grid">
            <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ minWidth: 350 }}
            variant="outlined"
            id="itemcard">
                <CardContent>
                <Typography variant="h5" component="div" >
                <h3> {props.name}</h3> 
                </Typography>
                <Typography variant="body2">
                <h5> {props.description}</h5>
                </Typography>
                <Typography>
                <h5> List ID: {props.id} </h5>
                </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" size="small" onClick={() =>setListId(props.id)}> Items on this list </Button>  
                <Button variant="contained" size="small" onClick={() => setIdUpdate(props.id)} href="/update"> Update </Button>
                {/* href="#outlined-buttons" - if cant get the update bars next to words */}
                <Button variant="contained" color="error" size="small" onClick={() => setIdDel(props.id)}> Delete </Button>
                </CardActions>    
                </Card>
                </Grid>
            </Grid>

        )
};

export default ListCard;
