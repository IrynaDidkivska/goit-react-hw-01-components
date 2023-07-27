import React from 'react';
import PropTypes from 'prop-types';
import {
  ColumnName,
  TableCell,
  ColumnText,
  ItemId,
  Table,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <ColumnName>
          <ColumnText>Type</ColumnText>
          <ColumnText>Amount</ColumnText>
          <ColumnText>Currency</ColumnText>
        </ColumnName>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <ItemId key={item.id} odd={index % 2 === 0}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.currency}</TableCell>
          </ItemId>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
