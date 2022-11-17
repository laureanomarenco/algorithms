import romanNumConverter from "../romanNumConverter";
import { describe, expect, it } from "vitest";

describe('roman numeral converter', () => {
    it('should be a function', () => {
        expect(typeof romanNumConverter).toBe('function')
    })
    it('should throw an error if the input its not a number', () => {
        expect(() => romanNumConverter('string')).toThrow()
    })
    it('should throw an error if the input its mayor to 3999', () => {
        expect(() => romanNumConverter(4000)).toThrow()
    })
    it('should return the number passed in roman form', () => {
        
        expect(romanNumConverter(3)).toBe('III')
        expect(romanNumConverter(4)).toBe('IV')
        expect(romanNumConverter(5)).toBe('V')
        expect(romanNumConverter(9)).toBe('IX')
        expect(romanNumConverter(8)).toBe('VIII')
        expect(romanNumConverter(83)).toBe('LXXXIII')
        expect(romanNumConverter(29)).toBe('XXIX')
        expect(romanNumConverter(649)).toBe('DCXLIX')
        expect(romanNumConverter(798)).toBe('DCCXCVIII')
        expect(romanNumConverter(44)).toBe('XLIV')
        expect(romanNumConverter(3999)).toBe('MMMCMXCIX')
        expect(romanNumConverter(1004)).toBe('MIV')

        




        
    })
})