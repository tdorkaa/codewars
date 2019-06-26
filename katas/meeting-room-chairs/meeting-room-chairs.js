module.exports = (rooms, need) => {

   return isThereNoNeedForChairs(need) ? 'Game on' : getAvailableChairsByRoom(rooms, need);

};

const isThereNoNeedForChairs = (need) => need === 0;

const getAvailableChairsByRoom = (rooms, need) => {
    const result = [];
    let numberOfCurrentChairs = 0;

    rooms.forEach((room) => {
        if (areChairsEnough(numberOfCurrentChairs, need)) {
            return;
        }

        const numberOfAvailableChairs = getNumberOfAvailableChairs(room[1], room[0]);
        const transformedNumberOfAvailableChairs = getTransformedNumberOfAvailableChairs(numberOfAvailableChairs);

        result.push(transformedNumberOfAvailableChairs);
        numberOfCurrentChairs += transformedNumberOfAvailableChairs;
    });
    return result;
};

const areChairsEnough = (numberOfCurrentChairs, need) => numberOfCurrentChairs === need;

const getNumberOfAvailableChairs = (allNumberOfChairs, occupiedChairs) => allNumberOfChairs - getNumberOfOccupiedChairs(occupiedChairs);

const getNumberOfOccupiedChairs = (occupiedPlacesInRoom) => occupiedPlacesInRoom.split('').length;

const getTransformedNumberOfAvailableChairs = (numberOfAvailableChairs) => (numberOfAvailableChairs) < 0 ? 0 : numberOfAvailableChairs;
