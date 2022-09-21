import PropTypes from 'prop-types';
import { Section, SectionTitle, Container } from '../Styled/Common.styled';
import {
  Table,
  TableHeaderWrapper,
  TableHeaderRow,
  TableHead,
  TableBody,
  TableBodyRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ title, items }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Container>
        <Table>
          <TableHeaderWrapper>
            <TableHeaderRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
            </TableHeaderRow>
          </TableHeaderWrapper>

          <TableBody>
            {items.map(item => (
              <TableBodyRow type={item.type} key={item.id}>
                <TableData>{item.type}</TableData>
                <TableData>{item.amount}</TableData>
                <TableData>{item.currency}</TableData>
              </TableBodyRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
