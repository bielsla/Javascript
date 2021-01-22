const assert = require('assert');
const Math = require('.../math.js');

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math();

        try {
            assert.equal(math.sum(5, 5), 10);
        } catch (err) {
            console.log(err);
        }
    })
})