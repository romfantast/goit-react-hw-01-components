import styled from 'styled-components';
import { color, space, layout, borderRadius, border } from 'styled-system';

export const Box = styled.div`
  width: 30%;
  list-style: none;
  padding: 16px;
  border-radius: 8px;
  margin: 20px auto;
  background-color: #cccaca;
  ${color}, ${space}, ${layout}, ${borderRadius}, ${border};
`;
