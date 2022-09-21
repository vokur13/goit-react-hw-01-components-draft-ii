import styled from '@emotion/styled';

export const FriendsMap = styled.ul``;

export const FriendsItem = styled.li`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  padding: 10px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const setBgColor = props => {
  if (props.isOnline) {
    return 'var(--color-green)';
  }
  return 'var(--color-red)';
};

export const Status = styled.span`
  display: block;
  width: 12px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  padding: 10px;
  margin-right: 10px;
  border-radius: 6px;
  background-color: aquamarine;
`;

export const Name = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
`;
