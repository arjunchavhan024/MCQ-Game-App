import React from "react";
import Quiz from "./components/Quiz";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>MCQ Quiz Game</h1>
      <Quiz />
    </div>
  );
};

export default App; // <--- Make sure this line exists
