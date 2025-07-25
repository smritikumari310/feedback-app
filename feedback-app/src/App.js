import React, { useState } from "react";
import FeedbackButtons from "./FeedbackButtons";
import Statistics from "./Statistics";
import "./App.css";  // ✅ Import CSS

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  return (
    <div className="container">
      <h1>User Feedback</h1>
      <FeedbackButtons
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)}
      />
      <h2>Statistics</h2>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}

export default App;
