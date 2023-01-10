import { createContext } from "react";
import getRandomSize from "../logic/getRandomSize";
const _cards = Array.from({ length: 15 }, (value, index) => ({
  id: index,
  image: `https://picsum.photos/${getRandomSize(100, 600)}`,
}));

export const defaultCards = {
  cards: _cards,
  score: 0,
  toShow: _cards.slice(0, 5),
};
export const CardsContext = createContext(defaultCards);
export const CardsDispatchContext = createContext(defaultCards);
