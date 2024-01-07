# Chrome extension for Squirrel News.

This project is a Chrome extension for the [Squirrel News](https://squirrel-news.net/) website. 

It allows you to view the latest news on the new tab page of your browser.

## Technologies used

* React 
* Typescript 
* Firebase
* Vite 
* Zustand
* Tailwind CSS

## Features

1. Single Page Application (SPA) built with React. 
2. Responsive markup with Tailwind CSS. 
3. The App supports German and English languages. The default language is automatically set based on the user's browser language. The news is then fetched and displayed in the selected language. Users can change the language at any time, and the app will fetch and display the news in the chosen language.
4. The App supports dark mode. The app automatically sets the theme based on the user's browser settings to prevent discomfort. The user can also change the theme at any time.
5. The app includes a search field that automatically detects the user's default search engine and uses it to perform searches.

## Development

```sh
# Install dependencies
npm install

# Option 1: run the app in browser mode (use http://localhost:5173 for local debugging)
npm run dev

# Option 2: run the app in extension mode (make sure to load the extension in Chrome)
npm run mon

# Build the app for production
npm run build
```
 
## Publishing new version

1. Bump the version in `manifest.json` and `package.json`.
2. Build the app for production: `npm run build`.
3. Upload the `dist.zip` folder to the Chrome Web Store.
