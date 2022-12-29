/* eslint-disable fp/no-unused-expression */
/* eslint-disable fp/no-nil */
import {
  act,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";

import Card from "../components/Card";

const setup = () =>
  render( <Card
    card={ {
      image: "https://via.placeholder.com/150",
      title: "Card Title",
      text: "Card Text",
    } }
  /> );

describe( "Card", () => {

  it( "renders", () => {
    setup();
    expect( screen.getByTestId( "card" ) ).toBeTruthy();
  } );
} );
