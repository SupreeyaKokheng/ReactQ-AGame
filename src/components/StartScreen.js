// src/views/StartScreen.js
import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen" style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h1>Welcome to the Quiz</h1>
            <button onClick={onStart} style={{ padding: '10px 20px', fontSize: '18px' }}>Start</button>
        </div>
    );
};

export default StartScreen;
