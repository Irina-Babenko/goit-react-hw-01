import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendsWraper}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={styles.friendsItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
