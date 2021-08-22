/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Story from "../components/Story/Story";
import "@testing-library/jest-dom";

describe("<Story/>", () => {
  it("Should render", () => {
    const article = {
      source: {
        id: null,
        name: "The Sun",
      },
      author: "Milica Cosic",
      title:
        "Love Island 2021: Liberty and Jake QUIT villa just days before final as series reunion confirmed... - The Sun",
      description: "",
      url: "https://www.thesun.co.uk/tv/15913321/love-island-2021-liberty-jake-news-millie-final/",
      urlToImage:
        "https://www.thesun.co.uk/wp-content/uploads/2021/08/Love-Island-teaser-1-1.png?strip=all&quality=100&w=1200&h=800&crop=1",
      publishedAt: "2021-08-21T10:45:11Z",
      content:
        "LOVE ISLAND FANS SAY LIBERTY AND KAZ ARE REAL WINNERS OF THE SHOW AFTER HEARTFELT CHAT FOLLOWING JAKE BREAK-UP\r\nViewers were left in tears when she slept outisde with Liberty, so she wouldn't have to… [+831 chars]",
    };

    render(<Story id="123" article={article} />);
    const articleCard = screen.getByRole("article");
    expect(articleCard).toBeInTheDocument();
  });
});
