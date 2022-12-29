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

import App from "../App";

const setup = () =>
  render( <App /> );

  
