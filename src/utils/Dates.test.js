import { describe, expect, test } from "vitest";
import { getDaysBetween } from "./Dates";

describe("Dates function", () => {
    test("get days between", async () => {
        const days = getDaysBetween("01-01-2020", "01-05-2020")
        expect(days).toBe(120);
    })
})