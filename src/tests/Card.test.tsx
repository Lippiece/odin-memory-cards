/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Card from "../components/Card";

const setup = () =>
  render(
    <Card
      card={{
        id: 1,
        image: "https://via.placeholder.com/150",
      }}
    />,
  );

describe("Card", () => {
  it("renders", () => {
    setup();
    expect(screen.getByTestId("card")).toBeDefined();
    expect(screen.getByAltText("card")).toBeDefined();
  });
});
