module.exports = (squareNumber) => {
    return getStepsInRadius(squareNumber) + getStepsInCircle(squareNumber);
};

function getStepsInRadius(squareNumber) {
    let highestNumberInSameCircle = getHighestNumberInSameCircle(squareNumber);
    const circleSide = Math.sqrt(highestNumberInSameCircle) - 1;
    return (circleSide)/2;
}


function getStepsInCircle(squareNumber) {
    const highestNumberInSameCircle = getHighestNumberInSameCircle(squareNumber);
    const circleSide = Math.sqrt(highestNumberInSameCircle) - 1;
    const rightMidPointInSameCircle = highestNumberInSameCircle - (3.5 * circleSide);
    return squareNumber - rightMidPointInSameCircle;
}

function getHighestNumberInSameCircle(squareNumber) {
    let smallestSquareAboveInput = getSmallestSquareAboveInput(squareNumber);
    const root = Math.sqrt(smallestSquareAboveInput);
    const smallestOddAboveRoot = root % 2 == 0 ? root + 1 : root;
    return smallestOddAboveRoot ** 2;
}

function getSmallestSquareAboveInput(input) {
    return Math.ceil(Math.sqrt(input))
}

