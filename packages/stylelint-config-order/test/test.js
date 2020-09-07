const assert = require('assert');
const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

function testConfigFile() {
    assert.doesNotThrow(() => {
        require(path.join(__dirname, '..', 'index.js'));
    });

    return Promise.resolve();
}

function testSystem() {
    const fixture = fs.readFileSync(path.join(__dirname, 'system/fixture.scss'), 'utf8');
    const expected = fs.readFileSync(path.join(__dirname, 'system/expected.scss'), 'utf8');

    return stylelint
        .lint({
            code: fixture,
            config: require('..'),
            fix: true,
        })
        .then((result) => {
            assert.strictEqual(result.errored, false);
            assert.strictEqual(result.output, expected, 'Stylelint output does not equal expected output');
        });
}

Promise.all([testConfigFile(), testSystem()])
    .then(() => console.log('Stylelint output as expected'))
    .catch((e) => {
        console.error(e.name, e.message);
        process.exit(-1);
    });
