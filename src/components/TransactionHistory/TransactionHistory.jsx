import { Box } from 'components/Box/Box';
import { TransactionsHistoryItem } from 'components/TransactionsHistoryItem/TransactionsHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box as="table">
      <thead className={css.tableHead}>
        <tr className={css.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionsHistoryItem
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            key={transaction.id}
            index={index}
          />
        ))}
      </tbody>
    </Box>
  );
};
