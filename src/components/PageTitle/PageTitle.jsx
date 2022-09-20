import PropTypes from 'prop-types';
// import css from './PageTitle.module.css';
import { AppTitle } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <AppTitle>{text}</AppTitle>;
};

PageTitle.propTypes = {
  text: PropTypes.string,
};
