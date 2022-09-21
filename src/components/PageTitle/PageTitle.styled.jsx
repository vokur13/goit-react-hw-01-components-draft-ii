import styled from '@emotion/styled';

export const AppTitle = styled.h1`
  margin-top: ${props => `${props.theme.spacing(0)}`};
  text-align: center;
  text-transform: uppercase;
  background-color: ${props => `${props.theme.colors.brown}`};
  color: ${props => `${props.theme.colors.appTitle}`};
`;
