import React, { Component } from 'react';
import './index.js';
import scss from './FeedbackOptions/FeedbackOptions.module.scss';

import { FeedbackOptions, Section, Statistics, Notification } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const option = e.target.option;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();

    return ((good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={scss.review}>
        <Section title="Please leave feedback">
          <FeedbackOptions click={this.onLeaveFeedback} />
        </Section>
        {this.countTotalFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title={'Statistics'}>
            <Statistics>
              good= {good}
              neutral= {neutral}
              bad= {bad}
              total= {this.countTotalFeedback()}
              positivePercentage= {this.countPositiveFeedbackPercentage()}
            </Statistics>
          </Section>
        )}
      </div>
    );
  }
}
