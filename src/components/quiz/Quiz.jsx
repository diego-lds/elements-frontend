import React, { useState, useEffect } from "react";
import "./Quiz.css";
import useQuiz from "../../hooks/useQuestions";

const Quiz = ({ questions }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {!showModal && (
        <div className="floating-button" onClick={toggleModal}>
          Botão
        </div>
      )}
      {showModal && <Modal onClose={toggleModal} questions={questions} />}
    </>
  );
};

const Modal = ({ onClose, questions }) => {
  const {
    currentQuestion,
    correctAnswers,
    countdown,
    handleAnswer,
    startQuiz,
    running,
  } = useQuiz(questions);

  // useEffect(() => {
  //   let timer;
  //   if (running) {
  //     timer = setInterval(() => {
  //       setCount((prevCount) => {
  //         if (prevCount === 0) {
  //           clearInterval(timer);
  //           setRunning(false);
  //           setCount(5);
  //           return prevCount;
  //         } else {
  //           return prevCount - 1;
  //         }
  //       });
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [running]);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div>
          <span className="close-button" onClick={onClose}>
            x
          </span>
        </div>
        <div className="modal-content">
          {running ? (
            <>
              <div>{countdown}s</div>
              <div>{currentQuestion.question}</div>
              <button onClick={() => handleAnswer(1)}>Verdadeiro</button>
              <button onClick={() => handleAnswer(0)}>Falso</button>
            </>
          ) : (
            <>
              <h4>Quiz de conhecimentos gerais</h4>
              <p>
                teste seus conhecimento em 30 segundos nesse quiz de perguntas e
                respostas
              </p>

              <p>
                {correctAnswers > 0 && "Respostas corretas: " + correctAnswers}
              </p>

              <button onClick={() => startQuiz()}>Iniciar Quiz</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
