import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react";
import { SCHEME_CHOICE_FRAME } from "../src/config/config";

import { SchemeChoice } from "../src/components/SchemeChoice";

let container: HTMLDivElement | null = null;
let root: ReturnType<typeof createRoot> | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container); // Initialize the root
});

afterEach(() => {
  if (root) {
    root.unmount(); // Clean up
    container?.remove();
    container = null;
    root = null;
  }
});

it("renders SchemeChoice placeholder with injected class name", () => {
  act(() => {
    root?.render(<SchemeChoice className="example" />);
  });

  expect((container?.firstChild as HTMLElement).className).toEqual(
    `${SCHEME_CHOICE_FRAME} example`
  );
});
