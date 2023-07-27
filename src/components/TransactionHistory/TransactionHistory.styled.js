import { styled, css } from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid black;
  text-align: center;
  text-transform: capitalize;
`;

export const ColumnName = styled.tr`
  text-transform: uppercase;
`;
export const ColumnText = styled.th`
  background-color: #00bcd5;
  color: #fff;
  padding: 10px 0;
  width: 200px;
`;

export const ItemId = styled.tr`
  border: 1px solid black;
  ${props =>
    props.odd &&
    css`
      background-color: #f2f2f2; /* Цвет фона для нечетных строк */
    `}
`;
export const TableCell = styled.td`
  padding: 10px 0;
`;
