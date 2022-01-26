import {Link} from "react-router-dom";

const Transaction = ({transaction, id}) => {
  return (
    <tr className="SingleTransaction">
    <td>{transaction.date}</td>
    <td>{transaction.source}</td>
    <td>
        <Link to={`/transactions/${id}`}>
            {transaction.amount}
        </Link>
    </td>
</tr>
  );
};

//source might have to be name. Was name in captains log

export default Transaction;