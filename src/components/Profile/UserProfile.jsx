import { Box } from 'components/Box/Box';
import styled from 'styled-components';
import { color, space, layout, flexbox, border } from 'styled-system';
import { theme } from 'theme';
import css from './UserProfile.module.css';

export const StatsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: ${props => props.theme.space[0]};
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  const userStats = Object.entries(stats);
  return (
    <Box
      bg={theme.colors.background}
      width={0.2}
      p={4}
      mx="auto"
      mt="20px"
      borderRadius={8}
    >
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <StatsList display="flex" justifyContent="center" alignItems="center">
        {userStats.map((stat, index) => (
          <li key={index} className={css.listItem}>
            <span className={css.label}>{stat[0]}</span>
            <span className={css.quantity}>{stat[1]}</span>
          </li>
        ))}
      </StatsList>
    </Box>
  );
};
