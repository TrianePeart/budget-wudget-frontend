import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const NewTransaction = () =>{
    const API = process.env.REACT_APP_API_URL
    
    const navigate = useNavigate();

    const [transactions, setTransaction] = useState ({
        date:"",
        name:"",
        amount:"",
    })
    const handleChange = (event) => {
        setTransaction({...transactions, [event.target.id]:event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .post(`${API}/Transactions`, transactions)
            .then(() => navigate(`/Transactions`))
    };

    return(
       <div>
           <form onSubmit={handleSubmit}>
               <h1>New Transaction</h1>
               <label htmlFor="date">
                Date:
               </label>
               <input 
                id="date"
                value={transactions.date}
                type="text"
                onChange={handleChange}
                />
               <label htmlFor="source">Source:</label>
               <input
                id="source"
                value={transactions.source}
                type="text"
                onChange={handleChange}
                required
                />
               <label htmlFor="amount">Amount:</label>
               <input
                id="amount"
                value={transactions.amount}
                type="number"
                onChange={handleChange}
                required
                />
                <label htmlFor="from">From:</label>
                <input 
                id="from"
                value={transactions.from}
                type="text"
                onChange={handleChange}
                />
                <label htmlFor="category"><Category></Category>:</label>
                <input 
                id="category"
                value={transactions.category}
                type="text"
                onChange={handleChange}
                />
                <br/>
                <input type="submit"/>
           </form>
       </div>
    )
}


export default NewTransaction