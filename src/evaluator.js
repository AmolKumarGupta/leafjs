
/**
 * @param {object} data
 * @param {string} str 
 */
export default function evaluate({state}, str) {
    return isSingleWord(str) ? evalState({state}, str) : evalFn({state}, str);
}

function evalState({state}, str) {
    const fn = new Function('state', `return state.${str}`)
    return fn(state)
}

function evalFn({state}, str) {
    let fn = new Function('$s', '$state', `return (${str})`)
    return fn(state, state)();
}

function isSingleWord(str) {
    return /^\w+$/.test(str)
}