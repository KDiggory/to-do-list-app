import * as React from 'react';
import CreateList from './CreateList';
import { Button } from '@material-ui/core';
import UpdateList from './UpdateList';
import ShowList from './ShowList';
import Nav from './Nav';

interface IAppProps {
}

const Lists: React.FunctionComponent<IAppProps> = (props) => {

    const newlist = () => {
        window.location.href = '/createlist'
    }
    const updatelist = () => {
        window.location.href = '/updatelist'
    }
    const showlist = () => {
        window.location.href = '/showlist'
    }


  return (
      <div>
          <Nav>
          </Nav>
          <h1>
              <Button onClick={newlist} > Create List </Button>
              <Button onClick={updatelist}> Update List </Button>
              <Button onClick={showlist}> Show all Lists </Button>
              
          </h1>
      </div>
  );
};

export default Lists;
