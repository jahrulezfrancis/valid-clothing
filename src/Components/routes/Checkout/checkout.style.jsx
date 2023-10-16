import { styled } from "styled-components";


export const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background-color: #f2f2f2;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  max-width: 100%;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const QuantityButton = styled.span`
  cursor: pointer;
  width: 25px;
  margin: auto 0px auto 0px;
  padding: 3px;
`;

export const QuantityLabel = styled.span`
  display: flex;
  margin: 0px 10px;
`;

export const RemoveButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
