import PropTypes from 'prop-types';

import { Mainsection } from './Section.styles';

export const Section = ({ title, children }) => {
  return (
    <Mainsection>
      <h2>{title}</h2>

      {children}
    </Mainsection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
