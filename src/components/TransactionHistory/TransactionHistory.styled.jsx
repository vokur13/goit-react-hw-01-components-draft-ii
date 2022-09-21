import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: center;
  width: 100%;
`;

export const TableHeaderWrapper = styled.thead`
  width: 100%;
  background-color: ${props => props.theme.colors.brown};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(2)};
`;

export const TableHeaderRow = styled.tr``;

export const TableHead = styled.th``;

export const TableBody = styled.tbody``;

const setBgColor = ({ type, theme }) => {
  switch (type) {
    case 'invoice':
      return theme.colors.yellow;
    case 'payment':
      return theme.colors.blue;
    case 'withdrawal':
      return theme.colors.red;
    case 'deposit':
      return theme.colors.green;
    default:
      return theme.colors.white;
  }
};

export const TableBodyRow = styled.tr`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 2px 2px 2px 2px;
  background-color: ${setBgColor};
`;

export const TableData = styled.td`
  text-align: start;
  padding-left: ${props => props.theme.spacing(6)};
`;
