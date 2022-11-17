import romanNumConverter from "../romanNumConverter";
import { describe, expect, it } from "vitest";

describe('roman numeral converter', () => {
    it('should be a function', () => {
        expect(typeof romanNumConverter).toBe('function')
    })
})