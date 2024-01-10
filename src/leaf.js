
let __lf_activeEffect = null;
let __lf_deps = new WeakMap();

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
        })

    return {
        rootEle,
        state
    }
}

export function effect(cb) {
    __lf_activeEffect = cb;
    cb();
    __lf_activeEffect = null;
}

export function signal(obj) {
    return new Proxy(obj, {
        get: (target, key, receiver) => {

            let deps = __lf_deps.get(target)
            if (!deps) {
                deps = new Map();
                __lf_deps.set(target, deps)
            }

            let effects = deps.get(key)
            if (!effects) {
                effects = new Set();
                deps.set(key, effects)
            }

            if (__lf_activeEffect) {
                effects.add(__lf_activeEffect);
            }

            return Reflect.get(target, key, receiver)
        },
        set: (target, key, val, receiver) => {

            let result = Reflect.set(target, key, val, receiver)

            let deps = __lf_deps.get(target)
            if (!deps) {
                return result;
            }

            let effects = deps.get(key)
            if (!effects) {
                return result
            }

            effects.forEach((effect) => effect())

            return result
        }
    })
}