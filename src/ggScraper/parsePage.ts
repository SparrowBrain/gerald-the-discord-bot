import cheerio from 'cheerio';

export const parsePage = (page: string) => {
  const $ = cheerio.load(page);
  const links = filterOutLinksWithParameters(
    unique(getAllFreebieLinks($)));

  return links;
};

function getAllFreebieLinks ($: cheerio.Root): string[] {
  return $('a[href^="/freebie/"]')
    .map(function (i, el) {
      // this === el
      return $(el).attr('href');
    }).get();
}

function unique (array: string[]): string[] {
  return [...new Set(array)];
}

function filterOutLinksWithParameters (links: string[]): string[] {
  return links.filter((x: string) => !x.includes('#'));
}
