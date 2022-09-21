import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: center;
  width: 100%;
`;

export const TableHeaderWrapper = styled.thead`
  width: 100%;
  background-color: var(--color-brown);
  color: var(--color-white);
  text-transform: uppercase;
  padding: 10px;
`;

export const TableHeaderRow = styled.tr``;

export const TableHead = styled.th``;

export const TableBody = styled.tbody``;

const setBgColor = props => {
  switch (props.type) {
    case 'invoice':
      return 'var(--color-yellow)';
    case 'payment':
      return 'var(--color-blue)';
    case 'withdrawal':
      return 'var(--color-red)';
    case 'deposit':
      return 'var(--color-green)';
    default:
      return '#000';
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
  padding-left: 20px;
`;
