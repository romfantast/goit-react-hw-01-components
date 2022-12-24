import PropTypes from 'prop-types';
import { TransactionsHistoryItem } from 'components/TransactionsHistoryItem/TransactionsHistoryItem';
import { Box } from 'styledComponents/styledComponents.styled';
import {
  TableBody,
  TableHead,
  TableHeaders,
  TableHeadersRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box>
      <Box as="table" table="table">
        <TableHead>
          <TableHeadersRow>
            <TableHeaders>Type</TableHeaders>
            <TableHeaders>Amount</TableHeaders>
            <TableHeaders>Currency</TableHeaders>
          </TableHeadersRow>
        </TableHead>

        <TableBody>
          {transactions.map((transaction, index) => (
            <TransactionsHistoryItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              key={transaction.id}
              index={index}
            />
          ))}
        </TableBody>
      </Box>
    </Box>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
