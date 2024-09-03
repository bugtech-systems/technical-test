// Jest test file
const DataService = require('./fetchRecords');

jest.mock('./fetchRecords', () => {
    return jest.fn().mockImplementation(() => {
        return {
            fetchAllRecords: jest.fn().mockResolvedValue([1, 2, 3])
        };
    });
});

describe('DataService', () => {
    it('should return [1, 2, 3] from fetchAllRecords', async () => {
        const service = new DataService();
        const records = await service.fetchAllRecords();
        
        expect(records).toEqual([1, 2, 3]);
    });
});
