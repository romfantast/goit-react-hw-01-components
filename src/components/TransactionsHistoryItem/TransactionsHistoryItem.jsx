import css from './TransactionHistoryItem.module.css';

export const TransactionsHistoryItem = ({ type, amount, currency, index }) => {
  return (
    <tr className={`${index % 2 === 0 ? css.whiteBg : css.grayBg}`}>
      <td>{upperFirstLetter(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

function upperFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
