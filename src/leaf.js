'use strict'

import { effect, signal } from "./reactive";
import './macro/index'
import { registerMacro } from "./marcos";

/**
 * 
 * @param {string} arg1 
 */
export default function leaf(arg1) {

    let prefix = ':';
    let rootEle = arg1;
    let state = new signal({});

    [...document.querySelectorAll(`${rootEle} *`)]
        .filter(ele => {
            return ele.getAttributeNames().filter(e => e.startsWith(':'))
        })
        .forEach(ele => {
            ele.getAttributeNames()
                .filter(e => e.startsWith(prefix))
                .forEach(e => registerMacro(e.slice(1), {ele, state}));
        })

    return {
        rootEle,
        state
    }
}