/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Card from "../components/Card";
describe("Card", () => {
  it("renders", () => {
    render(
      <Card
        card={{
          id: 1,
          image: "https://picsum.photos/200/300",
        }}
      />,
    );
    expect(screen.getByTestId("card-1")).toBeDefined();
    expect(screen.getByAltText("card")).toBeDefined();
  });
});
