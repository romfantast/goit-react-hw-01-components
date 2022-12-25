import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  flexbox,
  typography,
  space,
  layout,
  color,
  border,
  borderRadius,
} from 'styled-system';

// ========== BOX ========== //
const Box = styled.div`
  width: 30%;
  list-style: none;
  padding: ${props => `${props.theme.space[4]}px`};
  border-radius: ${props =>
    props.table ? `${props.theme.space[2]}px` : `${props.theme.space[3]}px`};
  margin: ${props =>
    props.table
      ? `${props.theme.space[0]}px auto`
      : `${props.theme.space[4]}px auto`};
  background-color: #cccbcb;
  border-collapse: collapse;
  width: ${props => (props.table ? '100%' : '30%')};
  overflow: hidden;
  ${color}, ${space}, ${layout}, ${border}, ${borderRadius};
`;

// ========== UserProfile ========== //
const Wrapper = styled.div`
  ${space}
`;
const Image = styled.img`
  ${space}
`;
const Paragraph = styled.p`
  text-align: center;
  margin: ${props => props.theme.space[3] + 'px'};
`;
const UserStatsItem = styled.li`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${props => props.theme.space[2] + 'px'};
  ${flexbox}
`;
const Text = styled.span`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.m};
  ${typography}
`;
// ========== Statistics ========== //
const Heading = styled.h2`
  display: grid;
  place-items: center;
  border-radius: ${props => props.theme.space[2] + 'px'};
  background-color: white;
  ${layout}
`;
const StatsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: ${props => props.theme.space[0]};
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;
const StatsItem = styled.li`
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  ${color}
  ${space}
`;

// ========== FriendList ========== //
const Friend = styled.li`
  display: flex;
  align-items: center;
  column-gap: 30px;
  background-color: white;
  height: 70px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 5px 14px -4px rgba(0, 0, 0, 0.59);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const UserStatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

// ========== PropTypes ========== //
Image.propTypes = {
  src: PropTypes.string.isRequired,
};
UserStatusIndicator.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};
// ========== PropTypes ========== //

export {
  Box,
  Wrapper,
  Image,
  Paragraph,
  UserStatsItem,
  Text,
  Heading,
  StatsList,
  StatsItem,
  Friend,
  UserStatusIndicator,
};
