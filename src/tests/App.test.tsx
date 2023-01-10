/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "../App";

const setup = () => render(<App />);

describe("App", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("app")).toBeDefined();
  });
});

describe("difficulty", () => {
  it("changes the cards number when the difficulty is changed", async () => {
    setup();

    const cards = screen.getByTestId("game-screen");
    expect(cards.children.length).toBe(5);

    const difficulty = screen.getByDisplayValue("5");
    userEvent.clear(difficulty);
    userEvent.click(difficulty);
    userEvent.type(difficulty, "3");
    await waitFor(() => {
      expect(difficulty.value).toBe("3");
    });

    await waitFor(() => {
      expect(screen.getByTestId("game-screen").children.length).toBe(3);
    });
  });
});

describe("scoreboard", () => {
  it("renders the scoreboard", () => {
    setup();
    expect(screen.getByTestId("scoreboard")).toBeDefined();
  });

  it("increases the score when a card is clicked", async () => {
    setup();
    const card = screen.getByTestId("card-1");

    userEvent.click(card);
    await waitFor(() => {
      expect(screen.getByTestId("score").textContent).toBe("Score: 1");
    });
  });

  it("increases the score when a different card is clicked", async () => {
    setup();
    const card1 = screen.getByTestId("card-1");
    const card2 = screen.getByTestId("card-2");
    const score = screen.getByTestId("score");

    userEvent.click(card1);
    await waitFor(() => {
      expect(score.textContent).toBe("Score: 1");
    });
    userEvent.click(card2);
    await waitFor(() => {
      expect(score.textContent).toBe("Score: 2");
    });
  });
});

describe("main menu", () => {
  it("renders the main menu", () => {
    setup();
    expect(screen.getByTestId("main-menu")).toBeDefined();
  });
  it("is shown initially", () => {
    setup();
    expect(screen.getByTestId("main-menu").getAttribute("hidden")).not.toBe("");
  });
  it("is shown when the game is over", async () => {
    setup();
    userEvent.click(screen.getByTestId("start-game"));

    userEvent.click(screen.getByTestId("card-1"));
    userEvent.click(screen.getByTestId("card-2"));
    userEvent.click(screen.getByTestId("card-3"));
    userEvent.click(screen.getByTestId("card-4"));
    userEvent.click(screen.getByTestId("card-5"));

    await waitFor(() => {
      expect(screen.getByTestId("main-menu").getAttribute("hidden")).toBe("");
    });
  });

  it("starts the game when the start button is clicked", async () => {
    setup();
    userEvent.click(screen.getByTestId("start-game"));
    await waitFor(() => {
      expect(
        screen.getByTestId("main-menu").getAttribute("hidden")
      ).toBeFalsy();
    });
  });
});

describe("game screen", () => {
  it("renders the GameScreen", () => {
    setup();
    expect(screen.getByTestId("game-screen")).toBeDefined();
  });

  it("renders the game over screen when the score is max", async () => {
    setup();

    userEvent.click(screen.getByTestId("card-1"));
    userEvent.click(screen.getByTestId("card-2"));
    userEvent.click(screen.getByTestId("card-3"));
    userEvent.click(screen.getByTestId("card-4"));
    userEvent.click(screen.getByTestId("card-5"));

    await waitFor(() => {
      expect(screen.getByTestId("game-screen").getAttribute("hidden")).toBe("");
    });
  });
});
