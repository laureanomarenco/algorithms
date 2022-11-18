import { describe, expect, it } from "vitest";
import cashRegister from "../functions/cashRegister";

describe.skip('Cash Register', () => {
    it('should be a function', () => {
        expect(typeof cashRegister).toBe('function')
    })
    it('should always return an object with a status key and a change key', () => {
        expect(cashRegister()).toBe()
    })
})