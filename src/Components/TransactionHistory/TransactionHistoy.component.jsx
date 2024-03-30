import { useSelector } from "react-redux";
import EmptyTransactions from "./EmptyTransactions";
import {
  TableCell,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableWrapper,
  TableRow,
  StyledTable,
} from "./TransactionHistory.styles";
import { randomTransactions } from "./transactions";
import { selectCurrentUser } from "../Store/user/userSelector";
import { fetchTransactionHistory } from "../Utils/Firebase/firebase.utils";
import { useEffect, useState } from "react";

const TransactionHistoryTable = () => {
  const [transactions, setTransactions] = useState([])
  const currentUser = useSelector(selectCurrentUser)

  // const transactions = [
  //   { item: 'apple', quantity: 2 },
  //   { item: 'banana', quantity: 3 },
  //   { item: 'apple', quantity: 1 },
  //   { item: 'orange', quantity: 2 },
  //   { item: 'banana', quantity: 2 },
  //   { item: 'apple', quantity: 4 }
  // ];

  // dummy code begin Headers
  // Sample transaction list

  // useEffect(() => {

  //   // Object to store item occurrences and total quantity
  //   const itemOccurrences = {};

  //   // Iterate over transactions to count occurrences and sum quantities
  //   transactions && transactions.purchasedItems.forEach(transaction => {
  //     const { item, quantity } = transaction;
  //     if (item in itemOccurrences) {
  //       itemOccurrences[item].occurrences++;
  //       itemOccurrences[item].totalQuantity += quantity;
  //     } else {
  //       itemOccurrences[item] = { occurrences: 1, totalQuantity: quantity };
  //     }
  //   });

  //   // Filter items that appear more than once
  //   const repeatedItems = Object.entries(itemOccurrences)
  //     .filter(([item, { occurrences }]) => occurrences > 1)
  //     .map(([item, { totalQuantity }]) => ({ item, totalQuantity }));

  //   // Render the repeated items
  //   repeatedItems.forEach(({ item, totalQuantity }) => {
  //     console.log(`${item}: ${totalQuantity}`);
  //   });

  // }, [])
  // and it ends right here baby





  const uID = currentUser ? currentUser.uid : ""

  const filteredTrans = transactions.filter((trans) => trans.purchasedItems)
  console.log(filteredTrans)


  useEffect(() => {
    fetchTransactionHistory(uID)
      .then((transactions) => {
        setTransactions(transactions)
        console.log(transactions.map((item) => item));
      })
      .catch((error) => {
        console.error(error);
      });
    const itemOccurrences = {};

    // Iterate over transactions to count occurrences and sum quantities
    if (transactions.purchasedItems) {
      filteredTrans.forEach(transaction => {
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
              <EmptyTransactions />
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TransactionHistoryTable;
