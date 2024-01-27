# Property

> It can be accessed from the macro only

## $state
Access the instance's state. Here is an alias `$s` for convenience.

```html
<div :state='{ fruit: "apples"}'>
    <span :text="() => $state.fruit"></span>
<div>
```