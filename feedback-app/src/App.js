import React, { useState } from 'react';
import './App.css';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const average = total === 0 ? 0 : (feedback.good - feedback.bad) / total;
  const positivePercent = total === 0 ? 0 : (feedback.good / total) * 100;

  return (
    <div className="App">
      <h1>User Feedback</h1>
      <FeedbackButtons onFeedback={handleFeedback} />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        average={average}
        positivePercent={positivePercent}
      />
    </div>
  );
}

export default App;
