// src/views/QuestionView.js
import React from 'react';

const QuestionView = ({ question, onAnswer, onNext, onPrevious, currentQuestionIndex, totalQuestions, selectedAnswer }) => {
    return (
        <div className="question-view" style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h2>{question.questionText}</h2>
            <div style={{ marginTop: '20px' }}>
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(question.id, option)} 
                        style={{
                            display: 'block',
                            margin: '10px auto',
                            padding: '10px',
                            width: '200px',
                            fontSize: '16px',
                            backgroundColor: selectedAnswer === option ? 'orange' : 'white',
                            color: selectedAnswer === option ? 'white' : 'black',
                            cursor: 'pointer',
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                {/* ยกเลิกการตั้งค่า disabled สำหรับปุ่ม Previous */}
                <button onClick={onPrevious}>Previous</button>
                <button onClick={onNext} disabled={currentQuestionIndex === totalQuestions - 1}>Next</button>
            </div>
        </div>
    );
};

export default QuestionView;
