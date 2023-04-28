import PropTypes from 'prop-types';

import { List, Item, IsOnline, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <IsOnline status={isOnline}></IsOnline>
            <img src={avatar} alt="User avatar" width="48" height="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      IsOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
