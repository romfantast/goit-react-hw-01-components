import PropTypes from 'prop-types';
import {
  Friend,
  UserStatusIndicator,
  Image,
  Paragraph,
} from 'components/styledComponents/styledComponents.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <UserStatusIndicator isOnline={isOnline}></UserStatusIndicator>
      <Image src={avatar} alt="User avatar" width="60" />
      <Paragraph>{name}</Paragraph>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
