import CardType from "../@types/Card";
import Context from "../@types/Context";
import getCards from "./getCards";
import shuffleArray from "./shuffleArray";

interface Action {
  type: string;
  payload: CardType | number;
}

const appReducer = (context: Context, action: Action): Context => {
  const setClicked = (cards: CardType[], cardId: number) =>
    cards.map(card => (card.id === cardId ? { ...card, clicked: true } : card));

  const handleFirstClick = () => ({
    ...context,
    currentCards: shuffleArray(
      setClicked(context.currentCards, action.payload.id)
    ),
    score          : context.score + 1,
    shownComponents:
      context.score + 1 === context.currentCards.length
        ? new Set([ "scoreboard", "main menu" ])
        : context.shownComponents,
  });

  const endGame = () => ({
    ...context,
    cards          : getCards(),
    currentCards   : getCards().slice(0, context.currentCards.length),
    shownComponents: new Set([ "scoreboard", "main menu" ]),
  });

  // TODO: reset clicked status on new game

  const setDifficulty = (difficulty: number) => ({
    ...context,
    currentCards: context.cards.slice(0, difficulty),
    score       : context.score,
  });

  const startGame = () => ({
    cards          : getCards(),
    currentCards   : getCards().slice(0, context.currentCards.length),
    score          : 0,
    shownComponents: new Set([ "game screen" ]),
  });

  const actions = {
    "clicked first time" : () => handleFirstClick(),
    "clicked second time": () => endGame(),
    "set difficulty"     : () => setDifficulty(action.payload),
    "started game"       : () => startGame(),
  };

  return actions[ action.type ]?.() || console.error("Unhandled action type");
};

export default appReducer;
