import { describe, expect, it } from "vitest";
import caesarsClipher from "../functions/caesarsClipher";

describe.skip('Caesars Clipher', () => {
    it('should be a function', () => {
        expect(typeof caesarsClipher).toBe('function')
    })
    it('should throw if the argument passed is not a string', () => {
        expect(() => caesarsClipher(25)).toThrow()
    })
    it('should return a decoded string', () => {
        expect(caesarsClipher('YNHERNAB ZNERAPB')).toBe('LAUREANO MARENCO')
        expect(caesarsClipher('SERR')).toBe('FREE')
    })
    it('should return a decoded string no changing specials characters', () => {
        expect(caesarsClipher('YNHERNAB-ZNERAPB')).toBe('LAUREANO-MARENCO')
        expect(caesarsClipher('SERR!')).toBe('FREE!')
    })
})