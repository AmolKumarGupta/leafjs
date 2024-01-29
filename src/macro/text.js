import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('text', (opts) => {
    let {ele, state} = opts;
    let prop = ele.getAttribute(':text')
    
    effect(() => { ele.textContent = evaluate(opts, prop) })
})