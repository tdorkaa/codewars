module.exports = (input) => {
  if (input.includes(' ')) {
    const trimmedInput = input.replace(/\s+/g, '');
    const arrWithoutSpace = waveWithInputWithoutSpace(trimmedInput);

    return reTakeSpaces(arrIndexesOfSpaces(input), arrWithoutSpace);;
  } else {
    return waveWithInputWithoutSpace(input);
  }

};

const waveWithInputWithoutSpace = (input) => {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    const transformedInput = input.slice(0, i) + input.charAt(i).toUpperCase() + input.slice(i + 1, input.length);
    arr.push(transformedInput);
  }
  return arr;
};

const arrIndexesOfSpaces = (input) => {
  const indices = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      indices.push(i);
    }
  }
  return indices;
};

const reTakeSpaces = (indices, arrWithoutSpace) => {
  return indices.reduce((resultArr, indexOfSpace) => {
      return resultArr.map(word => word.slice(0, indexOfSpace) + ' ' + word.slice(indexOfSpace, word.length));
  }, arrWithoutSpace);
};
