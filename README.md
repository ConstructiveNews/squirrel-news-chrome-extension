# Chrome extension for Squirrel News.

This project is a Chrome extension for the [Squirrel News](https://squirrel-news.net/) website. 

It allows you to view the latest news on the new tab of your browser.

## Technologies used

* React 
* Typescript 
* Vite 
* Zustand
* Tailwind CSS
* Firebase
* i18next
* Jest 
* ESLint
* Prettier

## Features

1. Single Page Application (SPA) built with React. 
2. Responsive markup with Tailwind CSS. 
3. The App supports German and English languages. The default language is automatically set based on the user's browser language. Read more about it in [this design note](design_notes/2_setting_language.md)
4. The App supports dark mode. The app automatically sets the theme based on the user's browser settings to prevent discomfort. Read more about it in [this design note](design_notes/1_setting_theme_mode.md)
5. The app includes a search field that automatically detects the user's default search engine and uses it to perform searches.
6. Unit test with Jest. At the moment the tests cover the main fetchArticles function. Read more about it in [this design note](design_notes/4_test_fetchArticles.md)

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

You'll find the running version at http://localhost:5173.

## Testing

```sh
# Run tests
npm run test
```
 
## Publishing new version

1. Bump the version in `manifest.json` and `package.json`.
2. Build the app for production: `npm run build`.
3. Upload the `dist.zip` folder to the Chrome Web Store.
