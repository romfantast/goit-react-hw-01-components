import { Box } from 'components/Box/Box';
import { StatsList } from 'components/Profile/UserProfile';
import css from './Statistics.module.css';
import { color } from 'styled-system';

import styled from 'styled-components';
const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

const StatsItem = styled.li`
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  ${color}
`;

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section">
      {title && <h2 className={css.title}>{title}</h2>}

      <StatsList
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {stats.map(stat => (
          <StatsItem
            className={css.item}
            key={stat.id}
            backgroundColor={randomColor()}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Box>
  );
};
