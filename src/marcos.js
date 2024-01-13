
let macroStore = new Map();

/**
 * 
 * @param {string} key 
 * @param {CallableFunction} cb 
 */
export function macro(key, cb) {
    macroStore.set(key, cb);
}

/**
 * @param {string} key 
 * @param {object} ref 
 */
export function registerMacro(key, ref) {
    let cb = macroStore.get(key)
 
    if (cb) {
        cb(ref);
    }
}