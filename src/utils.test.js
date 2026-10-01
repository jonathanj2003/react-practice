import { describe, it, expect } from "vitest";
import { isValidEmail } from "./utils.js";

describe("isValidEmail", () => {
    it("returns true for a normal email", () => {
        expect(isValidEmail("jonathan@exapmle.com")).toBe(true);
    });

    it("returns false when there's no @ symbol", () => {
        expect(isValidEmail("jonathanexample.com")).toBe(false);
    });
});