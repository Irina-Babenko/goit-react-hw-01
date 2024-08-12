import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import TransactionsHead from '../TransactionsHead/TransactionsHead';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionsLable}>
      <thead className={styles.lableHead}>
        <tr>
          <TransactionsHead />
        </tr>
      </thead>

      <tbody className={styles.lableBody}>
        {items.map(item => {
          return (
            <tr key={item.id} className={styles.lableBodyRow}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
