# Language Setting

Upon page initialization, `i18n` checks the user's preferred language setting and fetches news and UI translations accordingly.  

The articles in the database are stored in German and English, allowing the user to switch between these two languages.

The language can be changed at any time by the user. Once the language is changed, the browser extension will fetch the news in the selected language, reset the article state, and display the news in the chosen language.