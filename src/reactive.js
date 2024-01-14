
let activeEffect = null;

export function effect(cb) {
    activeEffect = cb;
    cb();
    activeEffect = null;
}

export function signal(obj) {
    let depsCluster = new WeakMap();

    let handler = {
        get: (target, key, receiver) => {
            let deps = depsCluster.get(target)
            if (!deps) {
                deps = new Map();
                depsCluster.set(target, deps)
            }

            let effects = deps.get(key)
            if (!effects) {
                effects = new Set();
                deps.set(key, effects)
            }

            if (activeEffect) {
                effects.add(activeEffect);
            }

            if (typeof target[key] == 'object') {
                return new Proxy(target[key], handler)
            }

            return Reflect.get(target, key, receiver)
        },
        set: (target, key, val, receiver) => {

            let result = Reflect.set(target, key, val, receiver)

            let deps = depsCluster.get(target)
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
    }

    return new Proxy(obj, handler)
}