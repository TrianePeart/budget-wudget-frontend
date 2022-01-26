import Transaction from "../components/Transaction";
import axios from "axios";
import {useEffect, useState} from "react";

const Transactions = () =>{
 
    const [transactions, setTransaction] = useState({})

    const API = process.env.REACT_APP_API_URL

    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then((response) => setTransaction(response.data));
    }, [API]);

    const totalAmounts = transactions.map((props) => props.amount);
    let total = totalAmounts.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );

    return(
        <div className="Transactions">
            <header>
                <div className="Allowance">
                {"I'ma tip myself: $" + 
                    transactions.reduce((previousValue, currentValue) => previousValue + currentValue.amount,
                    0)
                }
                </div>
                <div className="Bills">
                    {"Spent on Bills: $" + total}
                </div>
            </header>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, id) => {
                            return <Transaction key={id} transaction={transaction} index={id} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}


//This will be my index section

export default Transactions; 