import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('html', (opts) => {
    let {ele, state} = opts;
    let prop = ele.getAttribute(':html')

    effect(() => { ele.innerHTML = evaluate(opts, prop) })
})