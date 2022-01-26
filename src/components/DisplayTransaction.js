import axios from "axios";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const DisplayTransaction= () =>{
  const API = process.env.REACT_APP_API_URL
  const navigate = useNavigate()
  const {id} = useParams()
  const [transaction, setTransaction] = useState([])

  useEffect(() => {
      axios
          .get(`${API}/transactions/${id}`)
          .then((response) => {
              setTransaction(response.data)
          })
  }, [API, id])

  const handleDelete = () => {
      axios
          .delete(`${API}/transactions/${id}`)
          .then(() => {
              navigate("/transactions")
          })
  }

  return (
      <div className="ShowTransaction">
          <article>
              <h1>{transaction.date}</h1>
              <h2>{transaction.from}</h2>
              <h2>${transaction.amount}</h2>
              <h2>{transaction.category}</h2>
              <h2>{transaction.source}</h2>
          </article>
          <aside>
              <Link to={"/transactions"}><button>Back</button></Link>
              <Link to={`/transactions/${id}/edit`}><button>Edit</button></Link>
              <button onClick={handleDelete}>Delete</button>
          </aside>
      </div>
  )
}
// This is a show page to Get an individual view (show one transactions)

export default DisplayTransaction