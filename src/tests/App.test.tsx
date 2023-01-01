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
  it("renders the main menu", () => {
    setup();
    expect(screen.getByTestId("main-menu")).toBeDefined();
  });
  it("renders the GameScreen", () => {
    setup();
    expect(screen.getByTestId("game-screen")).toBeDefined();
  });
  it("renders the scoreboard", () => {
    setup();
    expect(screen.getByTestId("scoreboard")).toBeDefined();
  });

  it("increases the score when a card is clicked", async () => {
    setup();
    const card = screen.getByTestId("card-1");

    userEvent.click(card);
    await waitFor(() => {
      expect(screen.getByText("Score: 1")).toBeDefined();
    });
  });
});
