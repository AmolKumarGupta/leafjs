import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('show', (opts) => {    
    let {ele, state} = opts;
    let prop = ele.getAttribute(':show')
    
    effect(() => { 
        ele.style.display = evaluate(opts, prop)==true ? 'block' : 'none'; 
    })
})