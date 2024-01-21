import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('html', ({ele, state}) => {    
    let prop = ele.getAttribute(':html')
    effect(() => { ele.innerHTML = evaluate({state}, prop) })
})