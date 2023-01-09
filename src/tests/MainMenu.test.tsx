/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import MainMenu from "../components/MainMenu";

const setup = () => render(<MainMenu />);

describe("MainMenu component", () => {
  it("should render the component", () => {
    setup();

    expect(screen.getByText("Main Menu")).toBeDefined();

    expect(screen.getByText("Start Game")).toBeDefined();
  });

  it("should render the difficulty input", () => {
    setup();

    expect(screen.getByLabelText("Difficulty")).toBeDefined();

  });
});
