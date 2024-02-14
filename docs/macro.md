# Macro



## State
State is the core of every frontend. Leaf js uses `:state` marco for handling states.
States can be accessed by leaf instances

##### Example 
```html
<div id="app">
    <div :state="{ count : 0 }"></div>
<div>

<script>
    let lf = new leaf('#app');
    console.log(lf.state)
</script>
```

## Text
Set the text content of an element

##### Example 

```html
<div :state='{msg: "this is a div"}' :text="msg"></div>
```

You can also use function where states can be accessed by `$s` or `$state`

```html
<div :state='{apples: 10}' :text="() => 'I have ' + $state.apples + ' apples'"></div>
```



## Html
Set the innerHtml of an element.

##### Example 

```html
<div :state='{msg: "<h1>this is a div</h1>"}' :html="msg"></div>
```

You can also use function where states can be accessed by `$s` or `$state`

```html
<div :state='{apples: 10}' :html="() => '<h1>I have ' + $state.apples + ' apples</h1>'"></div>
```



## Show
Toggle the visibility of an element

##### Example

```html
<div :state='{ open: false }'>
    <button onclick="lf.state.open = !lf.state.open">Toggle button</button>
    <div :show="open">This is a container</div>
</div>
```


## Ref
Creates the reference of the element, it requires a name for the reference.

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