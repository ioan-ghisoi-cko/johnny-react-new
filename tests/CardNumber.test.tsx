import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react";
import { CARD_FRAME, CARD_NUMBER_FRAME } from "../src/config/config";

import { CardNumber } from "../src/components/CardNumber";

let container: HTMLDivElement | null = null;
let root: ReturnType<typeof createRoot> | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container); // Initialize the root
});

afterEach(() => {
  if (root) {
    root.unmount(); // Use root.unmount for cleanup
    container?.remove();
    container = null;
    root = null;
  }
});

it("renders the card number placeholder with injected class name", () => {
  act(() => {
    root?.render(<CardNumber className="example" />);
  });
  expect((container?.firstChild as HTMLElement).className).toEqual(
    `${CARD_NUMBER_FRAME} example`
  );
});
