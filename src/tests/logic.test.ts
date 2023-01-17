/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-magic-numbers */
/* eslint-disable fp/no-nil */
import { describe, expect, it } from "vitest";

import { Context } from "../context/cardsContext";
import appReducer from "../logic/appReducer";
import getRandomSize from "../logic/getRandomSize";
import getTimeDifference from "../logic/getTimeDifference";
import shuffleArray from "../logic/shuffleArray";

describe("reducer", () => {
  describe("startGame", () => {
    it("should record the start time", () => {
      const context: Context = {
        cards          : [],
        currentCards   : [],
        score          : 0,
        shownComponents: new Set(),
        time           : {
          cards     : new Set(),
          difference: "0",
          start     : new Date(2021, 1, 1),
        },
      };
      const action           = {
        type: "started game",
      };
      const result           = appReducer(context, action);
      expect(result.time.start.getFullYear()).toBe(2023);
    });
  });

  describe("handleFirstClick", () => {
    it("should set clicked to true", () => {
      const context = {
        cards       : [],
        currentCards: [
          {
            clicked: false,
            id     : 1,
            img    : "https://picsum.photos/200/300",
          },
        ],
        score          : 0,
        shownComponents: new Set(),
        time           : {
          cards: new Set(),
          start: new Date(2022, 12, 1),
        },
      };
      const action  = {
        payload: {
          id: 1,
        },
        type: "clicked first time",
      };
      const result  = appReducer(context, action);
      expect(result.currentCards[ 0 ].clicked).toBe(true);
    });

    it("should add card time to time.cards", () => {
      const now               = new Date();
      const nowMinusOneMinute = new Date(now.setMinutes(now.getMinutes() - 1));
      const context           = {
        cards       : [],
        currentCards: [
          {
            clicked: false,
            id     : 1,
            img    : "https://picsum.photos/200/300",
          },
        ],
        score          : 0,
        shownComponents: new Set(),
        time           : {
          cards: new Set(),
          start: nowMinusOneMinute,
        },
      };
      const action            = {
        payload: {
          id: 1,
        },
        type: "clicked first time",
      };
      const result            = appReducer(context, action);
      const regex             = /\d{1,5}:\d{2}/u;
      expect([ ...result.time.cards ][ 0 ].timestamp).toMatch(regex);
    });

    it("should contain time difference", () => {
      const now               = new Date();
      const nowMinusOneMinute = new Date(now.setMinutes(now.getMinutes() - 1));
      const context           = {
        cards       : [],
        currentCards: [
          {
            clicked: false,
            id     : 1,
            img    : "https://picsum.photos/200/300",
          },
        ],
        score          : 0,
        shownComponents: new Set(),
        time           : {
          cards: new Set(),
          start: nowMinusOneMinute,
        },
      };
      const action            = {
        payload: {
          id: 1,
        },
        type: "clicked first time",
      };
      const result            = appReducer(context, action);
      const regex             = /\d{1,5}:\d{2}/u;
      expect(result.time.difference).toMatch(regex);
    });
  });

  describe("clicked second time", () => {
    it("should have general time difference", () => {
      const now               = new Date();
      const nowMinusOneMinute = new Date(now.setMinutes(now.getMinutes() - 1));
      const context           = {
        cards       : [],
        currentCards: [
          {
            clicked: false,
            id     : 1,
            img    : "https://picsum.photos/200/300",
          },
          {
            clicked: false,
            id     : 2,
            img    : "https://picsum.photos/200/300",
          },
        ],
        score          : 0,
        shownComponents: new Set(),
        time           : {
          cards: new Set(),
          start: nowMinusOneMinute,
        },
      };
      const action            = {
        payload: {
          id: 2,
        },
        type: "clicked second time",
      };
      const result            = appReducer(context, action);
      expect(result.time.difference).toMatch(/\d{1,5}:\d{2}/u);
    });
  });
});

describe("shuffle function", () => {
  it("should shuffle the array", () => {
    const array  = [ 1, 2, 3, 4, 5 ];
    const result = shuffleArray(array);
    expect(result).not.toStrictEqual(array);
  });
});

describe("random size function", () => {
  it("should give a number between range rounded to 100", () => {
    const min               = 100;
    const max               = 600;
    const randomSize        = getRandomSize(min, max);
    const [ width, height ] = randomSize.split("/");
    expect(Number(width)).toBeGreaterThanOrEqual(min);
    expect(Number(width)).toBeLessThanOrEqual(max);
    expect(Number(height)).toBeGreaterThanOrEqual(min);
    expect(Number(height)).toBeLessThanOrEqual(max);
    expect(Number(width) % 100).toBe(0);
    expect(Number(height) % 100).toBe(0);
  });
});

describe("getTimeDifference", () => {
  it("should give a time difference in minutes and seconds", () => {
    const formerDate = new Date();
    const latterDate = new Date();
    latterDate.setMinutes(formerDate.getMinutes() + 1);
    latterDate.setSeconds(formerDate.getSeconds() + 1);
    expect(getTimeDifference(formerDate, latterDate)).toBe("1:01");
  });
});
