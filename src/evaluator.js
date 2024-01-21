
/**
 * @param {string} str 
 */
export default function evaluate(str) {
    return eval(`state.${str}`)
}