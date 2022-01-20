import {useState, useEffect} from "react";
import {Routes,Route} from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from ".components/Home";
import Edit from "./components/Edit";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions"; 

const API = process.env.REACT_APP_API_URL

const App = () =>{

  
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="transactions" element={<Transactions/>}/>
      <Route exact path="transactions/:id"
      element={<Display/>}/>
      <Route exact path="transactions/new" element={<NewTransaction/>}/>
      <Route exact path="transactions/:id/edit" element={<Edit/>}/>
      <Route path="*"></Route>
      </Routes>
    </div>
  )
}

export default App;
