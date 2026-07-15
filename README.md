# 🎂 For Your Birthday

A little interactive birthday website made for one person, not the internet.

Type in a name, watch it pop with a "Happy Birthday" moment, blow out candles to reveal a few wishes, flip through some bad jokes, and read a birthday message for the year ahead — confetti and floating balloons included.

## Live demo

Once GitHub Pages is enabled for this repo (Settings → Pages → source: `main`), the site will be live at:

```
https://hemakshiyeole01.github.io/for-your-birthday/
```

## Running it locally

No build step, no dependencies. Just open `index.html` in a browser — or, for the best experience, serve the folder locally:

```bash
python3 -m http.server
```

then visit `http://localhost:8000`.

## Project structure

```
index.html   — page structure and content
style.css    — all styling and animations
script.js    — interactivity (entry flow, candles, confetti, jokes)
```

## Customizing

- **Wishes**: edit the `candleWishes` array in `script.js`
- **Jokes**: edit the `jokes` array in `script.js`
- **Closing message**: edit the text inside `.message-box` in `index.html`
- **Colors**: edit the CSS variables at the top of `style.css`
