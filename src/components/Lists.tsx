import * as React from 'react';
import CreateList from './CreateList';
import { Button } from '@material-ui/core';
import UpdateList from './UpdateList';
import ShowList from './ShowList';
import Nav from './Nav';
import NavList from './NavList';
import { useEffect, useState } from "react";

interface IAppProps {
}

const Lists: React.FunctionComponent<IAppProps> = (props) => {

    const [page, setPage] = useState<boolean> (false);

    const newlist = () => {
        window.location.href = '/createlist'
    }
    const updatelist = () => {
        window.location.href = '/updatelist'
    }
    const showlist = () => {
        window.location.href = '/showlist'
    }

    useEffect (() => {
        console.log('going to see all')
        window.location.href = '/showlist'
  
      }, [page]);
  
      useEffect (() => {
         console.log('changing set page')
         setPage(true)
        },[]);

  return (
      <div>
          <Nav>
          </Nav>
          <NavList></NavList>
          <h1>
              
          </h1>
      </div>
  );
};

export default Lists;
