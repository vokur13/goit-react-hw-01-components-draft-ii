import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  text-align: center;
`;

export const Description = styled.div`
  padding: 10px;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  height: 75px;
  border-radius: 50%;
  background-color: #fff;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(19 / 18);
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  svg {
    margin-right: 5px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  flex-grow: 1;
  padding: 10px;
  background-color: #fff;
  &:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
`;

export const StatsLabel = styled.span`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
`;

export const StatsQuantity = styled.span`
  display: block;
  font-weight: 700;
`;
