import { describe, expect, it } from "vitest";
import palindromeChecker from "../palindromeChecker.js";

describe('palindrome checker', () => {
    it('should be a function', () => {
        expect(typeof palindromeChecker).toBe('function')
    })
    it('should throw if not string provided as parameter', () => {
        expect(() => palindromeChecker(14)).toThrow()
    })
    it('should always return false if the input its not a palindrome', () => {
        expect(palindromeChecker('ABC')).toBe(false)
    })
    it('should always return true if the input its a palindrome', () => {
        expect(palindromeChecker('ABBA')).toBe(true)
    })
    it('should return true even if the input contains special characters', () => {
        expect(palindromeChecker('ABB_A')).toBe(true)
    })
})