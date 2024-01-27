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

## Contributing
Please read [CONTRIBUTING.md](https://github.com/AmolKumarGupta/leafjs/blob/main/CONTRIBUTING.md) before contributing to this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/AmolKumarGupta/leafjs/blob/main/LICENSE) file for details.