import { useState } from "react";

const useQuestions = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [isRunning, setIsRunning] = useState(true);

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === questions[currentQuestionIndex].correctAnswer;
    setResults((prevResults) => [...prevResults, isCorrect]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setIsRunning(false);
    }
  };

  return { results, isRunning, handleAnswer };
};

export default useQuestions;
