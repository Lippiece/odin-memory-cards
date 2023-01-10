/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-magic-numbers */
/* eslint-disable fp/no-nil */
import { describe, expect, it } from "vitest";

import getRandomSize from "../logic/getRandomSize";
import shuffleArray from "../logic/shuffleArray";

describe("shuffle function", () => {
  it("should shuffle the array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(shuffleArray(array)).not.toStrictEqual(array);
  });
});

describe("random size function", () => {
  it("should give a number between range rounded to 100", () => {
    const min = 100;
    const max = 600;
    const randomSize = getRandomSize(min, max);
    const [width, height] = randomSize.split("/");
    expect(Number(width)).toBeGreaterThanOrEqual(min);
    expect(Number(width)).toBeLessThanOrEqual(max);
    expect(Number(height)).toBeGreaterThanOrEqual(min);
    expect(Number(height)).toBeLessThanOrEqual(max);
    expect(Number(width) % 100).toBe(0);
    expect(Number(height) % 100).toBe(0);
  });
});
