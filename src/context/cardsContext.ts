import { createContext } from "react";

const _cards = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    image: "https://picsum.photos/400/300",
  },
  {
    id: 4,
    image: "https://picsum.photos/400/400",
  },
  {
    id: 5,
    image: "https://picsum.photos/500/400",
  },
];
export const defaultCards = {
  cards: _cards,
  score: 0,
  toShow: _cards.slice(0, 5),
};
export const CardsContext = createContext(defaultCards);
export const CardsDispatchContext = createContext(defaultCards);
