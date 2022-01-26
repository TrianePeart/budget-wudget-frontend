import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
   return(
       <nav>
           <Link to="/transactions">Previous Transactions</Link>
           <Link to="/transactions/new">New Transactions</Link>
       </nav>
   ) 
}

export default Nav;