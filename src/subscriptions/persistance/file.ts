import fs from 'fs'
import { SubsFile } from '../../config';

export const saveToFile = (channelIds: string[]): void => {
    fs.writeFileSync(SubsFile, channelIds, 'utf-8');
}

export const loadFromFile = (): string[] => {
    if (!fs.existsSync(SubsFile)) {
        return [];
    }

    return fs.readFileSync(SubsFile, 'utf-8').split(',');
}