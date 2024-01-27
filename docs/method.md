# Method

## effect
An useful method to capture state changes to do side-effect.

**Syntax:** `effect(callback)`

```js
// <div :state='{ num : 1 }'></div>

let lf = new leaf("#app");

effect(() => {
    console.log(`The number is ${lf.state.num}`);
})
```