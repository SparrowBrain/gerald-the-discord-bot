import { saveToFile, loadFromFile } from './persistance'
// import * as config from '../config';
jest.mock('../config', () => { return { SubsFile: 'subs-test.txt' } });

describe('persistane', () => {

    it('should save and load ids', () => {
        const ids: string[] = ['123', 'abc'];
        saveToFile(ids);

        const result = loadFromFile();

        expect(result).toEqual(ids);
    })
});