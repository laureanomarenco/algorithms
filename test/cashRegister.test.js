import { describe, expect, it } from "vitest";
import cashRegister from "../functions/cashRegister";

describe("Cash Register", () => {
  it("should be a function", () => {
    expect(typeof cashRegister).toBe("function");
  });
  it("should return status insufficient and empty change key if the price is not enough", () => {
    expect(
      cashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0.1],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ])
    ).toStrictEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
  });
  it("should return status closed and cid in change key if the change in cid its equal to change due", () => {
    expect(
      cashRegister(19.5, 20, [
        ["PENNY", 0],
        ["NICKEL", 0.5],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ])
    ).toStrictEqual({
      status: "CLOSED",
      change: [
        ["PENNY", 0],
        ["NICKEL", 0.5],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    });
  });
  it("should return status open and the respective change in cid", () => {
    expect(
      cashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    ).toStrictEqual({
      status: "OPEN",
      change: [["QUARTER", 0.5]],
    });
    expect(
      cashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    ).toStrictEqual({
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    });
  });
});
