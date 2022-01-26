import axios from "axios";
import {useState, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL

const EditTransactions = () =>{
 //unsure if there was another way to do this. 
    let {id} = useParams();
    const navigate = useNavigate();

   const [transaction, setTransaction] = useState({
       source: "",
       amount: 0, 
       date: "",
   })

   const fetchTransaction = async () => {
    const response = await axios.get(`${API}/transactions/${id}`);
    setTransaction(response.data);
  };
    useEffect(() => {
    fetchTransaction();
  }, [API, id]);

    const handleChange = (event) => {
    setTransaction({...transaction, [event.target.id]:event.target.value});
}

    const handleSubmit = (event) =>{
    event.preventDefault();
    axios
    .put(`${API}/Transactions/${id}`, transaction)
    .then(() => navigate(`/Transactions/${id}`))
};

   
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="source">Source: </label>
            <input
              name="source"
              id="source"
              value={transaction.source}
              required
              onChange={handleChange}
              type="text"
            />
  
            <label htmlFor="date">Date: </label>
            <input
              name="date"
              id="date"
              value={transaction.date}
              required
              onChange={handleChange}
              type="text"
            />
  
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              name="amount"
              value={transaction.amount}
              onChange={handleChange}
              text="number"
            />
            <input type="submit"/>
          </form>
    )
}

export default EditTransactions