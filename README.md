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
    let lf = leaf('#app');
</script>
```


## Docs
Please check examples. Docs Coming Soon !

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing to this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.