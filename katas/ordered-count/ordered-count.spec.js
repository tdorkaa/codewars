const getOrderedCount = require('./ordered-count');

// describe.only('OrderedCount', () => {
//   [
//     {
//       input: 'abracadabra',
//       expected: [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
//     },
//     {
//       input: 'Code Wars',
//       expected: [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
//     },
//     {
//       input: '212',
//       expected: [['2', 2], ['1', 1 ]]
//     }
//   ].forEach(testCase => {
//     it(`input: ${testCase.input}`, async () => {
//       const result = await getOrderedCount(testCase.input);
//       expect(result).to.eql(testCase.expected);
//     });
//   });
// });


describe('OrderedCount', () => {
  [
    {
      input: 'abracadabra',
      expected: [{ 'a': 5 }, { 'b': 2 }, { 'r': 2 }, { 'c': 1 }, { 'd': 1 }]
    },
    {
      input: 'Code Wars',
      expected: [{'C': 1}, {'o': 1}, {'d': 1}, {'e': 1}, {' ': 1}, {'W': 1}, {'a': 1}, {'r': 1}, {'s': 1}]
    },
    {
      input: '212',
      expected: [{'2': 2}, {'1': 1}]
    }
  ].forEach(testCase => {
    it(`input: ${testCase.input}`, async () => {
      const result = await getOrderedCount(testCase.input);
      expect(result).to.eql(testCase.expected);
    });
  });
});

