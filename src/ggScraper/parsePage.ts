import cheerio from 'cheerio';

export const parsePage = (page: string) => {
    const $ = cheerio.load(page);
    let links = [...new Set($('a[href^="/freebie/"]')
        .map(function (i, el) {
            // this === el
            return $(el).attr('href');
        }).get())].filter((x: string) => !x.includes('#'));

    return links;
}