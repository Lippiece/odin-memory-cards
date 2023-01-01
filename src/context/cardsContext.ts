import { Context, createContext, useContext } from "react";

import CardType from "../@types/Card";

const source = "https://picsum.photos/200s/300";
export const defaultCards: CardType[] = [
  {
    id: 1,
    image: source,
  },
  {
    id: 2,
    image: source,
  },
  {
    id: 3,
    image: source,
  },
  {
    id: 4,
    image: source,
  },
  {
    id: 5,
    image: source,
  },
];
export const CardsContext = createContext(defaultCards);
export const cardsDispatchContext = createContext(defaultCards);
