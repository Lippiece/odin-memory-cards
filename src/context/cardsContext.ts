import { createContext } from "react";

import CardType from "../@types/Card";

export const defaultCards = {
  cards: [
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
  ],
  score: 0,
  toShow: 5,
};
export const CardsContext = createContext(defaultCards);
export const CardsDispatchContext = createContext(defaultCards);
