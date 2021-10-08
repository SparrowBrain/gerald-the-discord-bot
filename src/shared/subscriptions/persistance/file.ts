import fs from 'fs'

export const saveToFile = (channelIds: string[], file: string): void => {
  fs.writeFileSync(file, channelIds, 'utf-8')
}

export const loadFromFile = (file: string): string[] => {
  if (!fs.existsSync(file)) {
    return []
  }

  return fs.readFileSync(file, 'utf-8').split(',')
}
