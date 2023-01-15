/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Scoreboard from "../components/Scoreboard";

const setup = () => render(<Scoreboard />);
describe("Scoreboard", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("scoreboard")).toBeDefined();
  });

  it("displays the submitted name", async () => {});

  it("displays the score", () => {
    setup();
    expect(screen.getByText("Score: 0")).toBeDefined();
  });
});
