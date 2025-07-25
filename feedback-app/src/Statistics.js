import React from "react";

function Statistics({ good, neutral, bad, total, average, positive }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(2)}%</p>
    </div>
  );
}

export default Statistics;
