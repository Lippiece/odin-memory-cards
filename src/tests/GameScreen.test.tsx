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
  describe,
  expect,
  it,
} from "vitest";

import GameScreen from "../components/GameScreen";

const setup = () => {

  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300",
    },
  ];
  render( <GameScreen
    cards={ cards }
  /> );

  return cards.length;

};

describe(
  "GameScreen",
  () => {

    it(
      "renders",
      () => {

        setup();
        expect( screen.getByTestId( "game-screen" ) )
          .toBeDefined();

      }
    );

    it(
      "renders all the cards",
      () => {

        const cardsLength = setup();
        expect( screen.getAllByTestId( "card" ) )
          .toHaveLength( cardsLength );

      }
    );

    it(
      "should render cards shuffled",
      async () => {

        setup();
        const cards = screen.getAllByTestId( "card" );
        userEvent.click( cards[ 0 ] );
        await waitFor( () => {

          expect( screen.getAllByTestId( "card" ) )
            .not.toEqual( cards );

        } );

      }
    );

  }
);
