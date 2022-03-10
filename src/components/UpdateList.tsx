import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import axios from "axios"; 
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';

interface IAppProps {
}

const UpdateList: React.FunctionComponent<IAppProps> = (props) => {
    interface toUpdate {
        listId: Number,
        name: String,
        description: String
    }
  
     const [itemName, setItemName] = useState<String>("");
      const [description, setDescription] = useState<String>("");
      const [listId, setListId] = useState<Number>(0);
  
      const submit = () => {
        const toUpdate: toUpdate = {
            listId: listId,
            name: itemName,
            description: description
        };
     console.log(toUpdate);
      console.log("sending to back end - list update");
      axios.put(`http://localhost:8080/updateList/${listId}`, toUpdate ).then(() => {
           // handle success
         console.log("list item updated");
          })
          // handle error
          .catch((error: Error) => {
           console.log(error);
         });
     };
  
     const reset = () => {
         console.log('form reset, i dont actually do anything yet');
     }
  
    return (
        <div>
  
  <FormGroup>
    <InputLabel htmlFor="itemId">List ID</InputLabel>
    <Input 
    id="itemId" 
    type="number"
    value={listId}
    onChange={(e) => setListId(+e.target.value)} // this should make it a number for some reason, not sure why
    />
    <InputLabel htmlFor="itemName">Item name</InputLabel>
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
  </FormGroup>
  
      <Button color="primary" onClick={() => submit()} >Submit</Button>
      <Button color="primary" onClick={() => reset()}>Reset</Button>
        </div>
     );
  
  };

export default UpdateList;
