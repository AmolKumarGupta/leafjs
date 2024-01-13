import { macro } from "../marcos";
import { effect } from "../reactive";

macro('text', ({ele, state}) => {
    let prop = ele.getAttribute(':text')
    if (state[prop] === undefined) {
        throw new Error(`${prop} is not found in state.`);
    }

    effect(() => { ele.textContent = state[prop] })
})