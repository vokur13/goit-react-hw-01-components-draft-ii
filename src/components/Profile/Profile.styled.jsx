import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  text-align: center;
`;

export const Description = styled.div`
  padding: ${props => `${props.theme.spacing(2)}`};
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => `${props.theme.spacing(2)}`};
  height: 75px;
  border-radius: 50%;
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(19 / 18);
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: ${props => `${props.theme.spacing(2)}`};
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: ${props => `${props.theme.colors.secondaryText}`};
  margin-bottom: ${props => `${props.theme.spacing(2)}`};
`;

export const Location = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: ${props => `${props.theme.colors.secondaryText}`};
  svg {
    margin-right: ${props => `${props.theme.spacing(4)}`};
  }
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  flex-grow: 1;
  padding: ${props => `${props.theme.spacing(2)}`};
  background-color: ${props => `${props.theme.colors.white}`};
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.border}`};
  }
`;

export const StatsLabel = styled.span`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 16);
  text-align: center;
  letter-spacing: 0.03em;
  color: ${props => `${props.theme.colors.secondaryText}`};
`;

export const StatsQuantity = styled.span`
  display: block;
  font-weight: 700;
`;
