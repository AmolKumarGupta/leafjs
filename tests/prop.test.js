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

});