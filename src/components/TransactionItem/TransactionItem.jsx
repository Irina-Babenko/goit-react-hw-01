import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td className={styles.lableData}>{type}</td>
      <td className={styles.lableData}>{amount}</td>
      <td className={styles.lableData}>{currency}</td>
    </>
  );
}
