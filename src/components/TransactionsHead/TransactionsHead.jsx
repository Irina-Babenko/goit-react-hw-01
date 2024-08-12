import PropTypes from 'prop-types';
import styles from './TransactionsHead.module.css';

export default function TransactionsHead() {
  return (
    <>
      <th className={styles.lableHead}>Type</th>
      <th className={styles.lableHead}>Amount</th>
      <th className={styles.lableHead}>Currency</th>
    </>
  );
}
