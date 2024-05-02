import React, { useState, useEffect } from "react";

const DURATION = 7;

const useQuiz = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [countdown, setCountdown] = useState(DURATION);
  const [running, setRunning] = useState(false);
  console.log(correctAnswers);
  const handleAnswer = (isTrue) => {
    if (isTrue === questions[currentQuestionIndex].answer) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      endQuiz();
    }
  };

  const startQuiz = () => {
    setRunning(true);
    setCorrectAnswers(0);
  };

  const endQuiz = () => {
    setRunning(false);
    setCountdown(DURATION);
  };

  useEffect(() => {
    let timer;
    if (running && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (running && countdown === 0) {
      endQuiz();
    }

    return () => clearInterval(timer);
  }, [running, countdown]);

  return {
    currentQuestion: questions[currentQuestionIndex],
    correctAnswers,
    countdown,
    running,
    handleAnswer,
    startQuiz,
  };
};

export default useQuiz;
