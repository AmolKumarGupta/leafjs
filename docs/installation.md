# Installation

You can use leafjs as a esm module as well as commonjs module. You can use it as standalone file for browser.

## Using Script Tag

You can download them as a script from here

### Links

 - [Standalone file (Recommended for browser uses)](https://github.com/AmolKumarGupta/leafjs/releases/download/v1.0.1/leaf-min.js)
 - [Commonjs module](https://github.com/AmolKumarGupta/leafjs/releases/download/v1.0.1/leaf.js)
 - [ESM module](https://github.com/AmolKumarGupta/leafjs/releases/download/v1.0.1/leaf.mjs)

### Example
```html
<html>
<body id="app">
    <h2>Counter</h2>

    <div :state='{ count : 0 }'>
        <h4>Count: <span :text="count"></span></h4>

        <button onclick="lf.state.count++">+</button>
        <button onclick="lf.state.count--">-</button>
    </div>

    <script src="./leaf-min.js"></script>
    <script>
        let lf = new leaf('#app');
    </script>
</body>
</html>
```

## NPM Package

Coming Soon !