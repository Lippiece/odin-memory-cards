import { createContext } from "react";

import getCards from "../logic/getCards";
import CardType from "../@types/Card";
export interface Context {
  cards: CardType[];
  currentCards: CardType[];
  score: number;
  shownComponents: Set<string>;
  time: {
    general: number,
    cards: Set<{
      id: number,
      timestamp: number,
    }>,
  };
}

export const defaultContext: Context = {
  cards: getCards(),
  currentCards: getCards().slice(0, 5),
  score: 0,
  shownComponents: new Set(["main menu"]),
  time: {
    general: 0,
    cards: new Set(),
  },
};
export const CardsContext = createContext(defaultContext);
export const CardsDispatchContext = createContext(defaultContext);
