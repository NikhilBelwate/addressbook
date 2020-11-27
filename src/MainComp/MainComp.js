import './MainComp.module.css';
import View from '../View/display';
import Add from '../Add/add';
import Update from '../Update/update';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function MainComp() {
  return (
    <div className="MainComp">
        <Router>
        <Route path = "/view" component = {View}></Route>
        <Route path = "/add" component = {Add}></Route>
        <Route path = "/update" component = {Update}>
         
      </Route>
   </Router>
    </div>
  );
}

export default MainComp;
