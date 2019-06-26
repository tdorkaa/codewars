const getNextSmallerNumber = require('./next-smaller-number');

describe.only('NextSmallerNumber', function() {
    it('input: 21', function() {
        const result = getNextSmallerNumber(21);
        expect(result).to.eql(12);
    });

    it('input: 42', function() {
        const result = getNextSmallerNumber(42);
        expect(result).to.eql(24);
    });

    it('input: 531', function() {
        const result = getNextSmallerNumber(531);
        expect(result).to.eql(513);
    });

    it('input: 907', function() {
        const result = getNextSmallerNumber(907);
        expect(result).to.eql(790);
    });

    it('input: 2701', function() {
        const result = getNextSmallerNumber(2701);
        expect(result).to.eql(2710);
    });
});
