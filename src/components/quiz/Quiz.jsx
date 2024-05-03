import { useState } from "react";
import PropTypes from "prop-types";
import "./Quiz.css";
import useQuestions from "../../hooks/useQuestions";
import Button from "../common/button";

const Quiz = ({ questions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {!isModalOpen && (
        <div className="floating-button" onClick={toggleModal}>
          Quiz!
        </div>
      )}
      {isModalOpen && <Modal onClose={toggleModal} questions={questions} />}
    </>
  );
};

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Modal = ({ onClose, questions }) => {
  const {
    currentQuestion,
    correctAnswers,
    countdown,
    handleAnswer,
    startQuiz,
    running,
  } = useQuestions(questions);

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
              <div className="questions">
                <div>{countdown}s</div>
                <div>{currentQuestion.question}</div>
              </div>
              <div className="buttons">
                <Button onClick={() => handleAnswer(1)}>Verdadeiro</Button>
                <Button onClick={() => handleAnswer(0)}>Falso</Button>
              </div>
            </>
          ) : (
            <>
              <h3>Quiz de conhecimentos gerais</h3>
              <p>
                Teste seus conhecimentos em 30 segundos neste quiz de perguntas
                e respostas
              </p>

              <p>
                {correctAnswers > 0 && `Respostas corretas: ${correctAnswers}`}
              </p>

              <Button onClick={() => startQuiz()}>Iniciar Quiz</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.elementType.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Quiz;
