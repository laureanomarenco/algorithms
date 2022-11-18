import { describe, expect, it } from "vitest";
import telephoneNumberValidator from "../functions/telephoneNumberValidator";


describe('Thelepone Number Validator', () => {
    it('should be a function', () => {
        expect(typeof telephoneNumberValidator).toBe('function')
    })
    it('should return true if the input its a valid number in USA', () => {
        expect(telephoneNumberValidator('555 555 5555')).toBe(true)
    })
    it('should return true even if it the number has the USA country code', () => {
        expect(telephoneNumberValidator('1 555 555 5555')).toBe(true)
    })
    it('should return true even if the input have special characters between numbers', () => {
        expect(telephoneNumberValidator('1(555)555-5555')).toBe(true)
        expect(telephoneNumberValidator('555-555-5555')).toBe(true)
        expect(telephoneNumberValidator('(555)555-5555')).toBe(true)
    })
    it('should return flase if the intpus is not a valid number', () => {
        expect(telephoneNumberValidator('1 555 5JE 5555')).toBe(false)
    })
})