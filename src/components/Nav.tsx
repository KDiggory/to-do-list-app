import * as React from 'react';
import { Button } from '@material-ui/core';
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react'

import Joyride from 'react-joyride';
import { setConstantValue } from 'typescript';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface IAppProps {
}

const Nav: React.FunctionComponent<IAppProps> = (props, state) => {

    const [run, setRun] = useState<boolean>(false);

    // trying react joyride
     state = {
        run: run,
          steps: [
              {
                  target: '#mainNavhomepage',
                  content: 'This button brings you back here'
              },
              {
                target: '#mainNavitems',
                content: 'This is a button ito take you to the items'
            },
            {
                target: '#mainNavlists',
                content: 'This is the button to take you to the lists'
            },

          ]
      }
      

    const toItem = () => {
        window.location.href = '/item'
    }
    const toList = () => {
        window.location.href = '/list'
    }
    const homePage = () => {
        window.location.href = '/'
    }


  return (
      <div id="navbar">
          <Joyride 
          // this sets the steps for each it to run through
          steps = {state.steps}
          // this sets it as running
          run={run}
          // this means it goes from one to the next
          continuous={true}
            // this is how they look
          styles={{
              options:{
                  arrowColor: '#caddde',
                  backgroundColor: '#caddde',
                  primaryColor: '#79b9bd',
                  width: 900,
                  zIndex:1000,
              }
          }}/>
          <Button  id="mainNavhomepage" variant="contained" size="small" onClick={homePage} >Home page</Button>
          <Button  id="mainNavitems" variant="contained" size="small" onClick={toItem} >Items</Button>
          <Button  id="mainNavlists"  variant="contained" size="small" onClick={toList} >Lists</Button>
          <Button id="help" size="small" onClick={()=> setRun(!run)} ><HelpOutlineIcon/> </Button>

      </div>
   );

  }
          
        


export default Nav;
