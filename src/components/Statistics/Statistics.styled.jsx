import styled from '@emotion/styled';
import { getRandomColor } from 'utils';

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-grow: 1;
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
  background-color: ${getRandomColor};
`;

export const StatLabel = styled.span`
  display: block;
  text-align: center;
  color: #fff;
`;

export const StatRatio = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: #fff;
`;
