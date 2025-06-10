import React from "react";
import styles from "./Quiz.module.css";
const Score = ({ score, total }) => {
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className={styles.scoreContainer}>
      <h2>Quiz Completed ✅</h2>
      <p className={styles.scoreText}>
        Your Score: {score} / {total}
      </p>
      <p className={styles.scoreText}>Percentage: {percentage}%</p>
      <button
        className={styles.restartBtn}
        onClick={() => window.location.reload()}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Score;
