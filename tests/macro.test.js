const { default: leaf } = require('../dist/leaf.js')

describe("Macros", () => {

    test("state macro", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :state="{ count: 0 }" :text="count"></div>
        </div>`;

        let lf = new leaf("#app");
        expect(lf.state).toStrictEqual({count: 0});
    });

    test("text macro", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :state="{ count: 0 }" :text="count"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector('#col');
        
        expect(col.textContent).toBe("0")
    })

    test("html macro", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :state='{ msg: "<h1>Hello</h1>" }' :html="msg"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector('#col');
        
        expect(col.innerHTML).toBe("<h1>Hello</h1>")
    })

    test("show macro", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :state='{ hidden: true }' :show="() => !$s.hidden"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector('#col');
        
        expect(col.style.display).toBe("none")
    })

    test("ref macro", () => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :ref="colRef"></div>
        </div>`;

        let lf = new leaf("#app");
        let col = document.querySelector('#col');
        let ref = lf.ref('colRef')

        expect(lf.refs()).toEqual(expect.any(Object));
        expect(ref).toBe(col)
    })

})