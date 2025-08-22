import Parser from 'rss-parser';

type CustomFeed = {title: string};
type CustomItem = {
  title: string;
  description: string;
  pubDate: Date;
  link: string;
  guid: string;
  creator?: string;
  comments?: number;
};

export const parsePage = async (page: string) => {
  const parser: Parser<CustomFeed, CustomItem> = new Parser({
    customFields: {
      item: ['link']
    }
  });
  try {
    const feed = await parser.parseString(page);
    console.log(feed.title);
    const links = unique(feed.items.map(item => { return item.link }));
    return links;
  } catch (error) {
    console.error('Error parsing RSS feed:', error);
    return [];
  }
};

function unique (array: string[]): string[] {
  return [...new Set(array)];
}
