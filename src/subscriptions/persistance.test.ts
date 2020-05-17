import { saveToFile, loadFromFile } from './persistance'

describe('persistane', () =>
    it('should save and load ids', () => {
        const ids: string[] = ['123', 'abc'];
        saveToFile(ids);

        const result = loadFromFile();

        expect(result).toEqual(ids);
    }))