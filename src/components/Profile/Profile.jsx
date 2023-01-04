import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Username,
  Picture,
  Stats,
  StatsItem,
  Quantity,
} from '../Profile/Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Container>
      <Description>
        <Picture src={avatar} alt="User avatar" class="avatar" width="130" />
        <Username>{username}</Username>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <Stats class="stats">
        <StatsItem>
          <span class="label">Followers</span>
          <Quantity class="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span class="label">Views</span>
          <Quantity class="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span class="label">Likes</span>
          <Quantity class="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
