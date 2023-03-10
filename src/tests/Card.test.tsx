/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Card from "../components/Card";
import GameScreen from "../components/GameScreen";

const setup = () =>
  render(<GameScreen />);

describe("Card", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("card-1")).toBeDefined();
    expect(screen.getByAltText("card-1")).toBeDefined();
    expect(screen.getAllByTestId("card-image")).toHaveLength(5);
  });
});
