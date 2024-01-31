const { default: leaf } = require('../dist/leaf.js')

describe("Props", () => {

    test("$el", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :text="() => $el.tagName"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector("#col");

        expect(col.textContent).toBe("DIV");
    });

    test("$refs", () => {
        document.body.innerHTML = `<div id="app">
            <div :ref="title">Title Head</div>
            <div id="col" :text="() => $refs.title.textContent"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector("#col");

        expect(col.textContent).toBe("Title Head");
    });

});