<!-- Project Name -->
PokeMem

<!-- Description -->
This project is a Pokemon website with various pages built using React. It allows users to explore pokemon, view individual pokemon details, vote for their favorite pokemon, add new pokemon, and more.

<!-- Client -->
The client-side of the project consists of a React application with several pages:

1. Homepage: Introduces the site and provides an overview of Pokemons.
2. Pokemon Page: Lists all the pokemon and allows users to filter pokemon based on various criteria. It also provides the option to delete pokemon.
3. Game Page: Displays detailed information about an individual Pokemon. Users can view the Pokemon's name, description, votes, and other details.
4. Search Page: Shows the pokemon with the highest number of votes.
5. Add a Snack Page: Enables users to add a new snack by providing a snack name, description.
6. Not Found Page: Displays a message and a link to the homepage when a user attempts to visit a non-existent page.

*All controls and links on each page are functional and provide the intended functionality.*

<!-- Installation -->
To install the required libraries in client side, please follow these steps:

* Clone the repository from GitHub Repository URL.
* CD into client
* Run the following command to install the dependencies:

npm install

<!-- Running the Server -->
To run the server and launch the application, use the following steps:

Ensure that all dependencies are installed by following the installation instructions mentioned above.

Run the following command in client folder:

npm run dev

The application will be launched and can be accessed at http://localhost:3000.



<!-- Built With -->
Vite
React
Node.js
Express
PostgreSQL

<!-- Known Bugs -->
On the Add snacks page, snacks are not updating when submit button is pressed. The error message is displayed instead.
