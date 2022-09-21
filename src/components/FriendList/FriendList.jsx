import PropTypes from 'prop-types';
import { Section, SectionTitle, Container } from '../Styled/Common.styled';
import {
  FriendsMap,
  FriendsItem,
  Status,
  Avatar,
  Name,
} from './FriendsList.styled';

export const FriendList = ({ title, friends }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Container>
        <FriendsMap>
          {friends.map(friend => (
            <FriendsItem key={friend.id}>
              <Status isOnline={friend.isOnline}></Status>
              <Avatar src={friend.avatar} alt="User avatar" width="48" />
              <Name>{friend.name}</Name>
            </FriendsItem>
          ))}
        </FriendsMap>
      </Container>
    </Section>
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
