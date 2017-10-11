var Events = require('events');

var Store = new Events();
Store.data = {
    count: {
        correct: 0,
        quiz: 1,
    },
    quizzes: [
        {
            correct: '1',
            question: '板チョコの溝は何のため？',
            item: ['チョコを早く固める', '苦味を閉じ込める', '手でわりやすくする']
        },
        {
            correct: '2',
            question: 'セブンイレブンの正しいロゴ',
            item: ['7-ELeVEN', '7-ELEVEn', '7-ELEVEN']
        },
        {
            correct: '3',
            question: '実際にある病名は？',
            item: ['ドーナッツ腹痛', 'ポテトチップス型肥満', 'アイスクリーム頭痛']
        }
    ],
    result: {
        correct: ['good!!!!', 'Bad...']
    }
}

/**
 * 正解数
 * @constructor
 */
Store.IncrementCorrect = function () {
    Store.data.count.correct += 1;
    Store.emit('IncrementCorrect', Store.data.count.correct);
};

/**
 * 問題数
 * @type {EventEmitter}
 */
Store.IncrementQuiz = function () {
    Store.data.count.quiz += 1;
    Store.emit('IncrementQuiz ', Store.data.count.quiz);
};

module.exports = Store;