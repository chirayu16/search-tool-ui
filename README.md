# Movie Search Application

A Vue.js-based movie search application that uses the OMDb API to fetch and display movie details.

## Demo
You can view the live app here: [Movie Search Application ](https://search-tool-ui.netlify.app/)


## Features
- Search for movies by their titles using the search bar.
- View movie information as search result
- Displays detailed information about a selected movie in a modal window.

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/chirayu16/search-tool-ui.git
   cd search-tool-ui
2. Install dependencies:
   ```bash
   npm install
3. Set Up Environment Variables
   ```bash
   VITE_API_KEY=your_api_key_here
4. Run the development server:
   ```bash
    npm run dev
    The application will be accessible at http://localhost:5173.
5.  Build for Production
    ```bash
    npm run build
    
## Functionalities

### Search Bar
- **Debounced Input Field**: Reduces the frequency of API calls.
- **Dynamic Search**: Triggers a new movie search whenever a query is entered.

### Infinite Scrolling
- **Scroll Position Monitoring**: Uses an event listener to track the user's scroll position.
- **Automatic Loading**: Loads more movies automatically when the user nears the bottom of the page.

### Movie Modal
- **Detailed Movie Information**: Fetches detailed information about a movie by its IMDb ID when clicked.
- **Modal Overlay Display**: Displays movie data in a modal overlay.

### Skeleton and Spinner Loaders
- Provides visual feedback during data loading processes.

### Theme Toggle
- **Dynamic Theme Switching**: Allows users to switch between light and dark themes.
  
## API Key and OMDb Integration
  - Obtain an API key from OMDb API.
  - Add the API key to the .env file under VITE_API_KEY.
  - The app uses this key to fetch data from OMDb via Axios HTTP requests.
  - 
## Tech Stack
    Frontend: Vue 3 + Vite
    Styling: Tailwind CSS
    API: OMDb API
    Utility Library: Lodash (debounce)
    HTTP Client: Axios

## License
- This project is licensed under the MIT License.
