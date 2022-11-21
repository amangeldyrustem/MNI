import React, { useState } from "react";
import ReactGoogleSlides from "react-google-slides";
import Quiz from "./Quiz";
import { Header } from "./Header";
import { UnderHeader } from "./UnderHeader";
// import Quiz from "./quiz/components/Quiz";
import { QuizProvider } from "./quiz/contexts/quiz";
import { useContext } from "react";
import { QuizContext } from "./quiz/contexts/quiz";
import './quiz/index.css'

export const ModulePage = ({ week }) => {
  const [content, setContent] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);


  return (
    <div>
      <Header />
      <UnderHeader
        secondaryHeader="Methodology of Scientific Research"
        header={week.header}
      />
      <div className="module-page-content">
        <div className="module-page-content-left">
          <div onClick={() => setContent(true)} className="left-content">
            Content
          </div>
          <div onClick={() => setContent(false)} className="left-content">
            Quiz
          </div>
        </div>
        <div className="module-page-content-right">
          {content ? (
            <div className="module-presentation">
              <ReactGoogleSlides
                width={640}
                height={480}
                slidesLink={`${week.googleLink}`}
                slideDuration={5}
                position={1}
                showControls
                loop
              />
            </div>
          ) : (
            <div className="module-quiz">
              <Quiz
                setScore={setScore}
                score={score}
                setShowScore={setShowScore}
                showScore={showScore}
                setCurrentQuestion={setCurrentQuestion}
                currentQuestion={currentQuestion}
                questions={week.quiz}
                answers={answers}
                setAnswers={setAnswers}
              />
              {/* <QuizProvider>
                <Quiz quizState={quizState} dispatch={dispatch} />
              </QuizProvider> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
