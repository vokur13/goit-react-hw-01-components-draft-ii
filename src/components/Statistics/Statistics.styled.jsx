import styled from '@emotion/styled';
import { getRandomColor } from 'utils';

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  flex-grow: 1;
  padding: ${props => `${props.theme.spacing(2)}`};
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.border}`};
  }
  background-color: ${getRandomColor};
`;

export const StatLabel = styled.span`
  display: block;
  text-align: center;
  color: ${props => `${props.theme.colors.white}`};
`;

export const StatRatio = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  color: ${props => `${props.theme.colors.white}`};
`;
