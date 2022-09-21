import PropTypes from 'prop-types';
import { Section, SectionTitle, Container } from '../Styled/Common.styled';
import { StatList, StatItem, StatLabel, StatRatio } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Container>
        <StatList>
          {stats.map(item => (
            <StatItem key={item.id}>
              <StatLabel>{item.label}</StatLabel>
              <StatRatio>{item.percentage + '%'}</StatRatio>
            </StatItem>
          ))}
        </StatList>
      </Container>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
