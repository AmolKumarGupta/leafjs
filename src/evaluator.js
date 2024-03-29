
/**
 * @param {object} data
 * @param {string} str 
 */
export default function evaluate(opts, str) {
    return isSingleWord(str) ? evalState(opts, str) : evalFn(opts, str);
}

function evalState({state}, str) {
    const fn = new Function('state', `return state.${str}`)
    return fn(state)
}

function evalFn({state, ele, refs}, str) {
    let fn = new Function('$s', '$state', '$el', '$refs', `return (${str})`)
    return fn(state, state, ele, Object.fromEntries(refs))();
}

function isSingleWord(str) {
    return /^\w+$/.test(str)
}