const { default: leaf } = require('../dist/leaf.js')

describe("Leaf", () => {
    beforeEach(() => {
        document.body.innerHTML = `<div id="app">
            <div id="col" :state="{ count: 0 }" :text="count"></div>
        </div>`;
    });

    test("renders and updates its state", () => {
        let lf = new leaf("#app");
        let col = document.querySelector("#col");

        expect(lf.state.count).toBe(0);

        lf.state.count++;
        expect(Number(col.textContent)).toBe(lf.state.count)
        expect(Number(col.textContent)).toBe(1)

        lf.state.count++;
        expect(Number(col.textContent)).toBe(lf.state.count)
        expect(Number(col.textContent)).toBe(2)
    });

    test("renders and updates on click", () => {
        let lf = new leaf("#app");
        let col = document.querySelector("#col");

        col.addEventListener('click', () => { lf.state.count++ })

        expect(lf.state.count).toBe(0);

        col.click();
        expect(lf.state.count).toBe(1)
        expect(Number(col.textContent)).toBe(lf.state.count)
    })

})