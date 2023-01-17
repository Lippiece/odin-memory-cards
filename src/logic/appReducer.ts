import CardType from "../@types/Card";
import { Context } from "../context/cardsContext";
import getCards from "./getCards";
import shuffleArray from "./shuffleArray";
import getTimeDifference from "./getTimeDifference";

interface Action {
  type: string;
  payload: CardType | number | Date;
}

const appReducer = (context: Context, action: Action): Context => {
  const setClicked = () =>
    context.currentCards.map(card =>
      card.id === action.payload.id ? { ...card, clicked: true } : card,
    );

  const handleFirstClick = () => {
    const incrementedScore = context.score + 1;
    const thisCardTimestamp = {
      id: action.payload.id,
      timestamp: getTimeDifference(context.time.start, new Date()),
    };
    const updatedTimestamps = new Set([
      ...context.time.cards,
      thisCardTimestamp,
    ]);
    const result = {
      ...context,
      currentCards: shuffleArray(setClicked()),
      score: incrementedScore,
      shownComponents:
        incrementedScore === context.currentCards.length
          ? new Set(["scoreboard", "main menu"])
          : context.shownComponents,
      time: {
        ...context.time,
        cards: updatedTimestamps,
        difference: getTimeDifference(context.time.start, new Date()),
      },
    };
    return result;
  };

  const endGame = () => ({
    ...context,
    shownComponents: new Set(["scoreboard", "main menu"]),
    time: {
      ...context.time,
      difference: getTimeDifference(context.time.start, new Date()),
    },
  });

  const setDifficulty = () => ({
    ...context,
    currentCards: context.cards.slice(0, action.payload),
    score: context.score,
  });

  const startGame = () => {
    const cards = getCards();
    const currentCards = cards.slice(0, context.currentCards.length);
    return {
      ...context,
      cards: cards,
      currentCards: currentCards,
      score: 0,
      shownComponents: new Set(["game screen"]),
      time: {
        start: new Date(),
        cards: new Set(),
      },
    };
  };

  const actions = {
    "clicked first time": () => handleFirstClick(),
    "clicked second time": () => endGame(),
    "set difficulty": () => setDifficulty(),
    "started game": () => startGame(),
  };

  return actions[action.type]?.() || console.error("Unhandled action type");
};

export default appReducer;
