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

## Html

## Show