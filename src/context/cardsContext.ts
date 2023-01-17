import { createContext } from "react";

import CardType from "../@types/Card";
import getCards from "../logic/getCards";

export interface Context {
  cards: CardType[];
  currentCards: CardType[];
  score: number;
  shownComponents: Set<string>;
  time: {
    start: Date,
    difference: string,
    cards: Set<{
      id: number,
      timestamp: Date | string,
    }>,
  };
}

export const defaultContext: Context = {
  cards          : getCards(),
  currentCards   : getCards().slice(0, 5),
  score          : 0,
  shownComponents: new Set([ "main menu" ]),
  time           : {
    cards     : new Set(),
    difference: "0",
    start     : new Date(),
  },
};
export const CardsContext = createContext(defaultContext);
export const CardsDispatchContext = createContext(defaultContext);
