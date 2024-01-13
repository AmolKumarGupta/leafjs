import { macro } from "../marcos";

macro('state', ({ele, state}) => {
    let _local = JSON.parse(ele.getAttribute(':state').replaceAll(/(\w+)(\s+):/g, '"$1":'))

    for(const [key, val] of Object.entries(_local)) {
        state[key] = val;
    }
})