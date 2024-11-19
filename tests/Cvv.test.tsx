import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { CVV_FRAME } from "../src/config/config";

import { Cvv } from "../src/components/Cvv";

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("renders CVV placeholder with injected class name", () => {
  act(() => {
    render(<Cvv className="example" />, container as Element);
  });
  expect((container?.firstChild as HTMLElement).className).toEqual(
    `${CVV_FRAME} example`
  );
});
