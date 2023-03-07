import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Component } from 'react';

import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onReset = () => {
    this.setState(prevState => {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    });
  };

  OnBtnClick = typeClick => {
    switch (typeClick.target.name) {
      case 'btnGood':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;
      case 'btnNeutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;
      case 'btnBad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.OnBtnClick}
            options={this.state}
          />
        </Section>
        <Section title="Statistics">
          <Statistics stats={this.state} />
        </Section>
        <button onClick={() => this.onReset()}>RESET</button>
      </Layout>
    );
  }
}
