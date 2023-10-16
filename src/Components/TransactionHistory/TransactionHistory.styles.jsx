import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #333;
  color: white;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export const TableRow = styled.tr`
  border: 1px solid #ddd;
  text-align: center;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 10px;
`;
