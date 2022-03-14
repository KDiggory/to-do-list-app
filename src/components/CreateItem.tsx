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
import { setConstantValue } from 'typescript';
import Nav from './Nav';
import Modal from '@mui/material/Modal';
import Success from './Success';
import Warning from './Warning';
import { Container } from '@material-ui/core';
import ItemCard from './ItemCard';
import NavList from './NavList';
import NavItem from './NavItem';


interface IAppProps {
}

const CreateItem : React.FunctionComponent<IAppProps> = () => {
   
    const [itemName, setItemName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [date, setDate] = useState<String>("");
    const [list_id, setListID] = useState<Number | undefined>();
    
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
    const [showWarningModal, setShowWarningModal] = useState<boolean>(false)

    const [idDel, setIdDel] = useState<Number>(0);
      // state to store the data we get from the back end
   const [items, setItems] = useState<any[]>([])
    
   // State to check if the API has errored
   const [error, setError] = useState(null);

   // State to check if the data has loaded
   const [loaded, setLoaded] = useState(false);

   

    interface newItem {
        name: String,
        description: String,
        date: String, 
        list_id: {
          id: Number | undefined
        } 
    }

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

  useEffect(() => {
    // make the delete button work - this works but need to reselect show all
    axios.delete(`http://localhost:8080/deleteItems/${idDel}`)
    .then(() => {
        console.log('list item deleted')
    }).catch((error) => {
     
    }).then(() => {
        // how to re-render the cards after deletion?
      // setReload(true); 
    });
},[idDel]);

    const submit = () => {
       const newItem: newItem = {
           name: itemName,
           description: description,
           date: date,
           list_id: {
             id: list_id
           } 
       };
     console.log(newItem);
     console.log("sending to back end");
     axios.post('http://localhost:8080/createItems', newItem )
     .then((res) => {
          // handle success
        console.log("list item created");
        if (res.status === 201) {
          setShowSuccessModal(true)
        } else {
          setShowWarningModal(true)
        }
         })
         // handle error
         .catch((error: Error) => {
          console.log(error);
        })
        resetForm(); 
    };
     useEffect(() => {
    // make the delete button work - this works but need to reselect show all
    axios.delete(`http://localhost:8080/deleteItems/${idDel}`)
    .then(() => {
        console.log('list item deleted')
    }).catch((error) => {
     
    }).then(() => {
        // how to re-render the cards after deletion?
      // setReload(true); 
    });
},[idDel]);


    const resetForm = () => {
      console.log('clearing the fields')
        setItemName("");
        setDescription("");
        setDate("");
        setListID(0);
        setShowWarningModal(false);
        setShowSuccessModal(false);
    }
    
  
  
      return (
        <div>

         <Nav>
          </Nav>
        <NavItem></NavItem>
          <FormGroup  id="form">
  <InputLabel htmlFor="itemName">Name</InputLabel>
  <Input 
  id="itemName" 
  type="text"
  value={itemName}
  onChange={(e) => setItemName(e.target.value)}
  />
  <InputLabel htmlFor="itemDescription">Description</InputLabel>
  <Input 
  id="itemDescription"
  type="text"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  />
  <InputLabel htmlFor="itemDescription">List</InputLabel>
  <Input 
  id="list"
  type="number"
  value={list_id}
  onChange={(e) => setListID(+e.target.value)}
  />
  <TextField
    id="date"
    label="Date due"
    type="date"
    defaultValue="2017-05-24"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
  />
</FormGroup>

    <Button id="submitandreset" variant="contained" color="primary" onClick={() => submit()} >Submit</Button>
    <Button id="submitandreset" variant="contained" color="primary" onClick={() => resetForm()}>Reset</Button>
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
    }


export default CreateItem;
