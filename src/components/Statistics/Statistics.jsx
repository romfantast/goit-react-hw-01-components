import PropTypes from 'prop-types';
import { randomColor } from './randomColor';
import {
  Box,
  Text,
  Heading,
  StatsList,
  StatsItem,
} from 'components/styledComponents/styledComponents.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box as="section">
      {title && <Heading height={70}>{title}</Heading>}

      <StatsList
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {stats.map(stat => (
          <StatsItem key={stat.id} backgroundColor={randomColor()}>
            <Text>{stat.label}</Text>
            <Text>{stat.percentage}%</Text>
          </StatsItem>
        ))}
      </StatsList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
