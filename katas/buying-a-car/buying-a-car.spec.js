const getDataForCarBuying = require('./buying-a-car');

describe('MeetingRoomChairs', function() {
    it('#1', function() {
        const result = getDataForCarBuying(2000, 8000, 1000, 1.5);
        expect(result).to.eql([6, 766]);
    });
});
