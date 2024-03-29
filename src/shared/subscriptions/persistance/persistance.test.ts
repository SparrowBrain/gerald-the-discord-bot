import { SubscriptionsProvider } from '../provider';
import * as file from './file';
import * as s3 from './s3';

const mockFile = 'mockFile.txt';

describe('save', () => {
  const saveToFileSpy = jest.spyOn(file, 'saveToFile').mockImplementation((ids, file) => { });
  const saveToS3Spy = jest.spyOn(s3, 'saveToS3').mockImplementation(async (ids, file) => { });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should save to file when file provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: SubscriptionsProvider.File }; });
    jest.doMock('./file', () => { return { saveToFile: saveToFileSpy }; });
    const persistance = require('./persistance');
    const ids = ['abc', '123'];

    await persistance.save(ids, mockFile);

    expect(saveToFileSpy).toBeCalledWith(ids, mockFile);
  });

  it('should save to s3 when s3 provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: SubscriptionsProvider.S3 }; });
    jest.doMock('./s3', () => { return { saveToS3: saveToS3Spy }; });
    const persistance = require('./persistance');
    const ids = ['abc', '123'];

    await persistance.save(ids, mockFile);

    expect(saveToS3Spy).toBeCalledWith(ids, mockFile);
  });

  it('should throw error when invalid provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: 'NON EXISTANT PROVIDER' }; });
    const persistance = require('./persistance');
    const ids = ['abc', '123'];

    expect(persistance.save(ids, mockFile)).rejects.toThrowError('Invalid subscriptions provider configuraiton');
  });
});

describe('load', () => {
  const loadFromFileSpy = jest.spyOn(file, 'loadFromFile').mockImplementation((file) => ['file', 'ids']);
  const loadFromS3Spy = jest.spyOn(s3, 'loadFromS3').mockImplementation(async (file) => ['s3', 'ids']);

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should load from file when file provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: SubscriptionsProvider.File }; });
    jest.doMock('./file', () => { return { loadFromFile: loadFromFileSpy }; });
    const persistance = require('./persistance');

    const ids = await persistance.load(mockFile);

    expect(ids).toEqual(['file', 'ids']);
  });

  it('should load from s3 when s3 provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: SubscriptionsProvider.S3 }; });
    jest.doMock('./s3', () => { return { loadFromS3: loadFromS3Spy }; });
    const persistance = require('./persistance');

    const ids = await persistance.load(mockFile);

    expect(ids).toEqual(['s3', 'ids']);
  });

  it('should throw error when invalid provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: 'NON EXISTANT PROVIDER' }; });
    const persistance = require('./persistance');

    expect(persistance.load(mockFile)).rejects.toThrowError('Invalid subscriptions provider configuraiton');
  });
});
