# CineMatch Movie Recommendation System

A small browser-based movie recommender you can run without installing anything.

## How to run

Open `index.html` in a browser.

Or, if you want a local URL:

```bash
node server.mjs
```

Then visit `http://127.0.0.1:8000`.

## What it does

- Filters movies by genre, mood, decade, runtime, rating, and search terms.
- Lets users mark movies they liked.
- Scores each movie using genre overlap, mood fit, similar liked movies, rating, and metadata matches.
- Shows the top match plus a ranked list of other recommendations.

## Where to customize

- Add or edit movies in `app.js`.
- Adjust scoring inside the `scoreMovie()` function.
- Connect a real API or dataset by replacing the `movies` array with fetched data.
