describe('file', () => {
    afterEach(() => {
        jest.resetModules();
    })

    it('should save and load ids', () => {
        jest.doMock('../../config', () => { return { SubsFile: 'subs-test.txt' } });
        const file = require('./file');

        const ids: string[] = ['123', 'abc'];
        file.saveToFile(ids);

        const result = file.loadFromFile();

        expect(result).toEqual(ids);
    })

    it('should return empty array if subs file does not exist', () => {
        jest.doMock('../../config', () => { return { SubsFile: 'should-not-exist-subs-test.txt' } });
        const file = require('./file');

        const result = file.loadFromFile();

        expect(result).toEqual([]);
    })
});