countStepsToLocationOf = require('./spiral-memory');

describe('spiral-memory', () => {
    const testCases = [
        // same row or column as 1
        { input: 1, expected: 0 },
        { input: 2, expected: 1 },
        { input: 11, expected: 2 },
        // not same row or column as 1
        { input: 3, expected: 2 }
    ];
    testCases.forEach(testCase => {
        it('if ' + testCase.input + ' is requested, it has to travel ' + testCase.expected + ' steps', function() {
            expect(countStepsToLocationOf(testCase.input)).to.equals(testCase.expected);
        });
    });
});
