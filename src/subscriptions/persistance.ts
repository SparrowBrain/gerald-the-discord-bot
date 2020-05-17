import fs from 'fs'

export const saveToFile = (channelIds: string[]): void => {
    fs.writeFileSync('subs.json', channelIds, 'utf-8');
}

export const loadFromFile = (): string[] => {
    return fs.readFileSync('subs.json', 'utf-8').split(',');
}