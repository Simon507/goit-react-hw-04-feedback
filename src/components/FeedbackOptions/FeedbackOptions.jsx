import PropTypes from 'prop-types';

import { BtnBlock } from './FeedbackOptions.styles';
import { Button } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <BtnBlock>
      <Button
        style={{ background: 'green', color: 'white' }}
        type="button"
        name="btnGood"
        onClick={evt => onLeaveFeedback(evt)}
      >
        Good
      </Button>
      <Button
        style={{ background: 'yellow' }}
        type="button"
        name="btnNeutral"
        onClick={evt => onLeaveFeedback(evt)}
      >
        Neutral
      </Button>
      <Button
        style={{ background: 'tomato', color: 'black' }}
        type="button"
        name="btnBad"
        onClick={evt => onLeaveFeedback(evt)}
      >
        Bad
      </Button>
    </BtnBlock>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
