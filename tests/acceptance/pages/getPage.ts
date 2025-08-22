import { NewsItem } from './types';
const formatToZeroTimeZone = (date:Date):string => {
  return date.toISOString().split('.')[0] + '+00:00';
};

const formatNewsItem = ({ title, url, date }:NewsItem):string => {
  return `
    <item>
      <title>${title}</title>
      <description><![CDATA[<p><a href="${url}"><img src="https://img.gg.deals/11/5e/bdddaecfffa854917a1e2d2a04a2dc51d8cc_608xt.jpg?utm_source=rss" alt="You can try a FREE Garfield Kart 2 demo this weekend as the devs rev up for release!" /></a></p>
<p>This is a test!</p>]]></description>
      <pubDate>${formatToZeroTimeZone(date)}</pubDate>
      <link>${url}</link>
      <guid>${url}</guid>
      <dc:creator>Jim Jim</dc:creator>
      <slash:comments>0</slash:comments>
    </item>
`;
};

const formatNewsItems = (items:NewsItem[]):string => {
  return items.map(item => formatNewsItem(item)).join('');
};

const getPage = (newsItems:NewsItem[]) :string => {
  const formattedNews = formatNewsItems(newsItems);

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <language>en</language>
    <title>GG.deals - Game freebies</title>
    <description>Looking for games to try or keep for free forever? GG.deals can help! Click here to see all the available offers.</description>
    <lastBuildDate>Fri, 22 Aug 2025 21:19:45 +0000</lastBuildDate>
    <generator>Laminas_Feed_Writer 2 (https://getlaminas.org)</generator>
    <link>https://gg.deals/news/freebies/</link>
    <atom:link rel="self" type="application/rss+xml" href="https://gg.deals/news/freebies/feed/"/>
    ${formattedNews}
  </channel>
</rss>`;
};

export default getPage;
