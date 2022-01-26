import Transaction from "./Transaction.js";
import axios from "axios";
import {useEffect, useState} from "react";
const Transactions = () =>{
    const [transaction, setTransaction] = useState({})

    const API = process.env.REACT_APP_API_URL
    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then((response) => setTransaction(response.data));
    }, []);

    return(
        <div>
            <section>
                <table>
                    <thread>
                    <tr className="transaction">
                        <th>Date</th>
                        <th className="names">Name</th>
                        <th>Amount</th>
                    </tr>
                    </thread>
                        <tbody>
                    {transaction.map((transaction, id) => {
                        return <Transaction key={id} transaction={transaction} index={id} />;
                    })}
                         </tbody>
                 </table>
             </section>
    </div>
    )
}


//This will be my index section

export default Transactions; 