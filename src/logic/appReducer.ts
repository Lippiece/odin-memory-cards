import CardType from "../@types/Card";
import { Context } from "../context/cardsContext";
import getCards from "./getCards";
import shuffleArray from "./shuffleArray";

interface Action {
  type: string;
  payload: CardType | number;
}

const appReducer = (context: Context, action: Action): Context => {
  const setClicked = () =>
    context.currentCards.map(card =>
      card.id === action.payload.id ? { ...card, clicked: true } : card,
    );

  const handleFirstClick = () => {
    const updatedTimestamps = new Set(
      [...context.time.cards].map(card => {
        const timestamp =
          card.id === action.payload.id
            ? Date.now() - card.timestamp
            : card.timestamp;
        return {
          id: card.id,
          timestamp: timestamp,
        };
      }),
    );
    return {
      ...context,
      currentCards: shuffleArray(setClicked()),
      score: context.score + 1,
      shownComponents:
        context.score + 1 === context.currentCards.length
          ? new Set(["scoreboard", "main menu"])
          : context.shownComponents,
      time: {
        ...context.time,
        cards: updatedTimestamps,
      },
    };
  };

  const endGame = () => ({
    ...context,
    cards: getCards(),
    currentCards: getCards().slice(0, context.currentCards.length),
    shownComponents: new Set(["scoreboard", "main menu"]),
    time: {
      ...context.time,
      general: Date.now() - context.time.general,
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
    const cardsTimestamps = new Set(
      currentCards.map(card => ({
        id: card.id,
        timestamp: Date.now(),
      })),
    );
    return {
      cards: cards,
      currentCards: currentCards,
      score: 0,
      shownComponents: new Set(["game screen"]),

      time: {
        general: Date.now(),
        cards: cardsTimestamps,
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
