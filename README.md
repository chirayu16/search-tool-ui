# Movie Search Application

A Vue.js-based movie search application that uses the OMDb API to fetch and display movie details. The app includes features like a search bar, infinite scrolling for loading more results, theme toggle (light/dark mode), and a modal for detailed movie information.

## Features
Search Functionality

Search for movies by their titles using the search bar.
Utilizes debounce for optimizing API calls during user input.
Theme Toggle

Switch between light and dark modes for better user experience.
Infinite Scrolling

Automatically loads more movies as the user scrolls down the page.
Stops loading when no more results are available.
Movie Details Modal

Displays detailed information about a selected movie in a modal window.
Responsive Design

Adapts seamlessly to various screen sizes.
Fallback Poster

Replaces missing movie posters with a default placeholder image.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
