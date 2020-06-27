describe('persistane', () => {
    afterEach(() => {
        jest.resetModules();
    })

    it('should save and load ids', () => {
        jest.doMock('../config', () => { return { SubsFile: 'subs-test.txt' } });
        const persistance = require('./persistance');

        const ids: string[] = ['123', 'abc'];
        persistance.saveToFile(ids);

        const result = persistance.loadFromFile();

        expect(result).toEqual(ids);
    })

    it('should return empty array if subs file does not exist', () => {
        jest.doMock('../config', () => { return { SubsFile: 'should-not-exist-subs-test.txt' } });
        const persistance = require('./persistance');

        const result = persistance.loadFromFile();

        expect(result).toEqual([]);
    })
});