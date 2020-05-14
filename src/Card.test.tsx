import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "./components/Card";

const contributions = [{
    "key": "Open Source PRs",
    "projects": [{
        "src": "js-ipfs",
        "type": "link",
        "link": "https://github.com/grantlouisherman/js-ipfs/commit/4ad104d85d813c2016f4abcafb46dfb5f0bba23b"
      },
      {
        "src": "script-8",
        "type": "link",
        "link": "https://github.com/script-8/script-8.github.io/pull/163"
      },
      {
        "src": "script-8",
        "type": "link",
        "link": "https://github.com/script-8/script-8.github.io/pull/197/commits"
      }
    ]
  }];

test("renders without crashing", () => {
  const { baseElement } = render(
    <Card title={"test"} cardContent={"test"} Project={contributions} />
  );
  expect(baseElement).toBeDefined();
});
test("renders without crashing with only using default props", () => {
  const { baseElement } = render(
    <Card />
  );
  expect(baseElement).toBeDefined();
});
test("renders without crashing with only using default props for title and card content", () => {
  const { baseElement } = render(
    <Card />
  );
  expect(screen.queryByText("Card")).toBeInTheDocument();
  expect(screen.queryByText("Card content")).toBeInTheDocument();
});
test("renders with proper text", () => {
  const { baseElement } = render(
    <Card title={"title"} cardContent={"cardContent"} Project={contributions} />
  );
  expect(screen.queryByText("title")).toBeInTheDocument();
  expect(screen.queryByText("cardContent")).toBeInTheDocument();
});
