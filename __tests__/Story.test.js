/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Story from "../components/Story/Story";
import "@testing-library/jest-dom";
import { mockData } from "../__mocks__/mock-data";

describe("<Story/>", () => {
  const article = mockData.articles[0];

  it("Should render", () => {
    render(<Story article={article} />);
    const articleCard = screen.getByRole("article");
    expect(articleCard).toBeInTheDocument();
  });
});
