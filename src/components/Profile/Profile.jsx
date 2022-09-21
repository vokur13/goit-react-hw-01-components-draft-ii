import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { iconSize } from 'constants';
import { Section, Container } from '../Styled/Common.styled';
import {
  ProfileWrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = FaUserAlt,
  stats,
}) => {
  return (
    <Section>
      <ProfileWrapper>
        <Container>
          <Description>
            <Avatar src={avatar ?? FaUserAlt} alt="User avatar" />
            <Name>{username}</Name>
            <Tag>{'@' + tag}</Tag>
            <Location>
              <FaMapMarkerAlt size={iconSize.s} />
              {location}
            </Location>
          </Description>
          <StatsList>
            <StatsItem>
              <StatsLabel>Followers</StatsLabel>
              <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
              <StatsLabel>Views</StatsLabel>
              <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
              <StatsLabel>Likes</StatsLabel>
              <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItem>
          </StatsList>
        </Container>
      </ProfileWrapper>
    </Section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
