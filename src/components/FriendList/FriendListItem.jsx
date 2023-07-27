import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendList.styled';

export const FriendListItem = friend => {
  const { avatar, name, isOnline } = friend.friend;
  return (
    <>
      <Status $online={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
