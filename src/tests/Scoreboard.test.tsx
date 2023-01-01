/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Scoreboard from "../components/Scoreboard";

const setup = () => render(<Scoreboard score={0} />);

describe("Scoreboard", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("scoreboard")).toBeDefined();
  });

  it("renders the form", () => {
    setup();
    expect(screen.getByTestId("form")).toBeDefined();
    expect(screen.getByRole("textbox", { name: "Name" })).toBeDefined();
    expect(screen.getByText("John")).toBeDefined();
  });

  it("displays the submitted name", async () => {});

  it("hides the form after submission", async () => {
    setup();
    expect(screen.getByTestId("form")).toBeDefined();
    expect(screen.queryByTestId("form")?.getAttribute("hidden")).toBeFalsy();
    userEvent.type(screen.getByRole("textbox", { name: "Name" }), "Jane");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    await waitFor(() => {
      expect(screen.queryByTestId("form")?.getAttribute("hidden")).toBe("");
    });
  });

  it("displays the score", () => {
    setup();
    expect(screen.getByText("Score: 0")).toBeDefined();
  });
});
