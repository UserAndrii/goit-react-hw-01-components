import propTypes from 'prop-types';
import { Item, IsOnline, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <IsOnline status={isOnline}></IsOnline>
      <img src={avatar} alt="User avatar" width="48" height="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: propTypes.bool,
  avatar: propTypes.string,
  name: propTypes.string,
};
