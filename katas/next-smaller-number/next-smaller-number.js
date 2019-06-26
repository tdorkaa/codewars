module.exports = (input) => {
    const arrayInputString = Array.from(input.toString());
    if (arrayInputString.length === 2) {
        const reversedString = arrayInputString.reverse().join('');
        return parseInt(reversedString);
    } else {
        const arrayInputInt = arrayInputString.map(input => parseInt(input));
        if(arrayInputInt[arrayInputInt.length - 1] < arrayInputInt[arrayInputInt.length - 2]) {
            [arrayInputInt[arrayInputInt.length - 1], arrayInputInt[arrayInputInt.length - 2]] = [arrayInputInt[arrayInputInt.length - 2], arrayInputInt[arrayInputInt.length - 1]];
            return parseInt(arrayInputInt.join(''));
        } else {
            console.log('itt');
            arrayInputInt.unshift(arrayInputInt.pop());
            return parseInt(arrayInputInt.join(''));
        }
    }
};
