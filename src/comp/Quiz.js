import React, { useState } from "react";
import "./style/quiz.css";

export default function Quiz({
  questions,
  currentQuestion,
  setCurrentQuestion,
  showScore,
  setShowScore,
  score,
  setScore,
  answers,
  setAnswers
}) {

  const handleAnswerOptionClick = (answerOption) => {
	
	setAnswers([...answers,answerOption])
    if (answerOption.isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  console.log(answers)

  let renderedQuestions = questions.map((quest, index1) => {
    return (
      <div key={index1}>
        <div className="question-section">
          <div className="question-count">
			
            <span>Question {index1 + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {quest.questionText}
          </div>
        </div>
        <div className="answer-section">
          {quest.answerOptions.map((answerOption, index) => {
			// console.log(answerOption, index)
            return <button
              className={`quiz-btn ${answerOption.isCorrect ? 'correct' : ''}`}
            >
              {answerOption.answerText}
            </button>
		})}
        </div>
		<hr/>
      </div>
    );
  });
  return (
	//className="score-section"
    <div className="app">
      {showScore ? (
        <div >
			<span className="score-count">
          You scored {score} out of {questions.length}
		  </span>
          {renderedQuestions}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="quiz-btn"
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
