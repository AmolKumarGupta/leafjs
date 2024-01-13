import { effect, signal } from "./reactive";

export default function leaf(arg1) {

    let rootEle = arg1;
    let state = new signal({});

    [...document.querySelectorAll(`${rootEle} *`)]
        .filter(ele => {
            return ele.getAttributeNames().filter(e => e.startsWith(':'))
        })
        .forEach(ele => {
            if (ele.hasAttribute(':state')) {
                let _local = JSON.parse(ele.getAttribute(':state').replaceAll(/(\w+)(\s+):/g, '"$1":'))

                for(const [key, val] of Object.entries(_local)) {
                    state[key] = val;
                }
            }

            if (ele.hasAttribute(':text')) {
                let prop = ele.getAttribute(':text')
                if (state[prop] === undefined) {
                    throw new Error(`${prop} is not found in state.\n\tCheck ${ele.outerHTML}`);
                }

                effect(() => { ele.textContent = state[prop] })
            }

            if (ele.hasAttribute(':html')) {
                let prop = ele.getAttribute(':html')
                if (state[prop] === undefined) {
                    throw new Error(`${prop} is not found in state.\n\tCheck ${ele.outerHTML}`);
                }

                effect(() => { ele.innerHTML = state[prop] })
            }

        })

    return {
        rootEle,
        state
    }
}