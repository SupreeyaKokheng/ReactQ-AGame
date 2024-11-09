// src/App.js
import React, { useState, useRef } from 'react';
import QuizController from './controllers/QuizController';
import StartScreen from './components/StartScreen';
import QuestionView from './components/QuestionView';

const App = () => {
  const quizController = useRef(new QuizController()).current;
  
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // เก็บคำตอบของผู้ใช้ในสถานะ
  const questions = quizController.getQuestions();

  const handleStart = () => {
      setIsStarted(true);
      setCurrentQuestionIndex(0);
      setUserAnswers({}); // reset คำตอบเมื่อเริ่มใหม่
  };

  const handleAnswer = (questionId, answer) => {
      quizController.saveAnswer(questionId, answer);
      setUserAnswers(prevAnswers => ({
          ...prevAnswers,
          [questionId]: answer
      })); // update คำตอบใน state
  };

  const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
  };

  const handlePrevious = () => {
      if (currentQuestionIndex > 0 ) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
      } else {
          setIsStarted(false);
      
      }
  };

  return (
      <div className="App">
          {!isStarted ? (
              <StartScreen onStart={handleStart} />
          ) : (
              questions.length > 0 && (
                  <QuestionView
                      question={questions[currentQuestionIndex]}
                      onAnswer={handleAnswer}
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                      currentQuestionIndex={currentQuestionIndex}
                      totalQuestions={questions.length}
                      selectedAnswer={userAnswers[questions[currentQuestionIndex].id]}
                  />
              )
          )}
      </div>
  );
};

export default App;