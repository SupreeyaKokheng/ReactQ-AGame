// src/controllers/QuizController.js
import questions from '../models/questions';

class QuizController {
    constructor() {
        this.questions = questions;
        this.userAnswers = {}; // เก็บคำตอบของผู้ใช้
    }

    getQuestions() {
        return this.questions;
    }

    saveAnswer(questionId, answer) {
        this.userAnswers[questionId] = answer;
    }

    getUserAnswers() {
        return this.userAnswers;
    }

    getUserAnswerForQuestion(questionId) {
        return this.userAnswers[questionId] || null;
    }
}

export default QuizController;
