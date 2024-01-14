import { macro } from "../marcos";
import { effect } from "../reactive";

macro('html', ({ele, state}) => {    
    let prop = ele.getAttribute(':html')
    effect(() => { ele.innerHTML = eval(`state.${prop}`) })
})