### Next News

A next.js news app which shows a selection of news from around the world in different categories. Utilises the [News API](https://newsapi.org/) to fetch current news stories.

### Project Links

- [Live site](https://next-news-chi.vercel.app/) 
- [Design](https://www.figma.com/file/q7KAfbdnGEvaW38EkTdUfg/Next-News?node-id=0%3A1)

- Created navbar and footer components, and setup index.js as placeholder for all pages.
- Created Content, Story and BigStory components. I could then style the content, which would act as the workhorse of the app content and just place that into each page, passing the relative data collected in the fetch request.
  -The data fetch for each page uses getStaticProps but with an additional condition: revalidate. This means I can rebuild the site at an allotted time (1 hour) to update the news stories, but without having to continually re-render the page for each page request.
  -Added Head tags for each page and the app to improve SEO and accessibility.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
