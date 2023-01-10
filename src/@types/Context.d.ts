import CardType from "./Card";
interface Context {
  cards: CardType[];
  currentCards: CardType[];
  score: number;
  shownComponents: Set<string>;
}
export default Context;
