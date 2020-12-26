const express = require('express');
const route = express.Router();
const quizController = require('../controllers/quizController');

route.get('/quiz',quizController.quiz);

route.post('/quiz/answers',quizController.answers);


module.exports = route;