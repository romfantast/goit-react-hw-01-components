import PropTypes from 'prop-types';
import {
  Friend,
  Indicator,
  Image,
  Paragraph,
} from 'styledComponents/styledComponents.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Indicator isOnline={isOnline}></Indicator>
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
