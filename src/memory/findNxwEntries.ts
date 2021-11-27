export const findNewEntries = (known: Set<string>, entries: Array<string>): Array<string> => {
    const newEntries: string[] = []
    entries.forEach(entry => {
        if (!known.has(entry)) {
            newEntries.push(entry);
        }
    });
    return newEntries;
}

