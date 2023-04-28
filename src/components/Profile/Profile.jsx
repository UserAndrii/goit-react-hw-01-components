import PropTypes from 'prop-types';

import {
  Avatar,
  Name,
  Wrapper,
  Tag,
  Description,
  Stats,
  Item,
  Label,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="202" height="212" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </Item>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
