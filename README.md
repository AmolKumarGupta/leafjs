## Leaf js
Minimal Framework for building User Interfaces directly in HTML markup.

```html
<div id="app">
    <div :state='{ msg : "Welcome to Leaf js"}'>
        <span :text="msg"></span>
    </div>
</div>

<script src="../dist/leaf-min.js"></script>
<script>
    let lf = new leaf('#app');
</script>
```


## Docs
Please check examples. Docs Coming Soon !


## Examples
serve `examples` and `dist` dir 

```
npm run examples
```


## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing to this project.


## Testing
We are using `jest` for testing environment with `jest-environment-jsdom`

```
npm run build && npm run test
```

> Dont forget to make a build before testing !


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.