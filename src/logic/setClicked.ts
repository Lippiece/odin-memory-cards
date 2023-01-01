import { Just, Maybe, Nothing, maybe } from "sanctuary";
import CardType from "../@types/Card";
const setClicked = (maybeCard: typeof Maybe<CardType>) => {
  return maybe(Nothing)(card_ =>
    Just({
      ...card_,
      clicked: true,
    }),
  )(maybeCard);
};

export default setClicked;
