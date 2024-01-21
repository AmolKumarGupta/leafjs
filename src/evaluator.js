
/**
 * @param {object} data
 * @param {string} str 
 */
export default function evaluate({state}, str) {
    return isSingleWord(str) ? evalState({state}, str) : evalFn({state}, str);
}

function evalState({state}, str) {
    return eval(`state.${str}`)
}

function evalFn(data, str) {
    fn = eval(str);
    return fn(data);
}

function isSingleWord(str) {
    return /^\w+$/.test(str)
}