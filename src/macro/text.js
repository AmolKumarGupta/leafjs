import { macro } from "../marcos";
import { effect } from "../reactive";

macro('text', ({ele, state}) => {
    let prop = ele.getAttribute(':text')
    
    effect(() => { ele.textContent = eval(`state.${prop}`) })
})