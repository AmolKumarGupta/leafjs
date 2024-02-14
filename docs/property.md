# Property

> It can be accessed from the macro only

## $state
Access the instance's state. Here is an alias `$s` for convenience.

```html
<div :state='{ fruit: "apples"}'>
    <span :text="() => $state.fruit"></span>
<div>
```

## $el
Access the DOM of current element

```html
<span :text="() => 'This is a ' + $el.tagName"></span>
```

## $refs
Contains the reference of the element.

##### Example

```html
<div :ref="myEle">Apples</div>
<span :text="() => $refs.myEle.innerHTML"></span>
```

`$refs` can also be accessed by instance.

```js
let lf = new leaf('#app');

lf.refs() // return all refs 

lf.ref("myEle") // return ref with name myEle
```