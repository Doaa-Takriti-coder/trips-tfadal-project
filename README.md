# trips-tfadal-project
google maps for trips project
# Trip Route Calculation Application

This is a web application that allows users to calculate and view driving directions between two locations using Google Maps API. The application enables users to input their origin and destination, calculate the route, and view the distance and duration of the trip.

## Features

- **Input Autocomplete**: Uses Google Places API to provide autocomplete suggestions for origin and destination addresses.
- **Route Calculation**: Calculates the best route between the origin and destination using Google Maps Directions API.
- **Route Display**: Displays the route on a Google Map and shows the distance and duration of the trip.
- **Loading Indicator**: A loading indicator is displayed while the route is being calculated.
- **Error Handling**: Displays a failure message if the input is invalid or if the route calculation fails.

## Requirements

- Node.js (v18.19.0 or higher)
- React (v19.0.0 or higher)
- Google Maps API Key

## Installation

Follow these steps to get your development environment running:

1. **Clone the Repository**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/Doaa-Takriti-coder/trips-tfadal-project.git
   cd trips-dashboard

 2- Install Dependencies :
   npm install
 # or
 yarn install

 3-Start the Application:
 npm start
# or
yarn start
The application will be running on http://localhost:3000.

Usage:

Enter the Origin and Destination: Use the input fields to type the origin and destination addresses. The inputs use autocomplete powered by Google Places API.
Calculate the Route: Click on the "Calculate Route" button. The application will calculate the best driving route and display it on the map, along with the distance and duration.
Clear the Route: Click on the "Clear" button to reset the form and remove the route from the map.
Loading State: While the route is being calculated, the "Calculate Route" button will show a "Calculating..." text, and the application will display a loading indicator.

How It Works
When the user enters the origin and destination addresses, the app sends a request to the Google Maps Directions API to calculate the best route between the two locations.
The route is displayed on a map using the Google Maps JavaScript API, and the distance and duration are shown below the map.
If there is an error (such as empty fields or a failure in the API request), the app will show an error message and set the route status to "failed".

Example of Functionality
When a user enters a valid origin and destination and clicks on "Calculate Route", the application sends a request to the Google Maps Directions API, processes the response, and displays the route on the map along with the distance and duration of the trip. If the inputs are invalid (empty fields), the app will show a failure message and reset the state.



