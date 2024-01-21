import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('text', ({ele, state}) => {
    let prop = ele.getAttribute(':text')
    
    effect(() => { ele.textContent = evaluate({state}, prop) })
})