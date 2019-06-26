// module.exports = (input) => {
//   const arrOfChars = input.split('');
//   return [...new Set(arrOfChars)].map((letter) => [letter, (input.split(letter).length - 1)]);
// };

module.exports = (input) => {
  const arrOfChars = input.split('');
  // const result = [... new Set(arrOfChars)].reduce((accumulator, letter) => {
  //   accumulator.push({[letter]: input.split(letter).length - 1});
  //   return accumulator;
  // }, []);
  const result = [... new Set(arrOfChars)].map((letter) => ({ [letter]: input.split(letter).length - 1}));
  return result;
};
