import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div>
          <img
            src={image}
            alt={name}
            width="260"
            className={styles.avatarWrap}
          />
        </div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{name}</p>
          <p className={styles.userTeg}>@{tag}</p>
          <p className={styles.userLocatin}>{location}</p>
        </div>
      </div>

      <ul className={styles.userList}>
        <li className={styles.userItem}>
          <span className={styles.userTitle}>Followers</span>
          <span className={styles.titleInfo}>
            <b>{followers}</b>
          </span>
        </li>
        <li className={styles.userItem}>
          <span className={styles.userTitle}>Views</span>
          <span className={styles.titleInfo}>
            <b>{views}</b>
          </span>
        </li>
        <li className={styles.userItem}>
          <span className={styles.userTitle}>Likes</span>
          <span className={styles.titleInfo}>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
