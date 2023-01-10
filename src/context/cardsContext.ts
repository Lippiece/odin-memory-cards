import { createContext } from "react";

import Context from "../@types/Context";
import getCards from "../logic/getCards";

export const defaultContext: Context = {
  cards          : getCards(),
  currentCards   : getCards().slice(0, 5),
  score          : 0,
  shownComponents: new Set([ "main menu" ]),
};
export const CardsContext = createContext(defaultContext);
export const CardsDispatchContext = createContext(defaultContext);
