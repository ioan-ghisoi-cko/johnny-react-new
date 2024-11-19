import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { EXPIRY_DATE_FRAME } from "../src/config/config";

import { ExpiryDate } from "../src/components/ExpiryDate";

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

it("renders expiry date placeholder with injected class name", () => {
  act(() => {
    render(<ExpiryDate className="example" />, container as Element);
  });
  expect((container?.firstChild as HTMLElement).className).toEqual(
    `${EXPIRY_DATE_FRAME} example`
  );
});
