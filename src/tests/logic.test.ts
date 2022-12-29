/* eslint-disable fp/no-unused-expression */
/* eslint-disable no-magic-numbers */
/* eslint-disable fp/no-nil */
import {
  describe,
  expect,
  it,
} from "vitest";

import shuffleArray from "../logic/shuffleArray";

describe(
  "shuffle function",
  () => {

    it(
      "should shuffle the array",
      () => {

        const array = [
          1,
          2,
          3,
          4,
          5,
        ];
        const shuffledArray = shuffleArray( array );
        expect( shuffledArray )
          .not
          .toStrictEqual( array );

      }
    );

  }
);
