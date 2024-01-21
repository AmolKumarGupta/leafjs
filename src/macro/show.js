import evaluate from "../evaluator";
import { macro } from "../marcos";
import { effect } from "../reactive";

macro('show', ({ele, state}) => {    
    let prop = ele.getAttribute(':show')
    effect(() => { 
        ele.style.display = evaluate({state}, prop)==true ? 'block' : 'none'; 
    })
})