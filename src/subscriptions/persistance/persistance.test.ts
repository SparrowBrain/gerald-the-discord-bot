import { SubscriptionsProvider } from '../provider'
import * as file from './file'
import * as s3 from './s3'

describe('save', () => {

    const saveToFileSpy = jest.spyOn(file, 'saveToFile').mockImplementation((ids) => { });
    const saveToS3Spy = jest.spyOn(s3, 'saveToS3').mockImplementation((ids) => { });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should save to file when file provider is configured', () => {
        jest.doMock('../../config', () => { return { SubsProvider: SubscriptionsProvider.File } });
        jest.doMock('./file', () => { return { saveToFile: saveToFileSpy } });
        const persistance = require('./persistance');
        const ids = ['abc', '123'];

        persistance.save(ids);

        expect(saveToFileSpy).toBeCalledWith(ids);
    });

    it('should save to s3 when s3 provider is configured', () => {
        jest.doMock('../../config', () => { return { SubsProvider: SubscriptionsProvider.S3 } });
        jest.doMock('./s3', () => { return { saveToS3: saveToS3Spy } });
        const persistance = require('./persistance');
        const ids = ['abc', '123'];

        persistance.save(ids);

        expect(saveToS3Spy).toBeCalledWith(ids);
    });
});

describe('load', () => {

    const loadFromFileSpy = jest.spyOn(file, 'loadFromFile').mockImplementation(() => ['file', 'ids']);
    const loadFromS3Spy = jest.spyOn(s3, 'loadFromS3').mockImplementation(() => ['s3', 'ids']);

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should load from file when file provider is configured', () => {
        jest.doMock('../../config', () => { return { SubsProvider: SubscriptionsProvider.File } });
        jest.doMock('./file', () => { return { loadFromFile: loadFromFileSpy } });
        const persistance = require('./persistance');

        const ids = persistance.load();

        expect(ids).toEqual(['file', 'ids']);
    });

    it('should save to s3 when s3 provider is configured', () => {
        jest.doMock('../../config', () => { return { SubsProvider: SubscriptionsProvider.S3 } });
        jest.doMock('./s3', () => { return { loadFromS3: loadFromS3Spy } });
        const persistance = require('./persistance');

        const ids = persistance.load();

        expect(ids).toEqual(['s3', 'ids']);
    });
});