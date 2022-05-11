import getPage from '../../tests/acceptance/pages/getPage';
import { getNewsItems } from '../../tests/acceptance/pages/pages';
import { parsePage } from './parsePage';

describe('parsePage', () => {
  it('should return expected link list', () => {
    const page = getPage(getNewsItems());

    const result = parsePage(page);

    expect(result).toEqual([
      '/freebie/test-item-0/',
      '/freebie/test-item-1/',
      '/freebie/test-item-2/',
      '/freebie/test-item-3/',
      '/freebie/test-item-4/',
      '/freebie/test-item-5/',
      '/freebie/test-item-6/',
      '/freebie/test-item-7/',
      '/freebie/test-item-8/',
      '/freebie/test-item-9/',
      '/freebie/test-item-10/',
      '/freebie/test-item-11/',
      '/freebie/test-item-12/',
      '/freebie/test-item-13/',
      '/freebie/test-item-14/',
      '/freebie/test-item-15/',
      '/freebie/test-item-16/',
      '/freebie/test-item-17/'
    ]);
  });
});
