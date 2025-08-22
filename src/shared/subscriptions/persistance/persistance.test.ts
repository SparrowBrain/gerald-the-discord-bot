import { SubscriptionsProvider } from '../provider';
import * as file from './file';

const mockFile = 'mockFile.txt';

describe('save', () => {
  const saveToFileSpy = jest.spyOn(file, 'saveToFile').mockImplementation((ids, file) => { });

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

    expect(saveToFileSpy).toHaveBeenCalledWith(ids, mockFile);
  });

  it('should throw error when invalid provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: 'NON EXISTANT PROVIDER' }; });
    const persistance = require('./persistance');
    const ids = ['abc', '123'];

    expect(persistance.save(ids, mockFile)).rejects.toThrow('Invalid subscriptions provider configuraiton');
  });
});

describe('load', () => {
  const loadFromFileSpy = jest.spyOn(file, 'loadFromFile').mockImplementation((file) => ['file', 'ids']);

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

  it('should throw error when invalid provider is configured', async () => {
    jest.doMock('../../../config', () => { return { SubsProvider: 'NON EXISTANT PROVIDER' }; });
    const persistance = require('./persistance');

    expect(persistance.load(mockFile)).rejects.toThrow('Invalid subscriptions provider configuraiton');
  });
});
