import PropTypes from 'prop-types';
import { Notification } from '../notification/Notification';
import { StatisticsBlock } from './Statistics.styles';

export const Statistics = ({ stats: { good, neutral, bad } }) => {
  return (
    <>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>
          <Notification message="There is no feedback" />
        </div>
      ) : (
        <StatisticsBlock>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {good + neutral + bad}</p>
          <p>
            Positive feedback:{' '}
            {Math.round((good / (good + neutral + bad)) * 100)}%
          </p>
        </StatisticsBlock>
      )}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
