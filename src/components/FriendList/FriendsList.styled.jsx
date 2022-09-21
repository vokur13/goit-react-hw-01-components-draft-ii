import styled from '@emotion/styled';

export const FriendsMap = styled.ul``;

export const FriendsItem = styled.li`
  display: flex;
  background-color: ${props => `${props.theme.colors.white}`};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  padding: ${props => `${props.theme.spacing(2)}`};
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${props => `${props.theme.spacing(2)}`};
  }
`;

const setBgColor = ({ isOnline, theme }) => {
  if (isOnline) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

export const Status = styled.span`
  display: block;
  width: 12px;
  height: 10px;
  border-radius: 50%;
  margin-right: ${props => props.theme.spacing(1)};
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  padding: ${props => props.theme.spacing(2)};
  margin-right: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.avatarBg};
`;

export const Name = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
`;
