import PropTypes from 'prop-types';
import styled from 'styled-components';
const TableHead = styled.thead`
  height: 30px;
  background-color: rgb(21, 128, 139);
  color: white;
`;
const TableHeaders = styled.th``;
const TableHeadersRow = styled.tr`
  display: contents;
`;
const TableRow = styled.tr`
  text-align: center;
  background-color: ${props => (props.index % 2 === 1 ? 'gray' : 'white')};
`;
const TableBody = styled.tbody``;
const TableData = styled.td`
  height: 40px;
`;

//  ============= PropTypes ============= //
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
};
//  ============= PropTypes ============= //
export {
  TableHead,
  TableHeaders,
  TableHeadersRow,
  TableRow,
  TableBody,
  TableData,
};
