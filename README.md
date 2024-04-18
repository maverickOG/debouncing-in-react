# Mofie

This is a simple React application called "Movie" that allows users to search for movies using the OMDb API. The app fetches and displays movie titles, release years, and posters based on the user's search query.

## Features

- Search for movies by entering a keyword in the input field
- Display a list of movies with their titles, release years, and posters
- Show a loading indicator while fetching data from the API
- Implements debouncing to improve performance by limiting the rate of API calls

## Installation

1. Clone the repository:

```
git clone https://github.com/maverickOG/mofie.git
```

2. Navigate to the project directory:

```
cd debouncing
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Obtain an API key from the [OMDb API](http://www.omdbapi.com/) website.

2. Replace the placeholder API key in `App.js` with your actual API key:

```javascript
axios.get(`http://www.omdbapi.com/?&apikey=YOUR_API_KEY&s=${search}`)
```

3. Start the development server:

```
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the app running.

5. Enter a keyword in the search input field to search for movies.

## Technologies Used

- React
- Vite
- Axios (for making API requests)
- OMDb API

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
