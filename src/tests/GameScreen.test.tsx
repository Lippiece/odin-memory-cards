/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import GameScreen from "../components/GameScreen";

const setup = () => {
  render(<GameScreen />);
  return screen.getByTestId("game-screen");
};

describe("GameScreen", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("game-screen")).toBeDefined();
  });

  it("renders all the cards", () => {
    setup();
    const images = screen.getAllByTestId("card-image");
    expect(images).toHaveLength(5);
  });

  it("renders cards shuffled on click", async () => {});
});
