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
