import { macro } from "../marcos";

macro('ref', (opts) => {
    let {ele, state, refs} = opts;
    let prop = ele.getAttribute(':ref');

    if (refs.has(prop)) {
        throw new Error(`ref ${prop} is already exists, should be unique`);
    }

    refs.set(prop, ele);
})