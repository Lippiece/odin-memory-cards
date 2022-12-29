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

  it("should display all options when the select is clicked", async () => {
    setup();

    userEvent.click(screen.getByText("Easy"));
    await waitFor(() => {
      expect(screen.getAllByText("Easy")).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getAllByText("Medium")).toBeDefined();
    });
    await waitFor(() => {
      expect(screen.getAllByText("Hard")).toBeDefined();
    });
  });

  it("should display the selected option when the select is clicked", async () => {
    setup();

    const selectElement = screen.getByText("Easy");

    userEvent.click(selectElement);
    await waitFor(() => {
      expect(screen.getByText("Medium")).toBeDefined();
    });

    userEvent.click(screen.getByText("Medium"));
    await waitFor(() => {
      expect(screen.getByText("Medium")).toBeDefined();
    });
  });
});
