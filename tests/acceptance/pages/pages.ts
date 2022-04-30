import getPage from './getPage';
import { NewsItem } from './types';

export const getInitPage = (items:NewsItem[]):string => {
  return getPage(items);
};

export const getNewGameOnSteamPage = (items:NewsItem[]):string => {
  const newItem = { title: 'New Steam Game', url: '/freebie/free-new-game-on-steam/', date: new Date() };
  const updatedItems = addNewItem(newItem, items);
  return getPage(updatedItems);
};

export const getNewNonSubscriberGamePage = (items:NewsItem[]):string => {
  const newItem = { title: 'New Test Game', url: '/freebie/non-subscriber-game/', date: new Date() };
  const updatedItems = addNewItem(newItem, items);
  return getPage(updatedItems);
};

export const getGameFloodPage = (items:NewsItem[]):string => {
  let updatedItems = items;
  for (let i = 0; i < 11; i++) {
    const newItem = { title: `Game Flood ${i}!`, url: `/freebie/game-flood-${i}/`, date: new Date() };
    updatedItems = addNewItem(newItem, updatedItems);
  }

  return getPage(updatedItems);
};

export const getNewsItems = ():NewsItem[] => {
  const items :NewsItem[] = [];
  for (let i = 0; i < 18; i++) {
    items.push({ title: `Test Title Nr. ${i}`, url: `/freebie/test-item-${i}/`, date: new Date() });
  }

  return items;
};

const addNewItem = (newItem:NewsItem, items:NewsItem[]):NewsItem[] => {
  items.pop();
  return [newItem].concat(items);
};
