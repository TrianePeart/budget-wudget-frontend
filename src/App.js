import {Routes, Route} from "react-router-dom";
import axios from "axios"; 
import { useState, useEffect } from "react";


import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Edit from "./components/EditTransactions";
import NewTransaction from "./components/NewTransaction";
import Display from "./components/DisplayTransaction"
import Transactions from "./components/Transactions"

const API = process.env.REACT_APP_API_URL

const App = () =>{

  const [_, setTransaction] = useState([]);

  const newTransaction = async(nT) => {
    let response = await axios.post(`${API}/transactions`, nT);
    setTransaction((pT) => [...pT, response.data])

  };

  //Same as captain this is pulling data for a new transaction 
  const fetchTransaction = async () => {
    const response = await axios.get(`${API}/transactions`);
    setTransaction(response.data);
  };

  //Standard fetch
  useEffect(()=> {
    fetchTransaction();
  }, []);
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="transactions/:id"
      element={<Display/>}/>
      <Route exact path="transactions/new" element={<NewTransaction/>}/>
      <Route exact path="transactions/:id/edit" element={<Edit/>}/>
      <Route path="*"></Route>
      </Routes>
    </div>
  )
}

//If finished early make a real 404 path
//Might need to import css
//Make a 404 page
export default App;
