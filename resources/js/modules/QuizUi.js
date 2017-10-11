const $ = require('jquery');

import {isCorrect, isEnded, isPerfect} from './QuizJudge';

class QuizUi {
    constructor(Store) {
        this.store = Store;
        this.quizShow();
    }

    attachEvent() {
        const _this = this;
        $('.button').on('click', function (e) {
            _this.onClick(e);
        });
        $('.next__button').on('click', function () {
            _this.onClickNext();
        });
    }

    /**
     * 回答ボタンを押した時
     * @param e
     */
    onClick(e) {
        const data = $(e.currentTarget).attr('data-question');
        const correct = this.store.data.quizzes[this.store.data.count.quiz - 1].correct;
        if (isCorrect(data, correct)) {
            const result = this.store.data.result.correct[0];
            this.store.IncrementCorrect();
            $('.content__result__title').text(result);
        } else {
            const result = this.store.data.result.correct[1];
            $('.content__result__title').text(result);
        }

        this.resultShow();
    }

    /**
     * 次へボタンを押した時
     */
    onClickNext() {
        const questionNumber = this.store.data.count.quiz;
        this.store.IncrementQuiz();
        if (isEnded(questionNumber)) {
            this.correctNumber();
        } else {
            this.quizShow();
        }
    }

    /**
     * 問題のデータを更新
     */
    quizUpdate() {

        const $button = $('.button');
        var _this = this;
        $('.question__number').text(this.store.data.count.quiz);
        $('.content__inner__left__text').text(this.store.data.quizzes[this.store.data.count.quiz - 1].question);
        var i = 0;
        $button.each((k, v) => {
            $(v).text(this.store.data.quizzes[this.store.data.count.quiz - 1].item[i]);
            i++
        });
    }

    /**
     * 問題データをviewに反映
     */
    quizShow() {
        this.quizUpdate();
        $('.content').css('display', 'block');
        $('.content__result').css('display', 'none');
    }

    /**
     * 結果ページをviewに反映
     */
    resultShow() {
        $('.content').css('display', 'none');
        $('.content__result').css('display', 'block');
    }

    /**
     * 正解数の表示
     */
    correctNumber() {
        $('.result__number').text(this.store.data.count.correct);
        $('.content__result').css('display', 'none');
        $('.content__end').css('display', 'block');
    }
}

module.exports = QuizUi;