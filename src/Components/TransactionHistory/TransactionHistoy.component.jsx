import { TableCell, TableBody, TableHead, TableHeaderCell, TableWrapper, TableRow, StyledTable} from "./TransactionHistory.styles";


const TransactionHistoryTable = ({ transactions }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeaderCell>tx_ref</TableHeaderCell>
            <TableHeaderCell>amount</TableHeaderCell>
            <TableHeaderCell>currency</TableHeaderCell>
            <TableHeaderCell>email</TableHeaderCell>
            <TableHeaderCell>phone_number</TableHeaderCell>
            <TableHeaderCell>name</TableHeaderCell>
          </tr>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell>{transaction.email}</TableCell>
              <TableCell>{transaction.tx_ref}</TableCell>
              {/* <TableCell>{transaction.phone_number}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TransactionHistoryTable;
