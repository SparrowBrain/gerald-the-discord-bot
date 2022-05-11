export const findNewEntries = (known: Set<string>, entries: Array<string>): Array<string> => {
  const newEntries: string[] = [];
  entries.forEach(entry => {
    if (!known.has(entry)) {
      newEntries.push(entry);
    }
  });
  return newEntries;
};

export const findNewEntriesFilteringOutOldInserts = (known: Set<string>, entries: Array<string>): Array<string> => {
  const newEntries: string[] = [];
  for (const entry of entries) {
    if (known.has(entry)) {
      return newEntries;
    }
    newEntries.push(entry);
  }

  return newEntries;
};
