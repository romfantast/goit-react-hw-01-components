import PropTypes from 'prop-types';
import {
  Box,
  Wrapper,
  Image,
  Paragraph,
  UserStatsItem,
  Text,
  StatsList,
} from 'styledComponents/styledComponents.styled';
import { makeFirstLetterToUpperCase } from 'components/TransactionsHistoryItem/makeFirstLetterToUpperCase';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  const userStats = Object.entries(stats);
  return (
    <Box>
      <Wrapper m={4}>
        <Image src={avatar} alt="User avatar" width={150} mx="auto" />
        <Paragraph>{username}</Paragraph>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </Wrapper>

      <StatsList display="flex" justifyContent="center" alignItems="center">
        {userStats.map(stat => (
          <UserStatsItem key={stat[1]}>
            <Text fontWeight="bold">{makeFirstLetterToUpperCase(stat[0])}</Text>
            <Text>{stat[1]}</Text>
          </UserStatsItem>
        ))}
      </StatsList>
    </Box>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
