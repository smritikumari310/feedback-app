import React from "react";

function FeedbackButtons({ onGood, onNeutral, onBad }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={onGood}>Good</button>{" "}
      <button onClick={onNeutral}>Neutral</button>{" "}
      <button onClick={onBad}>Bad</button>
    </div>
  );
}

export default FeedbackButtons;
