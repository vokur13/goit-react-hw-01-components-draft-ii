import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ title, friends }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <span className={css.status}>{friend.isOnline}</span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
