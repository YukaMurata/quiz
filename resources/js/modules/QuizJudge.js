const $ = require('jquery');


/**
 * 正解かどうか
 */

export function isCorrect(data, correct) {
    return (data === correct);
}

/**
 * 5問終えたかどうか
 */
export function isEnded(data) {
    return (data === 3);
}

/**
 * 全問正解かどうか
 */
export function isPerfect() {
    
}



