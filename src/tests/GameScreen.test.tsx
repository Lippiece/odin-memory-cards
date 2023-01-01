/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import GameScreen from "../components/GameScreen";

const setup = () => {
  const source = "https://picsum.photos/200/300";
  const cards = [
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
  render(<GameScreen inputCards={cards} />);

  return cards.length;
};

describe("GameScreen", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("game-screen")).toBeDefined();
  });

  it("renders all the cards", () => {
    const cardsLength = setup();
    const images = screen.getAllByTestId("card-image");
    expect(images).toHaveLength(cardsLength);
  });

  it("renders cards shuffled", async () => {
    setup();
    const images = screen.getAllByTestId("card-image");
    userEvent.click(images[0]);
    await waitFor(() => {
      expect(screen.getAllByTestId("card-image")).not.toEqual(images);
    });
  });
});
