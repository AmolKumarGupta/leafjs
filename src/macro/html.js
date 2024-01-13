import { macro } from "../marcos";
import { effect } from "../reactive";

macro('html', ({ele, state}) => {    
    let prop = ele.getAttribute(':html')
    if (state[prop] === undefined) {
        throw new Error(`${prop} is not found in state.`);
    }

    effect(() => { ele.innerHTML = state[prop] })
})