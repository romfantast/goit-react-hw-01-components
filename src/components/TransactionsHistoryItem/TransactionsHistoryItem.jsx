import PropTypes from 'prop-types';
import {
  TableData,
  TableRow,
} from 'components/TransactionHistory/TransactionHistory.styled';
import { makeFirstLetterToUpperCase } from './makeFirstLetterToUpperCase';

export const TransactionsHistoryItem = ({ type, amount, currency, index }) => {
  return (
    <TableRow index={index}>
      <TableData>{makeFirstLetterToUpperCase(type)}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

TransactionsHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
