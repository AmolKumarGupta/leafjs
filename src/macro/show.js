import { macro } from "../marcos";
import { effect } from "../reactive";

macro('show', ({ele, state}) => {    
    let prop = ele.getAttribute(':show')
    effect(() => { 
        ele.style.display = eval(`state.${prop}`)==true ? 'block' : 'none'; 
    })
})