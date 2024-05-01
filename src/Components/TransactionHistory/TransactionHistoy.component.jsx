import { useSelector } from "react-redux";
import { GrTransaction } from "react-icons/gr";

import {
  TableCell,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableWrapper,
  TableRow,
  StyledTable,
} from "./TransactionHistory.styles";
import { selectCurrentUser } from "../Store/user/userSelector";
import { fetchTransactionHistory } from "../Utils/Firebase/firebase.utils";
import { useEffect, useState } from "react";

const TransactionHistoryTable = () => {
  const [transactions, setTransactions] = useState([])
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    fetchTransactionHistory(currentUser.uid)
      .then((transactions) => {
        setTransactions(transactions)
        console.log(transactions);
      })
      .catch((error) => {
        console.error(error);
      });
    const itemOccurrences = {};

    // Iterate over transactions to count occurrences and sum quantities
    if (transactions.purchasedItems) {
      transactions.forEach(transaction => {
        const { item, quantity } = transaction;
        if (item in itemOccurrences) {
          itemOccurrences[item].occurrences++;
          itemOccurrences[item].totalQuantity += quantity;
        } else {
          itemOccurrences[item] = { occurrences: 1, totalQuantity: quantity };
        }
      });

      // Filter items that appear more than once
      const repeatedItems = Object.entries(itemOccurrences)
        .filter(([item, { occurrences }]) => occurrences > 1)
        .map(([item, { totalQuantity }]) => ({ item, totalQuantity }));

      // Render the repeated items
      repeatedItems.forEach(({ item, totalQuantity }) => {
        console.log(`${item}: ${totalQuantity}`);
      });
    } else {
      console.log("Your transaction is not an array or you have not made a transaction before")
    }

  }, []);

  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Transaction Reference</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>₦{transaction.amount}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.email}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.tx_ref}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell style={{ padding: "50px" }} colSpan={12}>
                <div>
                  You have not made any transactions yet
                  <br />
                  <div>
                    <GrTransaction style={{ paddingTop: "15px", fontSize: "40px" }} />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TransactionHistoryTable;
