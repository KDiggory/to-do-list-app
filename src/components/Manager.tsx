import MainPage from "./MainPage";
import CreateItem from './CreateItem';
import CreateList from './CreateList';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Items from './Items';
import Lists from './Lists';

import UpdateItem from './UpdateItem';
import UpdateList from './UpdateList';
import ShowList from './ShowList';
import '../CSS/main.css';
import SeeAll from './SeeAll';
import SeeAllCompleted from './SeeAllCompleted'

const Manager = () => {
    return ( 
        <div>
            <BrowserRouter>
        <Routes>
            
        <Route  path="/" element={<MainPage />}></Route>
            <Route  path="/item" element={<Items />}></Route>
            <Route  path="/list" element={<Lists />}></Route>
            <Route  path="/newitem" element={<CreateItem />}></Route>
            <Route  path="/update" element={<UpdateItem />}></Route>
            <Route  path="/createlist" element={<CreateList />}></Route>
            <Route  path="/updatelist" element={<UpdateList />}></Route>
            <Route  path="/showlist" element={<ShowList />}></Route>
            <Route  path="/seeAll" element={<SeeAll />}></Route>
            <Route  path="/seeAllCompleted" element={<SeeAllCompleted />}></Route>

        </Routes>
        </BrowserRouter>
            
        </div>
     );
}
 
export default Manager;