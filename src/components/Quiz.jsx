import React, { useState } from "react";
import questions from "../data/questions";
import styles from "./Quiz.module.css";
import Score from "./Score";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return answer === questions[index].answer ? score + 1 : score;
    }, 0);
  };

  if (showScore) {
    return <Score score={calculateScore()} total={questions.length} />;
  }

  const question = questions[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className={styles.question}>{question.question}</p>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${
              selectedAnswer === option ? styles.selected : ""
            }`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className={styles.navigation}>
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={userAnswers[currentQuestion] === null}
        >
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
