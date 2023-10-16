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

const TransactionHistoryTable = () => {
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
          {randomTransactions.length > 0 ? (
            randomTransactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>₦{transaction.amount}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.email}</TableCell>
                <TableCell>Successful</TableCell>
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
