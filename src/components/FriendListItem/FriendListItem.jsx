// import PropTypes from 'prop-types';
// import styles from './FriendListItem.module.css';

// export default function FriendListItem({ avatar, name, isOnline }) {
//   return (
//     <div>
//       <img src={avatar} alt="Avatar" width="48" className={styles.friendsImg} />
//       <p className={styles.friendName}>{name}</p>
//       <p
//         className={
//           (styles.friendStatus, isOnline ? styles.isOnline : styles.isOffline)
//         }
//       >
//         {isOnline ? 'Online' : 'Offline'}
//       </p>
//     </div>
//   );
// }

import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" className={styles.friendsImg} />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.isOnline : styles.isOffline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
