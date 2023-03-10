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
      expect(screen.getByDisplayValue("3").value).toBe("3");
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

  it("hides the form after submission", async () => {
    setup();

    userEvent.type(screen.getByTestId("nameInput"), "John Doe");
    userEvent.click(screen.getByTestId("submit"));

    await waitFor(() => {
      expect(screen.queryByTestId("form")?.getAttribute("hidden")).toBeFalsy();
    });
  });

  it("Shows time taken to complete the game", async () => {
    setup();
    const cards = Array(5)
      .fill(0)
      .map((_, index) => screen.getByTestId(`card-${index + 1}`));

    cards.map(card => userEvent.click(card));
    await waitFor(() => {
      expect(screen.getByTestId("timings").textContent).toContain(
        "Time taken to complete the game:"
      );
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
