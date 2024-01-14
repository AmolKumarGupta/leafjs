'use strict'

import { effect, signal } from "./reactive";
import './macro/index'
import { registerMacro } from "./marcos";

/**
 * 
 * @param {string} arg1 
 */
export default function Leaf(arg1) {

    let prefix = ':';
    this.rootEle = arg1;
    this.state = new signal({});

    [...document.querySelectorAll(`${this.rootEle} *`)]
        .filter(ele => {
            return ele.getAttributeNames().filter(e => e.startsWith(':'))
        })
        .forEach(ele => {
            ele.getAttributeNames()
                .filter(e => e.startsWith(prefix))
                .forEach(e => registerMacro(e.slice(1), {ele, state: this.state}));
        })
}