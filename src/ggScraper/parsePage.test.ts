import getPage from '../../tests/acceptance/pages/getPage';
import { getNewsItems } from '../../tests/acceptance/pages/pages';
import { parsePage } from './parsePage';

describe('parsePage', () => {
  it('should return expected link list', async () => {
    const page = getPage(getNewsItems());

    const result = await parsePage(page);

    expect(result).toEqual([
      'https://gg.deals/freebie/test-item-0/',
      'https://gg.deals/freebie/test-item-1/',
      'https://gg.deals/freebie/test-item-2/',
      'https://gg.deals/freebie/test-item-3/',
      'https://gg.deals/freebie/test-item-4/',
      'https://gg.deals/freebie/test-item-5/',
      'https://gg.deals/freebie/test-item-6/',
      'https://gg.deals/freebie/test-item-7/',
      'https://gg.deals/freebie/test-item-8/',
      'https://gg.deals/freebie/test-item-9/',
      'https://gg.deals/freebie/test-item-10/',
      'https://gg.deals/freebie/test-item-11/',
      'https://gg.deals/freebie/test-item-12/',
      'https://gg.deals/freebie/test-item-13/',
      'https://gg.deals/freebie/test-item-14/',
      'https://gg.deals/freebie/test-item-15/',
      'https://gg.deals/freebie/test-item-16/',
      'https://gg.deals/freebie/test-item-17/'
    ]);
  });
});
