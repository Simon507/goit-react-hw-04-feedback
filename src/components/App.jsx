import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { useState } from 'react';

import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const OnBtnClick = typeClick => {
    switch (typeClick.target.name) {
      case 'btnGood':
        setGood(good + 1);
        break;
      case 'btnNeutral':
        setNeutral(neutral + 1);
        break;
      case 'btnBad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <GlobalStyle />

      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={OnBtnClick} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
      <button onClick={() => onReset()}>RESET</button>
    </Layout>
  );
};
