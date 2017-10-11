var EventEmitter = require('events').EventEmitter;
var QuizUi = require('./modules/QuizUi');
var Store = require('./modules/store');


var quizUi = new QuizUi(Store);


quizUi.attachEvent();
