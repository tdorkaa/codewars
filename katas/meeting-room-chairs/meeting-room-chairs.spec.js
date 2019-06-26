const getChairsForMeetingRoom = require('./meeting-room-chairs');

describe('MeetingRoomChairs', function() {
    it('#1', function() {
        const result = getChairsForMeetingRoom([['xxx', 3], ['xxxxx', 6], ['xxxxxx', 9]], 4);
        expect(result).to.eql([0,1,3]);
    });

    it('#2', function() {
        const result = getChairsForMeetingRoom([['xxx', 1], ['xxxxxx', 6], ['x', 2], ['xxxxxx', 8], ['x', 3], ['xxx', 1]], 5);
        expect(result).to.eql([0, 0, 1, 2, 2]);
    });

    it('#3', function() {
        const result = getChairsForMeetingRoom([['xx', 2], ['xxxx', 6], ['x', 2]], 0);
        expect(result).to.eql('Game on');
    });
});
