import css from './TransactionHistoryItem.module.css';
export const TransactionsHistoryItem = ({ type, amount, currency, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? css.whiteBg : css.grayBg}`}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
