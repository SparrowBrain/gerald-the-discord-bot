import { findNewEntries } from './findNewEntries'

describe('findNewEntries', () => {
    it('returns passed entries when nothing is known', () => {
        const entries = ['abc', 'xyz']
        const result = findNewEntries(new Set(), entries)
        expect(result).toEqual(entries)
    })

    it('returns no entries when nothing is passed in', () => {
        const knownEntries = new Set(['abc', 'xyz'])
        const result = findNewEntries(knownEntries, [])
        expect(result).toEqual([])
    })

    it('returns new entry when one is known', () => {
        const knownEntries = new Set(['abc', 'xyz'])
        const entries = ['abc', 'ijk']
        const result = findNewEntries(knownEntries, entries)
        expect(result).toEqual(['ijk'])
    })
})
