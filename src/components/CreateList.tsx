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

interface IAppProps {
}

const CreateList: React.FunctionComponent<IAppProps> = (props) => {

    interface newList {
        name: String,
        description: String
    }

    const submit = () => {
        const newList: newList = {
            name: listName,
            description: description
            
        };
     console.log(newList);
      console.log("sending to back end");
      axios.post('http://localhost:8080/createList', newList).then(() => {
           // handle success
         console.log("list item created");
          })
          // handle error
          .catch((error: Error) => {
           console.log(error);
         });
     };
 
     const reset = () => {
         console.log('form reset, i dont actually do anything yet');
     }

    const [listName, setListName] = useState<String>("");
    const [description, setDescription] = useState<String>("");
  return (
      <div>
          <FormGroup>
              <h2> Showing the list page </h2>
  <InputLabel htmlFor="itemName">List name</InputLabel>
  <Input 
  id="itemName" 
  defaultValue="Enter the item name here"
  type="text"
  value={listName}
  onChange={(e) => setListName(e.target.value)}
  />
  <InputLabel htmlFor="itemDescription">List description</InputLabel>
  <Input 
  id="itemDescription"
  defaultValue="Enter a description here"
  type="text"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  />
</FormGroup>

    <Button color="primary" onClick={() => submit()} >Submit</Button>
    <Button color="primary" onClick={() => reset()}>Reset</Button>
      </div>
  ) ;
};

export default CreateList;
