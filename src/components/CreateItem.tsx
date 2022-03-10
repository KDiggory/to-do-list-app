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


interface IAppProps {
}

const CreateItem : React.FunctionComponent<IAppProps> = () => {
   
    const [itemName, setItemName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
    const [date, setDate] = useState<String>("");
    const [list_id, setListID] = useState<Number | undefined>();
    
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
    const [showWarningModal, setShowWarningModal] = useState<boolean>(false)

    interface newItem {
        name: String,
        description: String,
        date: String, 
        list_id: {
          id: Number | undefined
        } 
    }

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


    const resetForm = () => {
      console.log('clearing the fields')
        setItemName("");
        setDescription("");
        setDate("");
        setListID(0);
        setShowWarningModal(false);
        setShowSuccessModal(false);
    }
    
  
    if (showSuccessModal === true) {
      return ( 
       
        <div>
       <Success/>
       <h1> success modal</h1>
         <Nav>
          </Nav>
          <FormGroup>
              <h2> Showing the Items page </h2>
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

    <Button color="primary" onClick={() => submit()} >Submit</Button>
    <Button color="primary" onClick={() => resetForm()}>Reset</Button>
    </div>
      ) } else if (showWarningModal === true ) {
        return (
          <div>
            <h1> warning modal</h1>
            <Warning/>
         <Nav>
          </Nav>
          <FormGroup>
              <h2> Showing the Items page </h2>
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

    <Button color="primary" onClick={() => submit()} >Submit</Button>
    <Button color="primary" onClick={() => resetForm()}>Reset</Button>
    </div>
        )
      } else {
        return (
              <div>
                <h1> no modal</h1>
                <Warning/>
             <Nav>
              </Nav>
              <FormGroup>
                  <h2> Showing the Items page </h2>
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
    
        <Button color="primary" onClick={() => submit()} >Submit</Button>
        <Button color="primary" onClick={() => resetForm()}>Reset</Button>
        </div>
        )
      }
    }


export default CreateItem;
