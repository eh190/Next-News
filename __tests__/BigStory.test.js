/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import BigStory from "../components/BigStory/BigStory";
import "@testing-library/jest-dom";
import { mockData } from "../__mocks__/mock-data";

describe("<BigStory/>", () => {
  it("Should render", () => {
    const article = mockData.articles[0];

    render(<BigStory id="123" leadStory={article} />);
    const articleCard = screen.getByRole("article");
    expect(articleCard).toBeInTheDocument();
  });
});
